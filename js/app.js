// (function (data) {})(data);

const doc = document;
const app = doc.querySelector('#app');

/**
 * Skill Progress
 */
function autoCounter(element, current, level) {
  element.innerHTML = ++current;
  if (current < level) {
    setTimeout(() => autoCounter(element, current, level), 1000 / level);
  }
}
function showSkillProgress() {
  const winHeight = document.documentElement.clientHeight;
  const skillListLis = doc.querySelectorAll('.skills-list>li');
  skillListLis.forEach(skill => {
    const level = skill.dataset.level;
    skill.querySelector('.levelNum').innerHTML = level;
    const progress = skill.querySelector('.progress')
    if (progress.getBoundingClientRect().bottom < winHeight) {
      progress.style.width = `${level}%`;
      // if(skill.querySelector('.levelNum').textContent < level) {
      //   autoCounter(skill.querySelector('.levelNum'), 0, level);
      // }
    }
  })
}
showSkillProgress();
window.addEventListener('scroll', showSkillProgress);
