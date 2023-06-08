const seeMoreBtns = document.querySelectorAll('.main-text .see-more-btn');
const detailedTexts = document.querySelectorAll('.main-text .detailed-text');
const mainTextResumes = document.querySelectorAll('.main-text .main-text-resume');
const mainTexts = document.querySelectorAll('.main-text');

for (let i = 0; i < seeMoreBtns.length; i++) {
  seeMoreBtns[i].addEventListener('click', function() {
    mainTexts[i].classList.toggle('expanded');
    if (mainTexts[i].classList.contains('expanded')) {
      seeMoreBtns[i].textContent = 'Version simplifié';
    } else {
      seeMoreBtns[i].textContent = 'Voir détaillé';
    }
  });
}