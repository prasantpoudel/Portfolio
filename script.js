function refreshPage() {
    location.reload();
}

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


// code for favicon
const favicon = document.getElementById('favicon');
const frames = [
'./assets/Infinity-1s-200px/frame-1.png',
'./assets/Infinity-1s-200px/frame-2.png',
'./assets/Infinity-1s-200px/frame-3.png',
'./assets/Infinity-1s-200px/frame-4.png',
'./assets/Infinity-1s-200px/frame-5.png',
'./assets/Infinity-1s-200px/frame-6.png',
'./assets/Infinity-1s-200px/frame-7.png',
'./assets/Infinity-1s-200px/frame-8.png',
'./assets/Infinity-1s-200px/frame-9.png',
'./assets/Infinity-1s-200px/frame-10.png',
'./assets/Infinity-1s-200px/frame-11.png',
'./assets/Infinity-1s-200px/frame-12.png',
'./assets/Infinity-1s-200px/frame-13.png',
'./assets/Infinity-1s-200px/frame-14.png',
'./assets/Infinity-1s-200px/frame-15.png',
'./assets/Infinity-1s-200px/frame-16.png',
'./assets/Infinity-1s-200px/frame-17.png',
'./assets/Infinity-1s-200px/frame-18.png',
'./assets/Infinity-1s-200px/frame-19.png',
'./assets/Infinity-1s-200px/frame-20.png',
'./assets/Infinity-1s-200px/frame-21.png',
'./assets/Infinity-1s-200px/frame-22.png',
'./assets/Infinity-1s-200px/frame-23.png',
'./assets/Infinity-1s-200px/frame-24.png',
'./assets/Infinity-1s-200px/frame-25.png',
'./assets/Infinity-1s-200px/frame-26.png',
'./assets/Infinity-1s-200px/frame-27.png',
'./assets/Infinity-1s-200px/frame-28.png',
'./assets/Infinity-1s-200px/frame-29.png',
'./assets/Infinity-1s-200px/frame-30.png',
];

let currentFrame = 0;

function updateFavicon() {
    favicon.href = frames[currentFrame];
    currentFrame = (currentFrame + 1) % frames.length;
}
setInterval(updateFavicon, 200);


// code for first animation
const loadingContainer = document.querySelector('.loading-container');
const mainContent = document.getElementById('main-content');
setTimeout(function () {
    loadingContainer.style.display = 'none';
    // mainContent.style.display = 'block'; 
    document.body.style.overflow = 'auto'; // Restore scrolling
}, 3000);




function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  
    // Save the user's preference in local storage
    const darkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeEnabled);
  

    // Update the image source based on dark mode
    const linkedInIcon = document.querySelector('.icon-linkedin');
    linkedInIcon.src = darkModeEnabled
      ? './assets/linkedin-dark.png' // Update with the path to your dark mode image
      : './assets/linkedin.png'; // Update with the path to your default image
    
    const githubIcon = document.querySelector('.icon-github');
    githubIcon.src = darkModeEnabled
        ? './assets/github-dark.png' // Update with the path to your dark mode GitHub icon
        : './assets/github.png';
    
    const FotterlinkedInIcon = document.querySelector('.linkedin-icon');
    FotterlinkedInIcon.src = darkModeEnabled
      ? './assets/linkedin-dark.png' // Update with the path to your dark mode image
      : './assets/linkedin.png';

    const EmailIcon = document.querySelector('.email-icon');
    EmailIcon.src = darkModeEnabled
      ? './assets/email-dark.png' // Update with the path to your dark mode image
      : './assets/email.png';
  }
  
  
  // Check for the user's dark mode preference on page load
document.addEventListener('DOMContentLoaded', function () {
  const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
  if (darkModeEnabled) {
    document.body.classList.add('dark-mode');
    document.getElementById('themeToggle').checked = true;
    
    // Update the image source based on dark mode
    const linkedInIcon = document.querySelector('.icon-linkedin');
    linkedInIcon.src = './assets/linkedin-dark.png'; // Update with the path to your dark mode image

    const githubIcon = document.querySelector('.icon-github');
    githubIcon.src = './assets/github-dark.png'; // Update with the path to your dark mode GitHub icon

    const FotterlinkedInIcon = document.querySelector('.linkedin-icon');
    FotterlinkedInIcon.src = './assets/linkedin-dark.png';

    const EmailIcon = document.querySelector('.email-icon');
    EmailIcon.src = './assets/email-dark.png';
  }
});

