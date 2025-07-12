// feedback.js

// --- 1. 설정 및 변수 선언 ---
const firebaseConfig = {
    apiKey: "AIzaSyA5pM7A922WJZgY_9huOg6YB3iUolojlyg",
    authDomain: "eversoul-skill-library.firebaseapp.com",
    projectId: "eversoul-skill-library",
    storageBucket: "eversoul-skill-library.appspot.com",
    messagingSenderId: "997429178700",
    appId: "1:997429178700:web:c36121136fc56b32fadfe9",
    measurementId: "G-WD9GT5Q9YR"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// ADMIN_EMAIL 변수는 이제 필요 없으므로 삭제했습니다.

const form = document.getElementById('feedback-form');
const feedbackText = document.getElementById('feedback-text');
const commentList = document.getElementById('comment-list');
const adminLoginLink = document.getElementById('admin-login-link');
const adminLogoutLink = document.getElementById('admin-logout-link');
const userInfo = document.getElementById('user-info');

// --- 2. 핵심 함수들 ---

function generateAnonymousId() {
    // ... (이 함수는 기존과 동일)
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

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(error => console.error("로그인 오류:", error));
}

function googleLogout() {
    auth.signOut();
}

function loadComments(user) {
    db.collection("feedback").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        commentList.innerHTML = '';
        snapshot.forEach((doc) => {
            const comment = doc.data();
            const docId = doc.id;
            const date = comment.timestamp ? comment.timestamp.toDate().toLocaleString() : '방금 전';

            // 이제 user 객체의 존재 여부로만 삭제 버튼을 표시합니다.
            // 실제 삭제 권한은 서버의 보안 규칙이 결정합니다.
            const adminActions = user
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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = feedbackText.value;
    if (text.trim() === '') return;
    db.collection("feedback").add({
        author: generateAnonymousId(),
        text: text,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => { form.reset(); });
});

commentList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-button')) {
        const docId = e.target.dataset.id;
        // 로그인한 사용자라면 누구나 삭제를 '시도'할 수 있습니다.
        // 하지만 서버의 보안 규칙이 관리자가 아니면 요청을 거부합니다.
        db.collection("feedback").doc(docId).delete().catch(error => {
            alert("삭제 권한이 없습니다.");
            console.error("삭제 오류:", error);
        });
    }
});

adminLoginLink.addEventListener('click', googleLogin);
adminLogoutLink.addEventListener('click', googleLogout);

// --- 4. 초기 실행 로직: 사용자의 로그인 상태 변화 감지 ---
auth.onAuthStateChanged(user => {
    if (user) {
        userInfo.textContent = `로그인 계정: ${user.displayName}`;
        adminLoginLink.style.display = 'none';
        adminLogoutLink.style.display = 'inline-block';
    } else {
        userInfo.textContent = '';
        adminLoginLink.style.display = 'inline-block';
        adminLogoutLink.style.display = 'none';
    }
    loadComments(user);
});