document.addEventListener('DOMContentLoaded', function() {
    var scrollTopBtn = document.getElementById('scrollTopBtn');

    // Sayfayı aşağı kaydırdığında butonu göster
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    // Butona tıklandığında sayfayı yukarı kaydır
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
