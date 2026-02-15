// Simple interaction: glowing effect on click
document.querySelectorAll('.project-link, .links a').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.boxShadow = "0 0 20px white";
        setTimeout(() => btn.style.boxShadow = "none", 500);
    });
});
