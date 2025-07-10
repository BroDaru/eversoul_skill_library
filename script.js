// script.js
const searchInput = document.getElementById('searchInput');
const rarityFilter = document.getElementById('rarityFilter');
const skillList = document.getElementById('skillList');

function renderSkills() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedRarityGlobal = rarityFilter.value;
    skillList.innerHTML = '';

    const filteredSpirits = spiritsData.filter(spirit => {
        const spiritName = spirit.character.toLowerCase();

        // --- 검색 로직 수정: .join() 대신 .some()을 사용하여 각 별명을 개별적으로 확인 ---
        const matchesNickname = (spirit.nickname || []).some(nick => nick.toLowerCase().includes(searchTerm));
        const matchesCharacter = spiritName.includes(searchTerm) || matchesNickname;

        const hasMatchingSkillTag = spirit.skills.some(skill => {
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

        const matchesGlobalRarity = !selectedRarityGlobal || spirit.skills.some(s => s.skillType === '유물' && s.levels[selectedRarityGlobal]);

        return (matchesCharacter || hasMatchingSkillTag) && matchesGlobalRarity;
    });

    filteredSpirits.forEach(spirit => {
        let skillsToRender;

        const spiritName = spirit.character.toLowerCase();
        const matchesNickname = (spirit.nickname || []).some(nick => nick.toLowerCase().includes(searchTerm));

        // --- 렌더링 로직 수정: 태그 검색과 이름/별명 검색을 명확히 구분 ---
        // 검색어가 이름이나 별명과 일치하지 않을 때만 태그로 스킬을 필터링
        if (searchTerm.trim() !== '' && !spiritName.includes(searchTerm) && !matchesNickname) {
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
        } else {
            // 검색어가 없거나, 이름 또는 별명과 일치하면 모든 스킬 표시
            skillsToRender = spirit.skills;
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
                    headerHtml = `
                        <div class="skill-card-header">
                            <h3>${skill.skillName}</h3>
                            <select class="artifact-rarity-select" data-character="${spirit.character}" data-skill-name="${skill.skillName}">${optionsHtml}</select>
                        </div>`;
                } else {
                    description = skill.description;
                    tags = skill.tags || [];
                    headerHtml = `<div class="skill-card-header"><h3>${skill.skillName}</h3></div>`;
                }
                if (tags.length > 0) {
                    tagsHtml = '<div class="tags-container">';
                    tags.forEach(tag => { tagsHtml += `<span class="tag">${tag}</span>`; });
                    tagsHtml += '</div>';
                }
                skillsHtml += `
                    <div class="skill-card" data-skill-name="${skill.skillName}">
                        ${headerHtml}
                        <p><strong>스킬 타입:</strong> ${skill.skillType}</p>
                        <p class="skill-description">${description}</p>
                        ${tagsHtml}
                    </div>`;
            });
            const spiritCardHtml = `
                <div class="spirit-card">
                    <h2 class="spirit-name">${spirit.character}</h2>
                    <div class="skills-grid">${skillsHtml}</div>
                </div>`;
            skillList.innerHTML += spiritCardHtml;
        }
    });
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
        newLevelData.tags.forEach(tag => {
            newTagsHtml += `<span class="tag">${tag}</span>`;
        });
    }
    if (tagsContainer) tagsContainer.innerHTML = newTagsHtml;
}

searchInput.addEventListener('input', renderSkills);
rarityFilter.addEventListener('change', renderSkills);
skillList.addEventListener('change', handleRarityChange);
window.onload = renderSkills;