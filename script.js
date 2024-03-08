const videoElement = document.getElementById('video-stream');

// Replace with the IP address or hostname of your ESP32-CAM
const esp32CamUrl = 'http://<192.168.1.1>/stream';

// Load the video stream from the ESP32-CAM
videoElement.src = esp32CamUrl;