 function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var footerOffset = $('footer').offset().top - window.innerHeight;
    
    if (scroll > footerOffset) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});


function toggleDarkMode() {
    const body = document.body;
    const button = document.getElementById('themeToggle');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        button.textContent = '☀️';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        button.textContent = '🌙';
        localStorage.setItem('darkMode', 'disabled');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('themeToggle');
    const isDark = document.body.classList.contains('dark-mode');
    
    if (button) {
        button.textContent = isDark ? '☀️' : '🌙';
        button.addEventListener('click', toggleDarkMode);
    }
});

document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);
document.addEventListener('DOMContentLoaded', function() {
    const darkMode = localStorage.getItem('darkMode');
    const button = document.getElementById('themeToggle');
    
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        button.textContent = '☀️';
    } else {
        button.textContent = '🌙';
    }
});