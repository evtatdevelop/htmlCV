// (function (data) {})(data);

// const doc = document;
const app = document.querySelector('#app');

/**
 * Header animation
 */
function displayHeaderElement(element) {
  element.style.opacity = '1';
  element.style.top = '0px';
}
const headerElements = Array.from(document.querySelectorAll('.header-element'));
function show(element) {
  setTimeout(() => {
    displayHeaderElement(element);
    if (headerElements.length > 0) show(headerElements.shift());
  }, 100);  
}
show(headerElements.shift());


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
  const skillListLis = document.querySelectorAll('.skills-list>li');
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
