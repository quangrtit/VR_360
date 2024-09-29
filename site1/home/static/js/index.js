const panoramaImage = new PANOLENS.ImagePanorama("/static/images/view3.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.add(panoramaImage);

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
