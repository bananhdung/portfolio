(function(){
    emailjs.init("YOUR_USER_ID"); // Thay YOUR_USER_ID từ EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Gửi email thành công!');
        }, function(error) {
            alert('Lỗi: ' + JSON.stringify(error));
        });
});

// Theme toggle logic
const body = document.getElementById('body');
const themeToggle = document.getElementById('theme-toggle');

const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = 'Toggle Dark';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    themeToggle.textContent = theme === 'light' ? 'Toggle Dark' : 'Toggle Theme';
});