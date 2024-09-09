function openModal(imageSrc) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    modal.style.display = 'block'; // Tampilkan modal
    modalImage.src = imageSrc; // Perbarui gambar modal
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none'; // Sembunyikan modal
}

// Menutup modal ketika klik di luar modal
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none'; // Sembunyikan modal
    }
}
