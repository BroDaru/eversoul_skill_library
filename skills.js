// skills.js
const spiritsData = [
    {
        "character": "메피스토펠레스",
        "nickname": ["메피", "정실"],
        "skills": [
            {
                "skillName": "방주의 창",
                "skillType": "얼티밋",
                "description": "공격력이 가장 높은 적과 그 주변 4m범위에 공격력 300%의 피해를 입히고, 대상이 분석상태일 때 공격력 190%의 추가 피해를 입힌다. 공격 후 10초 동안 메피스토펠레스의 공격력이 50% 증가한다.",
                "tags": ["광역", "자신의 공격력 증가"]
            },
            {
                "skillName": "코드: 오버 드라이브",
                "skillType": "메인",
                "description": "가장 가까운 적에게 광선을 발사하여 폭 2m 직선 범위에 공격력 230%의 피해를 입히고 대상의 방어력을 8초 동안 15%감소 시킨다. 적이 분석 상태이면 공격력 150%의 추가 피해를 입힌다.",
                "tags": ["광역", "방어력 감소", "디버프"]
            },
            {
                "skillName": "프리즘 레이",
                "skillType": "서브1",
                "description": "가장 가까운 적을 대상으로 폭 2m 직선 벙위에 공격력 180%의 피해를 입히고 적의 명중을 6초 동안 20 감소시킨다. 적이 분석상태면 공격력 110%의 추가 피해를 입힌다.",
                "tags": ["광역", "명중 감소", "디버프"]
            },
            {
                "skillName": "코드: 배니시",
                "skillType": "서브2",
                "description": "공격력이 가장 높은 적을 8초 동안 기절시킨다. 기절의 유지시간 동안 대상이 받는 치명타 피해량이 30% 증가한다.",
                "tags": ["단일", "기절", "치명타 피해 증가", "디버프"]
            },
            {
                "skillName": "다차원 분석 시스템",
                "skillType": "서브3",
                "description": "18초 동안 모든 적의 치명타 피격률을 30% 증가시킨다.",
                "tags": ["광역", "치명타 피격률 증가", "디버프"]
            },
            {
                "skillName": "분석 심화",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "<다차원 분석 시스템> 스킬에 18초 동안 방어력을 7.5% 감소시키는 효과를 추가시킨다.",
                        "tags": ["방어력 감소", "디버프"]
                    },
                    "레전+": {
                        "description": "<다차원 분석 시스템> 스킬에 18초 동안 방어력을 18.75%, <코드: 배니시> 스킬에 12초 동안 마법저항을 15% 감소시키는 효과를 추가시킨다. ",
                        "tags": ["방어력 감소", "마법 저항 감소", "디버프",]
                    },
                    "오리진": {
                        "description": "<다차원 분석 시스템> 스킬에 18초 동안 방어력을 30%, <코드: 배니시> 스킬에 12초 동안 마법저항을 24% 감소시키는 효과를 추가시킨다. ",
                        "tags": ["방어력 감소", "마법 저항 감소", "디버프"]
                    }
                }
            }
        ]
    },
    {
        "character": "미카",
        "nickname": ["햄스터", "생쥐", "제리"],
        "skills": [
            {
                "skillName": "별빛 스테이지",
                "skillType": "얼티밋",
                "description": "모든 적에게 공격력 300%의 피해를 입힌다. 시하와 함께 배치했을 경우 공격력 150%의 추가 피해를 입히고 4초 동안 기절시킨다.",
                "tags": ["광역", "기절", "파트너기믹"]
            },
            {
                "skillName": "뮤직 스타트♡",
                "skillType": "메인",
                "description": "주변 3m 범위에 공격력 250%의 피해를 입힌다. 시하와 함께 배치했을 경우 공격력 90%의 추가 피해를 입히고 3초동안 기절시킨다.",
                "tags": ["광역", "기절", "파트너기믹"]
            },
            {
                "skillName": "스트로크",
                "skillType": "서브1",
                "description": "주변 2.5m 범위에 공격력 170%의 피해를 입힌다.  시하와 함께 배치했을 경우 공격력 80%의 추가 피해를 입히고, 대상의 공격력을 8초 동안 20% 감소시킨다.",
                "tags": ["광역", "공격력 감소", "디버프", "파트너기믹"]
            },
            {
                "skillName": "큐트♡라이브",
                "skillType": "서브2",
                "description": "<큐트♡라이브>를 진행하는 동안 물리/마법 저항이 30% 증가하며 주변 3m 범위에 공격력 240%의 피해를 입힌다.  시하와 함께 배치했을 경우 공격력 120%의 추가 피해를 입힌다.",
                "tags": ["광역", "자신의 물리저항 증가", "자신의 마법저항 증가", "파트너기믹"]
            },
            {
                "skillName": "알토 하모니",
                "skillType": "패시브",
                "description": "시하와 함께 배치했을 경우 미카의 공격력과 물리/마법 저항이 20%만큼 증가한다.",
                "tags": ["자신의 물리저항 증가", "자신의 마법저항 증가", "파트너기믹"]
            },
            {
                "skillName": "기타리스트",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "자신의 공격력이 5% 치명타 위력이 10% 증가한다. <큐트♡라이브> 스킬 사용 시 15초 동안 범위 내 아군의 공격력을 25% 증가시키고, 스킬 사용 중 군중제어 효과와 넉백 계열 효과에 면역 상태가 된다. 시하가 아군으로 존재할 시 시하에게도 같은 능력치를 제공한다.",
                        "tags": ["자신의 공격력증가", "자신의 치명타 위력 증가", "공격력증가", "버프"]
                    },
                    "레전+": {
                        "description": "자신의 공격력이 12.5% 치명타 위력이 25% 증가한다. <큐트♡라이브> 스킬 사용 시 15초 동안 범위 내 아군의 공격력을 25% 증가시키고, 스킬 사용 중 1500의 마나를 회복하며 군중제어 효과와 넉백 계열 효과에 면역 상태가 된다. 시하가 아군으로 존재할 시 시하에게도 같은 능력치를 제공한다.",
                        "tags": ["자신의 공격력증가", "자신의 치명타 위력 증가", "자신의 마나 회복", "공격력증가", "버프"]
                    },
                    "오리진": {
                        "description": "자신의 공격력이 20% 치명타 위력이 40% 물리/마법 저항이 20% 증가한다. <큐트♡라이브> 스킬 사용 시 15초 동안 범위 내 아군의 공격력을 25% 증가시키고, 스킬 사용 중 1500의 마나를 회복하며 군중제어 효과와 넉백 계열 효과에 면역 상태가 된다. 시하가 아군으로 존재할 시 시하에게도 같은 능력치를 제공한다.",
                        "tags": ["자신의 공격력증가", "자신의 치명타 위력 증가", "자신의 마나 회복", "공격력증가", "버프"]
                    }
                }
            }
        ]
    },
    {
        "character": "아드리안",
        "nickname": ["그랩", "정의바보"],
        "skills": [
            {
                "skillName": "악을 멸하는 심판의 창",
                "skillType": "얼티밋",
                "description": "공격력이 가장 높은 적을 대상으로 이동하여 주변 3m 범위에 400%의 피해를 입히고 3초동안 기절, 공중으로 띄운다.",
                "tags": ["광역", "기절", "에어본"]
            },
            {
                "skillName": "광휘의 격류",
                "skillType": "메인",
                "description": "자신 주변 3m 범위에 공격력 210%의 피해를 입히고 2초 기절시킨다. 범위 내의 아군은 공격력 120%만큼 체력을 회복시킨다.",
                "tags": ["광역", "기절", "회복"]
            },
            {
                "skillName": "광휘의 고리",
                "skillType": "서브1",
                "description": "가장 멀리 위치한 적에게 공격력 160%의 피해를 입히고 6초동안 공격력 50%의 피해를 입는 감전상태로 만들고 6초 동안 기절시켜 자신의 앞으로 끌고온다.",
                "tags": ["단일", "그랩", "감전", "기절"]
            },
            {
                "skillName": "성역 선포",
                "skillType": "서브2",
                "description": "자신의 위치에서 10초 동안 유지되는 2.5m 벙위의 <성역>을 만들어 영역 내에 들어온 적에게 2초마다 공격력 75%의 피해를 입히고, 아군의 체력을 공격력 37.5%만큼 회복시킨다. <성역>을 펼칠 때 10초 동안 공격력 150%만큼 보호막을 생성한다.",
                "tags": ["광역", "회복", "보호막"]
            },
            {
                "skillName": "정의로운 투지",
                "skillType": "패시브",
                "description": "자신 주변 3.5m 범위 내에 있는 적 1명당 아드리안의 공격력이 16% 증가한다.",
                "tags": ["자신의 공격력"]
            },
            {
                "skillName": "정의로운 수호",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "<정의로운 투지>스킬에 방어력이 4% 증가하는 효과가 추가된다.",
                        "tags": ["자신의 방어력 증가"]
                    },
                    "레전+": {
                        "description": "자신 주변 3.5m 범위 내에 있는 적이 2명 이상일 경우 넉백 계열 효과에 면역이 된다. <정의로운 투지>스킬에 방어력이 10% 증가하는 효과가 추가된다.",
                        "tags": ["자신의 방어력 증가", "넉백 면역"]
                    },
                    "오리진": {
                        "description": "자신 주변 3.5m 범위 내에 있는 적이 2명 이상일 경우 넉백 계열, 도발을 제외한 군중제어 효과에 면역이 된다. <정의로운 투지>스킬에 방어력이 16% 증가하는 효과가 추가된다.",
                        "tags": ["자신의 방어력 증가", "넉백 면역", "군중제어 면역"]
                    }
                }
            }
        ]
    },
    {
        "character": "아야메",
        //"nickname": ["별명"],
        "skills": [
            {
                "skillName": "날카롭게 할퀴는 그림자",
                "skillType": "얼티밋",
                "description": "가장 가까운 적을 기준으로 2.5m 범위에 공격력의 360% 피해를 입히고, 8초동안 공격력 90%씩 피해를 입는 출혈 상태로 만든다. 대상이 이미 출혈 상태였을 경우 180%의 추가 피해를 입힌다.",
                "tags": ["광역", "출혈"]
            },
            {
                "skillName": "어둠 속에서 피어나는 꽃",
                "skillType": "메인",
                "description": "모든 적에게 공격력 200%의 피해를 입히고, 12초 동안 공격력 40%의 피해를 입히는 출혈 상태로 만든다. 대상이 이미 출혈 상태였을 경우 100%의 추가 피해를 입히고, 직접 피해가 치명타로 발동된다.",
                "tags": ["광역", "출혈"]
            },
            {
                "skillName": "휘감는 손아귀",
                "skillType": "서브1",
                "description": "가장 가까운 적에게 폭 3m, 길이 12m 범위의 적에게 공격력 150%의 피해를 입히고 8초 동안 속박상태로 만들며 공격력 50%의 피해를 입히는 출혈 상태로 만든다.",
                "tags": ["광역", "출혈", "속박"]
            },
            {
                "skillName": "밤의 잠식",
                "skillType": "서브2",
                "description": "가장 가까운 적과 주변 2m 범위에 공격력 90% 피해를 입히고, 8초 동안 유지되는 <잠식지대>영역을 만들어 2초마다 90%의 피해를 입힌다. <잠식지대>에 피해를 입은 적은 3초 동안 1중첩당 가속이 5% 감소하는 특수 디버프<잠식>이 부여된다.(최대 4중첩) 만약 <잠식>중첩이 3중첩 이상인 상태로 잠식지대 피해를 입을 시 <침식>상태가 되며 15초 동안 공격력 및 방어력이 20% 감소한다.",
                "tags": ["광역", "공격력 감소", "방어력 감소", "디버프"]
            },
            {
                "skillName": "매혹의 거울",
                "skillType": "서브3",
                "description": "공격력이 가장 높은 적을 8초 동안 매혹시킨다. 매혹 유지시간동안 대상의 공격력이 100% 증가하며, 대상이<침식>상태라면 <침식>효과의 시간을 갱신한다.",
                "tags": ["단일", "매혹"]
            },
            {
                "skillName": "마력잠식",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "제이드",
        //"nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "클레르",
        //"nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "캐서린",
        "nickname": ["음란수녀", "수녀님"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "셰리",
        "nickname": ["술꾼", "주정뱅이"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "도라",
        "nickname": ["곰"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "지호",
        //"nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "시하",
        "nickname": ["톰", "시하냥이", "캣"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "클라라",
        //"nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "하루",
        //"nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "순이",
        "nickname": ["토끼", "토깽이", "토순이"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "아이라",
        //"nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "플린",
        "nickname": ["폭탄마"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "탈리아",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "클로이",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "미리암",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "르네",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "나이아",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "비비안",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "니콜",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "재클린",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "페트라",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "니니",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "프림",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "레베카",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "벨라나",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "홍란",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "에리카",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "아키",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "리젤로테",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "가넷",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "마농",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "소연",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "클라우디아",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "나오미",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "다프네",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "멜피스",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "브라이스",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "루테",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "유리아",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "에일린",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "이디스",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "이브",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "린지",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "비올레트",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "에루샤",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "타샤",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "벨레드",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "칸나",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "조앤",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "사쿠요",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "캐서린(광휘)",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "헤이즐",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "도미니크",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "라리마",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "시그리드",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "오닉스",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "린지(타나토스)",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "릴리트",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "웨리",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "사쿠요(업화)",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "메피스토펠레스(여명)",
        "nickname": ["명피", "808", "정실"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "바이스",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "로제(홍염)",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "홍란(무쌍)",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "한울",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "지호(미르)",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "르네(백은)",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "라우라",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "하루(카무이)",
        "nickname": ["카루"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    },
    {
        "character": "니아",
        "nickname": ["별명"],
        "skills": [
            {
                "skillName": "",
                "skillType": "얼티밋",
                "description": "얼티밋스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "메인",
                "description": "메인스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브1",
                "description": "서브1스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "서브2",
                "description": "서브2스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "패시브",
                "description": "패시브스킬설명",
                "tags": ["태그1", "태그2"]
            },
            {
                "skillName": "",
                "skillType": "유물",
                "defaultRarity": "에픽",
                "levels": {
                    "에픽": {
                        "description": "유물스킬 에픽 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "레전+": {
                        "description": "유물스킬 레전+ 설명",
                        "tags": ["태그1", "태그2"]
                    },
                    "오리진": {
                        "description": "유물스킬 오리진 설명",
                        "tags": ["태그1", "태그2"]
                    }
                }
            }
        ]
    }
];