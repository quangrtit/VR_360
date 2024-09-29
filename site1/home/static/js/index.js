const panoramaImage = new PANOLENS.ImagePanorama("/static/images/view3.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.add(panoramaImage);

// Sự kiện upload file
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Xóa hình ảnh cũ
            viewer.remove(panoramaImage);
            
            // Tạo ảnh mới từ file upload
            const newPanoramaImage = new PANOLENS.ImagePanorama(e.target.result);
            viewer.add(newPanoramaImage);
            viewer.setPanorama(newPanoramaImage); // Đặt panorama mới
        };
        reader.readAsDataURL(file);
    }
});

// Fullscreen control
const fullscreenBtn = document.getElementById('fullscreen');
const controls = document.querySelector('.controls');
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        if (imageContainer.requestFullscreen) {
            imageContainer.requestFullscreen();
        } else if (imageContainer.mozRequestFullScreen) { // Firefox
            imageContainer.mozRequestFullScreen();
        } else if (imageContainer.webkitRequestFullscreen) { // Chrome, Safari and Opera
            imageContainer.webkitRequestFullscreen();
        } else if (imageContainer.msRequestFullscreen) { // IE/Edge
            imageContainer.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
});
// Ẩn controls khi vào chế độ toàn màn hình
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        controls.style.display = 'none'; // Ẩn controls
    } else {
        controls.style.display = 'flex'; // Hiện lại controls
    }
});

// Resize viewer when window is resized
window.addEventListener('resize', () => {
    viewer.onWindowResize();
});
