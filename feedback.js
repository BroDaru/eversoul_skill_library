// feedback.js

// --- 1. 설정 및 변수 선언 ---
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const ADMIN_EMAIL = "your-admin-email@gmail.com"; 

const form = document.getElementById('feedback-form');
const feedbackText = document.getElementById('feedback-text');
const commentList = document.getElementById('comment-list');
const adminLoginLink = document.getElementById('admin-login-link');
const adminLogoutLink = document.getElementById('admin-logout-link');
const userInfo = document.getElementById('user-info');


// --- 2. 핵심 함수들 ---

function generateAnonymousId() {
    // ... (기존과 동일)
    const prefixWords = (localStorage.getItem('prefixWords') || '익명의').split('\n').filter(Boolean);
    const suffixWords = (localStorage.getItem('suffixWords') || '구원자').split('\n').filter(Boolean);
    const auxWords = (localStorage.getItem('auxWords') || '').split('\n').filter(Boolean);
    const prefix = prefixWords[Math.floor(Math.random() * prefixWords.length)];
    const suffix = suffixWords[Math.floor(Math.random() * suffixWords.length)];
    let fullName = `${prefix} ${suffix}`;
    if (auxWords.length > 0 && Math.random() < 0.5) {
        const aux = auxWords[Math.floor(Math.random() * auxWords.length)];
        fullName = `${prefix} ${aux} ${suffix}`;
    }
    const randomNumber = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
    return `${fullName}#${randomNumber}`;
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

function googleLogin() { /* ...기존과 동일... */ }
function googleLogout() { /* ...기존과 동일... */ }
function loadComments(user) { /* ...기존과 동일... */ }


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

// 댓글 삭제 이벤트 (기존과 동일)
commentList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-button')) {
        const docId = e.target.dataset.id;
        if (confirm("정말로 이 댓글을 삭제하시겠습니까?")) {
            db.collection("feedback").doc(docId).delete();
        }
    }
});

// 로그인/로그아웃 링크 클릭 (기존과 동일)
adminLoginLink.addEventListener('click', googleLogin);
adminLogoutLink.addEventListener('click', googleLogout);


// --- 4. 초기 실행 로직 (기존과 동일) ---
auth.onAuthStateChanged(user => {
    if (user) {
        const isAdmin = user.email === ADMIN_EMAIL;
        userInfo.textContent = isAdmin ? `관리자: ${user.displayName}` : `${user.displayName} (권한 없음)`;
        adminLoginLink.style.display = 'none';
        adminLogoutLink.style.display = 'inline-block';
    } else {
        userInfo.textContent = '';
        adminLoginLink.style.display = 'inline-block';
        adminLogoutLink.style.display = 'none';
    }
    loadComments(user);
});
