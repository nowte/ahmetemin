function openFullScreen(imageSrc) {
    console.log('openFullScreen çağrıldı');
    var overlay = document.getElementById('fullscreenOverlay');
    var fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.src = imageSrc;
    overlay.style.display = 'flex';
}

function closeFullScreen() {
    console.log('closeFullScreen çağrıldı');
    var overlay = document.getElementById('fullscreenOverlay');
    overlay.style.display = 'none';
}

function uploadImage() {
    var fileInput = document.getElementById('imageUpload');
    var file = fileInput.files[0];
    if (!file) {
        alert('Lütfen bir dosya seçin.');
        return;
    }

    var formData = new FormData();
    formData.append('image', file);

    fetch('/upload', { // Sunucu tarafında dosyayı işleyen bir API endpoint olmalı
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Yeni görseli galeride göster
            addImageToGallery(data.smallImageUrl, data.fullImageUrl, data.caption);
        } else {
            alert('Görsel yüklenemedi.');
        }
    })
    .catch(error => {
        console.error('Hata:', error);
        alert('Görsel yüklenirken bir hata oluştu.');
    });
}

function addImageToGallery(smallImageUrl, fullImageUrl, caption) {
    var gallery = document.getElementById('gallery');
    var galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';

    galleryItem.innerHTML = `
        <img src="${smallImageUrl}" alt="Yeni Fotoğraf" onclick="openFullScreen('${fullImageUrl}')">
        <div class="message-box">${caption}</div>
    `;

    gallery.appendChild(galleryItem);
}
