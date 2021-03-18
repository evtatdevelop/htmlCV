// (function (data) {})(data);

const doc = document;
const app = doc.querySelector('#app');

/**
 * Skill Progress
 */
function showSkillProgress() {
  const winHeight = document.documentElement.clientHeight;
  const skillListLis = doc.querySelectorAll('.skills-list>li');
  skillListLis.forEach(skill => {
    const level = skill.dataset.level;
    skill.querySelector('.levelNum').textContent = level;
    const progress = skill.querySelector('.progress')
    if (progress.getBoundingClientRect().bottom < winHeight) {
      progress.style.width = `${level}%`;
    }
  })
}
showSkillProgress();
window.addEventListener('scroll', showSkillProgress);
