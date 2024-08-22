document.addEventListener('DOMContentLoaded', () => {
    const copyText = document.getElementById('copy');

    copyText.addEventListener('click', () => {
        // Metni seçme ve kopyalama işlemleri
        const range = document.createRange();
        range.selectNode(copyText);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        try {
            document.execCommand('copy');
            alert('Metin kopyalandı!');
        } catch (err) {
            console.error('Kopyalama işlemi başarısız oldu!', err);
        }

        // Seçimi temizle
        window.getSelection().removeAllRanges();
    });
});
