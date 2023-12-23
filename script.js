function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

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

// Update the favicon every 200 milliseconds (adjust as needed)
setInterval(updateFavicon, 200);