const sections = document.querySelectorAll('section');
const navLists = document.querySelectorAll('.nav_item>li');

function activateSection() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const sectionHeight = section.offsetHeight;
    const nav_item = navLists[i];
    if (scrollTop >= section.offsetTop && scrollTop < section.offsetTop + sectionHeight) {
      nav_item.classList.add('active');
    } else {
      nav_item.classList.remove('active');
    }
  }
}

window.addEventListener('scroll', activateSection);
document.addEventListener('DOMContentLoaded', function() {
  // Get the text element
  const textElement = document.querySelector('.title>span');

  // Add the active class to trigger the animation
  textElement.classList.add('activate');

  // Remove the opacity transition from the text container
  const textContainer = document.querySelector('.title');
  textContainer.style.opacity = 1;
});

