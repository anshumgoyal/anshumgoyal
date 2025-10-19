// JavaScript for the portfolio website
console.log("Welcome to my portfolio!");

let score = 0;
const sectionsVisited = new Set();
let userName = '';

window.onload = function() {
    userName = prompt("Welcome to my portfolio! What's your name?") || 'Player';
    document.getElementById('user-greeting').innerText = `Hello, ${userName}!`;
    document.getElementById('hud-username').innerText = userName;
};

const modal = document.getElementById('tutorial-modal');
const tutorialBtn = document.getElementById('tutorial-btn');
const closeBtn = document.getElementsByClassName('close-btn')[0];

tutorialBtn.onclick = function() {
    modal.style.display = 'block';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function updateScore(points) {
    score += points;
    document.getElementById('hud-score').innerText = score;
}

window.addEventListener('scroll', () => {
    document.querySelectorAll('main section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            if (!sectionsVisited.has(section.id)) {
                sectionsVisited.add(section.id);
                updateScore(10);
            }
        }
    });
});
gsap.registerPlugin(ScrollTrigger);

gsap.from('#about h1', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
    },
    opacity: 0,
    y: 50,
});
const clickerBtn = document.getElementById('clicker-btn');
const clickerScore = document.getElementById('clicker-score');
let clicks = 0;

clickerBtn.addEventListener('click', () => {
    clicks++;
    clickerScore.innerText = clicks;
    updateScore(1);
});
const projectLinks = document.querySelectorAll('.project-link');
projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        updateScore(20);
        alert('You earned 20 points for checking out a project!');
    });
});

const easterEgg = document.createElement('div');
easterEgg.style.width = '20px';
easterEgg.style.height = '20px';
easterEgg.style.backgroundColor = '#ff00ff';
easterEgg.style.position = 'absolute';
easterEgg.style.bottom = '10px';
easterEgg.style.right = '10px';
easterEgg.style.cursor = 'pointer';
document.getElementById('contact').appendChild(easterEgg);

easterEgg.addEventListener('click', () => {
    updateScore(50);
    alert('You found the easter egg and earned 50 points!');
    easterEgg.style.display = 'none';
});
gsap.from('.project-link', {
    scrollTrigger: {
        trigger: '#projects',
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
});

gsap.from('#case-studies h1', {
    scrollTrigger: {
        trigger: '#case-studies',
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
    },
    opacity: 0,
    x: -100,
});
