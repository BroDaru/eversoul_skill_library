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

// 이 비밀번호를 자신만 아는 값으로 변경하세요.
const ADMIN_PASSWORD = "flynn784";

const form = document.getElementById('feedback-form');
const feedbackText = document.getElementById('feedback-text');
const commentList = document.getElementById('comment-list');
const adminLoginLink = document.getElementById('admin-login-link');


// --- 2. 핵심 함수들 ---

function generateAnonymousId() {
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

function isAdmin() {
    return sessionStorage.getItem('eversoul-admin-token') === 'true';
}

function loadComments() {
    db.collection("feedback").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        commentList.innerHTML = '';
        snapshot.forEach((doc) => {
            const comment = doc.data();
            const docId = doc.id;
            const date = comment.timestamp ? comment.timestamp.toDate().toLocaleString() : '방금 전';

            const adminActions = isAdmin()
                ? `<div class="comment-actions"><button class="delete-button" data-id="${docId}">삭제</button></div>`
                : '';

            const commentHtml = `
                <div class="comment-card">
                    <div class="comment-header">
                        <span class="comment-author">${comment.author}</span>
                        <span class="comment-date">${date}</span>
                        ${adminActions}
                    </div>
                    <div class="comment-body">
                        <p>${comment.text.replace(/\n/g, '<br>')}</p>
                    </div>
                </div>`;
            commentList.innerHTML += commentHtml;
        });
    });
}


// --- 3. 이벤트 처리 ---

// 댓글 등록 이벤트
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = feedbackText.value;
    if (text.trim() === '') return;
    db.collection("feedback").add({
        author: generateAnonymousId(),
        text: text,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        form.reset();
    });
});

// 댓글 삭제 이벤트
commentList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-button')) {
        const docId = e.target.dataset.id;
        if (confirm("정말로 이 댓글을 삭제하시겠습니까?")) {
            db.collection("feedback").doc(docId).delete();
        }
    }
});

// 관리자 로그인 링크 클릭 이벤트
adminLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    const password = prompt("관리자 비밀번호를 입력하세요:");
    if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('eversoul-admin-token', 'true');
        alert('관리자 모드로 로그인했습니다.');
        loadComments(); // 댓글 목록을 다시 그려서 삭제 버튼 표시
    } else if (password !== null) { // 사용자가 취소를 누르지 않았을 때만
        alert('비밀번호가 올바르지 않습니다.');
    }
});


// --- 4. 초기 실행 로직 ---
// 페이지가 열리면 바로 댓글 목록을 불러옵니다.
loadComments();