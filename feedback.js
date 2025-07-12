// feedback.js

// --- 1. 설정 및 변수 선언 ---
const firebaseConfig = {
  apiKey: "AIzaSyA5pM7A922WJZgY_9huOg6YB3iUolojlyg",
  authDomain: "eversoul-skill-library.firebaseapp.com",
  projectId: "eversoul-skill-library",
  storageBucket: "eversoul-skill-library.firebasestorage.app",
  messagingSenderId: "997429178700",
  appId: "1:997429178700:web:c36121136fc56b32fadfe9",
  measurementId: "G-WD9GT5Q9YR"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// ✅ 여기에 관리자 비밀번호를 설정하세요. (외부에 노출됩니다!)
const ADMIN_PASSWORD = "flynn";

const form = document.getElementById('feedback-form');
const feedbackText = document.getElementById('feedback-text');
const commentList = document.getElementById('comment-list');
const adminLoginLink = document.getElementById('admin-login-link');
const adminLogoutLink = document.getElementById('admin-logout-link');
const userInfo = document.getElementById('user-info');


// --- 2. 핵심 함수들 ---

function generateAnonymousId() {
    // 1. localStorage에서 모든 단어 목록을 불러와 하나로 합칩니다.
    const prefixWords = (localStorage.getItem('prefixWords') || '익명의').split('\n').filter(Boolean);
    const suffixWords = (localStorage.getItem('suffixWords') || '구원자').split('\n').filter(Boolean);
    const auxWords = (localStorage.getItem('auxWords') || '').split('\n').filter(Boolean);
    const allWords = [...prefixWords, ...suffixWords, ...auxWords];

    // 2. 단어가 하나도 없을 경우를 대비한 기본값 설정
    if (allWords.length === 0) {
        allWords.push('익명의', '구원자');
    }

    // 3. 전체 단어 목록을 무작위로 섞습니다 (피셔-예이츠 셔플 알고리즘).
    for (let i = allWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allWords[i], allWords[j]] = [allWords[j], allWords[i]]; // 배열 요소 교환
    }

    // 4. 이름에 사용할 단어 개수를 랜덤으로 정합니다 (예: 2개 또는 3개).
    const wordCount = Math.floor(Math.random() * 2) + 2;

    // 5. 섞인 단어 목록에서 정해진 개수만큼 단어를 뽑아 조합합니다.
    // 만약 전체 단어 수가 뽑을 개수보다 적으면, 있는 단어만 사용합니다.
    const randomName = allWords.slice(0, Math.min(wordCount, allWords.length)).join(' ');
    
    const randomNumber = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
    return `${randomName}#${randomNumber}`;
}

// --- 댓글 등록 로직을 별도 함수로 분리 ---
function submitFeedback() {
    const text = feedbackText.value;
    if (text.trim() === '') return;

    db.collection("feedback").add({
        author: generateAnonymousId(),
        text: text,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        form.reset(); // 입력창 초기화
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

function adminLogin() {
    const input = prompt("관리자 비밀번호를 입력하세요:");

    // 사용자가 입력을 취소한 경우
    if (input === null) {
        return;
    }

    if (input === ADMIN_PASSWORD) {
        // 비밀번호가 맞으면 세션 스토리지에 관리자 상태를 저장
        sessionStorage.setItem('eversoul-admin-token', 'true');
        alert("관리자 모드로 로그인되었습니다.");
        location.reload(); // 페이지를 새로고침하여 UI 변경
    } else {
        alert("비밀번호가 일치하지 않습니다.");
    }
}

/**
 * 관리자 로그아웃을 처리하는 새로운 함수
 */
function adminLogout() {
    // 세션 스토리지에서 관리자 상태를 제거
    sessionStorage.removeItem('eversoul-admin-token');
    alert("로그아웃되었습니다.");
    location.reload(); // 페이지를 새로고침하여 UI 변경
}

/**
 * 댓글 목록을 불러오는 함수 (isAdmin 인자 추가)
 */
function loadComments(isAdmin) {
    commentList.innerHTML = '';
    db.collection("feedback").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        commentList.innerHTML = '';
        snapshot.forEach((doc) => {
            const comment = doc.data();
            const date = new Date(comment.timestamp.seconds * 1000).toLocaleString();

            let deleteButtonHtml = '';
            // isAdmin이 true일 때만 삭제 버튼을 표시
            if (isAdmin) {
                deleteButtonHtml = `<button class="delete-button" data-id="${doc.id}">삭제</button>`;
            }

            const card = `
                <div class="comment-card">
                    <div class="comment-header">
                        <span class="comment-author">${comment.author}</span>
                        <span class="comment-date">${date}</span>
                        <div class="comment-actions">${deleteButtonHtml}</div>
                    </div>
                    <div class="comment-body">${comment.text.replace(/\n/g, '<br>')}</div>
                </div>`;
            commentList.innerHTML += card;
        });
    });
}


// --- 3. 이벤트 처리 ---

// '등록' 버튼 클릭 또는 Enter 키 입력 시 호출
form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitFeedback();
});

// --- 키보드 입력 이벤트 처리 (핵심 수정) ---
feedbackText.addEventListener('keydown', (e) => {
    // 1. Enter 키만 누르면 등록 (기존의 줄바꿈 동작 방지)
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); // 줄바꿈 방지
        submitFeedback();
    }
    // 2. Shift + Enter를 누르면 원래대로 줄바꿈 (아무 코드도 실행하지 않음)
});

// 댓글 삭제 이벤트
commentList.addEventListener('click', (e) => {
    const isAdmin = sessionStorage.getItem('eversoul-admin-token') === 'true';
    if (isAdmin && e.target.classList.contains('delete-button')) {
        const docId = e.target.dataset.id;
        if (confirm("정말로 이 댓글을 삭제하시겠습니까?")) {
            db.collection("feedback").doc(docId).delete();
        }
    }
});

// 로그인/로그아웃 링크에 새로운 함수 연결
adminLoginLink.addEventListener('click', adminLogin);
adminLogoutLink.addEventListener('click', adminLogout);


// --- 4. 초기 실행 로직 (기존과 동일) ---
// 페이지가 로드될 때 세션 스토리지를 확인하여 UI를 설정
document.addEventListener('DOMContentLoaded', () => {
    const isAdmin = sessionStorage.getItem('eversoul-admin-token') === 'true';

    if (isAdmin) {
        userInfo.textContent = '관리자 모드';
        adminLoginLink.style.display = 'none';
        adminLogoutLink.style.display = 'inline-block';
    } else {
        userInfo.textContent = '';
        adminLoginLink.style.display = 'inline-block';
        adminLogoutLink.style.display = 'none';
    }
    // 관리자 여부에 따라 댓글 로드
    loadComments(isAdmin);
});
