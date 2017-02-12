function hasGetUserMedia() {
        return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
    }
if (!hasGetUserMedia()) {
    console.log('getUserMedia() is not supported in your browser');
    alert('getUserMedia() is not supported in your browser');
} 