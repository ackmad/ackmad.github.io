/* Type Animation */
var typed = new Typed('.typing', {
  strings: ['', 'Student', 'UI Design', 'Design Grafis', 'Poster Design'],
  typedSpeed: 900,
  backspeed: 900,
  loop: true,
});

/* Theme Light And dark mode */
const daynight = document.querySelector('.day-night');
window.addEventListener('load', () => {
  if (document.body.classList.contains('dark')) {
    daynight.querySelector('i').classList.add('fa-sun');
  } else {
    daynight.querySelector('i').classList.add('fa-moon');
  }
});

/* aside */
const nav = document.querySelector('.nav'),
  navlist = nav.querySelectorAll('li'),
  totalnavlist = navlist.length,
  allselection = document.querySelectorAll('.section'),
  totalselection = allselection.length;
for (let i = 0; i < totalnavlist; i++) {
  const a = navlist[i].querySelector('a');
  a.addEventListener('click', function () {
    for (let i = 0; i < totalselection; i++) {
      allselection[i].classList.remove('back-section');
    }
    for (let j = 0; j < totalnavlist; j++) {
      if (navlist[j].querySelector('a').classList.contains('active')) {
        allselection[j].classList.add('back-section');
      }
      navlist[j].querySelector('a').classList.remove('active');
    }
    this.classList.add('active');
    showSection(this);
    if (window.innerWidth < 1200) {
      asidesectionTogglerBtn();
    }
  });
}

function showSection(element) {
  for (let i = 0; i < totalselection; i++) {
    allselection[i].classList.remove('active');
  }
  const target = element.getAttribute('href').split('#')[1];
  document.querySelector('#' + target).classList.add('active');
}

/*====== Aside Toggler ======*/

const navTogglerBtn = document.querySelector('.nav-toggler'),
  aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', () => {
  asidesectionTogglerBtn();
});
function asidesectionTogglerBtn() {
  aside.classList.toggle('open');
  navTogglerBtn.classList.toggle('open');
  for (let i = 0; i < totalselection; i++) {
    allselection[i].classList.toggle('open');
  }
}
