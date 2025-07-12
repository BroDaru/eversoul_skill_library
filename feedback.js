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

// ✅ 여기에 관리자 비밀번호를 설정하세요. (외부에 노출됩니다!)
const ADMIN_PASSWORD = "Eversoul";

const form = document.getElementById('feedback-form');
const feedbackText = document.getElementById('feedback-text');
const commentList = document.getElementById('comment-list');
const adminLoginLink = document.getElementById('admin-login-link');
const adminLogoutLink = document.getElementById('admin-logout-link');
const userInfo = document.getElementById('user-info');


// --- 2. 핵심 함수들 ---
function generateAnonymousId() {
    const prefixWords = (localStorage.getItem('prefixWords') || '익명의').split('\n').filter(Boolean);
    const suffixWords = (localStorage.getItem('suffixWords') || '구원자').split('\n').filter(Boolean);
    const auxWords = (localStorage.getItem('auxWords') || '').split('\n').filter(Boolean);
    const allWords = [...prefixWords, ...suffixWords, ...auxWords];

    if (allWords.length === 0) {
        allWords.push('익명의', '구원자');
    }

    for (let i = allWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allWords[i], allWords[j]] = [allWords[j], allWords[i]];
    }

    const wordCount = Math.floor(Math.random() * 2) + 2;
    const randomName = allWords.slice(0, Math.min(wordCount, allWords.length)).join(' ');
    const randomNumber = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
    return `${randomName}#${randomNumber}`;
}

function submitFeedback() {
    const text = feedbackText.value;
    if (text.trim() === '') return;

    db.collection("feedback").add({
        author: generateAnonymousId(),
        text: text,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
        .then(() => {
            form.reset();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

function adminLogin() {
    const input = prompt("관리자 비밀번호를 입력하세요:");
    if (input === null) {
        return;
    }
    if (input === ADMIN_PASSWORD) {
        sessionStorage.setItem('eversoul-admin-token', 'true');
        alert("관리자 모드로 로그인되었습니다.");
        location.reload();
    } else {
        alert("비밀번호가 일치하지 않습니다.");
    }
}

function adminLogout() {
    sessionStorage.removeItem('eversoul-admin-token');
    alert("로그아웃되었습니다.");
    location.reload();
}

function loadComments(isAdmin) {
    commentList.innerHTML = '';
    db.collection("feedback").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        commentList.innerHTML = '';
        snapshot.forEach((doc) => {
            const comment = doc.data();
            if (!comment.timestamp) return; // timestamp가 없는 데이터는 건너뛰기
            const date = new Date(comment.timestamp.seconds * 1000).toLocaleString();

            let deleteButtonHtml = '';
            if (isAdmin) {
                deleteButtonHtml = `<button class="delete-button" data-id="${doc.id}">삭제</button>`;
            }

            const commentText = comment.text.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, '<br>');
            const card = `
                <div class="comment-card">
                    <div class="comment-header">
                        <span class="comment-author">${comment.author}</span>
                        <span class="comment-date">${date}</span>
                        <div class="comment-actions">${deleteButtonHtml}</div>
                    </div>
                    <div class="comment-body">${commentText}</div>
                </div>`;
            commentList.innerHTML += card;
        });
    });
}


// --- 3. 이벤트 처리 ---

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitFeedback();
});

feedbackText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        submitFeedback();
    }
});

commentList.addEventListener('click', (e) => {
    const isAdmin = sessionStorage.getItem('eversoul-admin-token') === 'true';
    if (isAdmin && e.target.classList.contains('delete-button')) {
        const docId = e.target.dataset.id;
        if (confirm("정말로 이 댓글을 삭제하시겠습니까?")) {
            db.collection("feedback").doc(docId).delete();
        }
    }
});

adminLoginLink.addEventListener('click', adminLogin);
adminLogoutLink.addEventListener('click', adminLogout);


// --- 4. 초기 실행 로직 ---

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
    loadComments(isAdmin);
});
