// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Обработка формы
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Форма отправлена! (Это учебный пример, настройте серверную отправку)');
    this.reset();
});