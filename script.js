// script.js

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

const searchInput = document.getElementById('searchInput');
const rarityFilter = document.getElementById('rarityFilter');
const skillList = document.getElementById('skillList');
const pageSizeFilter = document.getElementById('pageSizeFilter');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');
const pageIndicator = document.getElementById('page-indicator');

let currentPage = 1;
let pageSize = parseInt(pageSizeFilter.value, 10);
let totalFilteredSpirits = []; // 필터링된 전체 목록을 저장할 변수

// --- 2. 핵심 함수들 ---

function renderSkills() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedRarityGlobal = rarityFilter.value;
    skillList.innerHTML = '';

    // 필터링된 전체 목록을 업데이트
    totalFilteredSpirits = spiritsData.filter(spirit => {
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
        if (searchTerm.trim() === '') return matchesGlobalRarity;
        return (matchesCharacter || hasMatchingSkillTag) && matchesGlobalRarity;
    });

    const totalPages = Math.ceil(totalFilteredSpirits.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const spiritsToShow = totalFilteredSpirits.slice(startIndex, endIndex);

    spiritsToShow.forEach(spirit => {
        // ... (렌더링 로직은 기존과 동일)
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

    updatePaginationUI(totalPages);
}

function updatePaginationUI(totalPages) {
    pageIndicator.textContent = `페이지 ${currentPage} / ${totalPages > 0 ? totalPages : 1}`;
    prevPageButton.disabled = currentPage === 1;
    // 다음 버튼 비활성화 로직 수정
    nextPageButton.disabled = currentPage >= totalPages;
}

function handleRarityChange(event) {
    if (!event.target.matches('.artifact-rarity-select')) return;
    const dropdown = event.target;
    const selectedRarity = dropdown.value;
    const characterName = dropdown.dataset.character;
    const skillName = dropdown.dataset.skillName;
    const spirit = spiritsData.find(s => s.character === characterName);
    const skillData = spirit.skills.find(s => s.skillName === skillName);
    const newLevelData = skillData.levels[selectedRarity];
    const skillCard = dropdown.closest('.skill-card');
    const descriptionElement = skillCard.querySelector('.skill-description');
    const tagsContainer = skillCard.querySelector('.tags-container');
    descriptionElement.textContent = newLevelData.description;
    let newTagsHtml = '';
    if (newLevelData.tags && newLevelData.tags.length > 0) {
        const tagDescriptions = window.tagDescriptions || {};
        newLevelData.tags.forEach(tag => {
            const tagDesc = tagDescriptions[tag] || '';
            newTagsHtml += `<span class="tag" title="${tagDesc}">${tag}</span>`;
        });
    }
    if (tagsContainer) tagsContainer.innerHTML = newTagsHtml;
}

// --- 3. 이벤트 처리 ---
searchInput.addEventListener('input', () => {
    currentPage = 1;
    renderSkills();
});

rarityFilter.addEventListener('change', () => {
    currentPage = 1;
    renderSkills();
});

pageSizeFilter.addEventListener('change', (e) => {
    pageSize = parseInt(e.target.value, 10);
    currentPage = 1;
    renderSkills();
});

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderSkills();
    }
});

nextPageButton.addEventListener('click', () => {
    // 다음 버튼 클릭 로직 수정
    const totalPages = Math.ceil(totalFilteredSpirits.length / pageSize);
    if (currentPage < totalPages) {
        currentPage++;
        renderSkills();
    }
});

skillList.addEventListener('change', handleRarityChange);

window.onload = renderSkills;
