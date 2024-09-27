const panoramaImage = new PANOLENS.ImagePanorama("static/images/view3.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.add(panoramaImage);

// Zoom controls
const zoomInBtn = document.getElementById('zoomIn');
const zoomOutBtn = document.getElementById('zoomOut');

zoomInBtn.addEventListener('click', () => {
    viewer.camera.fov = Math.max(viewer.camera.fov * 0.9, 30);
    viewer.camera.updateProjectionMatrix();
});

zoomOutBtn.addEventListener('click', () => {
    viewer.camera.fov = Math.min(viewer.camera.fov * 1.1, 90);
    viewer.camera.updateProjectionMatrix();
});

// Fullscreen control
const fullscreenBtn = document.getElementById('fullscreen');

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

// Resize viewer when window is resized
window.addEventListener('resize', () => {
    viewer.onWindowResize();
});