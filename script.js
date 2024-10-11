const days = document.querySelectorAll('.day');
const messageCard = document.getElementById('messageCard');
const messageText = document.getElementById('messageText');
const body = document.body;
const themeToggleBtn = document.querySelector('.theme-toggle-btn');

days.forEach(day => {
    day.addEventListener('click', () => {
        const message = day.getAttribute('data-message');
        messageText.textContent = message;
        messageCard.style.display = 'block';
    });
});

function closeMessage() {
    messageCard.style.display = 'none';
}

function toggleTheme() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Mudar Tema';
        body.style.backgroundColor = '#2e3b2d';  
    } else {
        themeToggleBtn.textContent = 'Mudar Tema ';
        body.style.backgroundColor = '#f0f0f0';  
        body.style.color = '#000000';  
    }
}
