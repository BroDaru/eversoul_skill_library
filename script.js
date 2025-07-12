// script.js

// --- 1. 변수 선언 ---
const firebaseConfig = { /* ... (기존 설정 그대로) ... */ };
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const searchInput = document.getElementById('searchInput');
const rarityFilter = document.getElementById('rarityFilter');
const skillList = document.getElementById('skillList');

// 페이지네이션 관련 요소 추가
const pageSizeFilter = document.getElementById('pageSizeFilter');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');
const pageIndicator = document.getElementById('page-indicator');

// 페이지 상태 관리 변수
let currentPage = 1;
let pageSize = parseInt(pageSizeFilter.value, 10);


// --- 2. 핵심 함수들 ---

function renderSkills() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedRarityGlobal = rarityFilter.value;
    skillList.innerHTML = '';

    // 1. 모든 필터링을 먼저 적용하여 전체 결과 목록 생성
    const filteredSpirits = spiritsData.filter(spirit => {
        const spiritName = spirit.character.toLowerCase();
        const matchesNickname = (spirit.nickname || []).some(nick => nick.toLowerCase().includes(searchTerm));
        const matchesCharacter = spiritName.includes(searchTerm) || matchesNickname;
        const hasMatchingSkillTag = spirit.skills.some(skill => {
            let relevantTags = [];
            if (skill.skillType === '유물' && skill.levels) {
                if (skill.levels[selectedRarityGlobal] && skill.levels[selectedRarityGlobal].tags)
                    relevantTags = skill.levels[selectedRarityGlobal].tags;
            } else if (skill.tags) {
                relevantTags = skill.tags;
            }
            return relevantTags.join(' ').toLowerCase().includes(searchTerm);
        });
        const matchesGlobalRarity = !selectedRarityGlobal || spirit.skills.some(s => s.skillType === '유물' && s.levels[selectedRarityGlobal]);
        if(searchTerm.trim() === '') return matchesGlobalRarity;
        return (matchesCharacter || hasMatchingSkillTag) && matchesGlobalRarity;
    });

    // 2. 페이지네이션 로직 적용
    const totalPages = Math.ceil(filteredSpirits.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const spiritsToShow = filteredSpirits.slice(startIndex, endIndex); // 현재 페이지에 해당하는 정령만 잘라내기

    // 3. 잘라낸 정령 목록으로 화면 렌더링
    spiritsToShow.forEach(spirit => {
        // ... (이 부분의 렌더링 로직은 기존과 완전히 동일합니다) ...
        let skillsToRender = spirit.skills;
        if (searchTerm.trim() !== '' && !spirit.character.toLowerCase().includes(searchTerm) && !(spirit.nickname || []).join(' ').toLowerCase().includes(searchTerm)) {
            skillsToRender = spirit.skills.filter(skill => {
                let relevantTags = [];
                if (skill.skillType === '유물' && skill.levels) {
                    if (skill.levels[selectedRarityGlobal] && skill.levels[selectedRarityGlobal].tags) {
                        relevantTags = skill.levels[selectedRarityGlobal].tags;
                    }
                } else if (skill.tags) {
                    relevantTags = skill.tags;
                }
                return relevantTags.join(' ').toLowerCase().includes(searchTerm);
            });
        }
        if (skillsToRender.length > 0) {
            let skillsHtml = '';
            skillsToRender.forEach(skill => {
                let tagsHtml = '', headerHtml = '', description = '', tags = [];
                if (skill.skillType === '유물') {
                    const initialRarity = selectedRarityGlobal || skill.defaultRarity;
                    const currentLevel = skill.levels[initialRarity];
                    description = currentLevel.description;
                    tags = currentLevel.tags || [];
                    let optionsHtml = '';
                    for (const rarityKey in skill.levels) {
                        const isSelected = rarityKey === initialRarity ? 'selected' : '';
                        optionsHtml += `<option value="${rarityKey}" ${isSelected}>${rarityKey}</option>`;
                    }
                    headerHtml = `<div class="skill-card-header"><h3>${skill.skillName}</h3><select class="artifact-rarity-select" data-character="${spirit.character}" data-skill-name="${skill.skillName}">${optionsHtml}</select></div>`;
                } else {
                    description = skill.description;
                    tags = skill.tags || [];
                    headerHtml = `<div class="skill-card-header"><h3>${skill.skillName}</h3></div>`;
                }
                if (tags.length > 0) {
                    tagsHtml = '<div class="tags-container">';
                    const tagDescriptions = window.tagDescriptions || {};
                    tags.forEach(tag => {
                        const tagDesc = tagDescriptions[tag] || '';
                        tagsHtml += `<span class="tag" title="${tagDesc}">${tag}</span>`;
                    });
                    tagsHtml += '</div>';
                }
                skillsHtml += `<div class="skill-card" data-skill-name="${skill.skillName}">${headerHtml}<p><strong>스킬 타입:</strong> ${skill.skillType}</p><p class="skill-description">${description}</p>${tagsHtml}</div>`;
            });
            const spiritCardHtml = `<div class="spirit-card"><h2 class="spirit-name">${spirit.character}</h2><div class="skills-grid">${skillsHtml}</div></div>`;
            skillList.innerHTML += spiritCardHtml;
        }
    });
    
    // 4. 페이지네이션 UI 업데이트
    updatePaginationUI(totalPages);
}

// 페이지네이션 UI 업데이트 함수
function updatePaginationUI(totalPages) {
    pageIndicator.textContent = `페이지 ${currentPage} / ${totalPages > 0 ? totalPages : 1}`;
    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages || totalPages === 0;
}


// --- 3. 이벤트 처리 ---
function handleRarityChange(event) { /* ... 기존과 동일 ... */ }

searchInput.addEventListener('input', () => {
    currentPage = 1; // 검색 시 첫 페이지로 리셋
    renderSkills();
});

rarityFilter.addEventListener('change', () => {
    currentPage = 1; // 필터 변경 시 첫 페이지로 리셋
    renderSkills();
});

pageSizeFilter.addEventListener('change', (e) => {
    pageSize = parseInt(e.target.value, 10);
    currentPage = 1; // 페이지 크기 변경 시 첫 페이지로 리셋
    renderSkills();
});

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderSkills();
    }
});

nextPageButton.addEventListener('click', () => {
    currentPage++;
    renderSkills();
});

skillList.addEventListener('change', handleRarityChange);

window.onload = renderSkills;
