    var constraints = {
        audio: true,
        video: {
            width: {
                min: 3
            },
            height: {
                min: 3
            }
        }
    };

    var video = document.querySelector('video');
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var mediaStream = null;


    // navigator.mediaDevices.getUserMedia(myConstraints).then(function (localMediaStream) {
    //     var video = document.querySelector('video');
    //     video.src = (window.URL || window.webkitURL || window.mozURL || window.msURL || {}).createObjectURL(localMediaStream);

    //     video.onloadedmetadata = function (e) {};
    //     mediaStream = localMediaStream;
    // }).catch(function (err) {});

    if (navigator.mediaDevices === undefined) {
        alert('1d111');
        navigator.mediaDevices = {};
    } else {
        alert(navigator.mediaDevices);
    }

    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (mediaStream) {
            alert('gd');
            var video = document.querySelector('video');
            video.srcObject = mediaStream; // moz ok insteadof video.src
            video.onloadedmetadata = function (e) {
                video.play();
            };
        })
        .catch(function (err) {alert('g2f');
            alert(err.name + ": " + err.message);
        }); // always check for errors at the end.

    alert('2f');
    video.addEventListener('click', function () {
        alert('2');
        video.play();
    }, false);

    // var elem = document.getElementById("recordedVideo");
    // if (elem.webkitRequestFullscreen) {
    //     elem.webkitRequestFullscreen();
    // }

    // document.addEventListener("keydown", function (e) {
    //     if (e.keyCode == 13) {
    //         alert();
    //         toggleFullScreen();
    //     }
    // }, false);

    // function toggleFullScreen() {
    //     if (!elem.fullscreenElement) {
    //         elem.webkitRequestFullscreen();
    //     } else {
    //         if (elem.exitFullscreen) {
    //             elem.webkitExitFullscreen();
    //         }
    //     }
    // }

    /* snapshot     
    video.addEventListener('click', snapshot, false);

        // function snapshot() {
        //     if (mediaStream) {
        //         ctx.drawImage(video, 0, 0);
        //         document.querySelector('#capturedPicture').src = canvas.toDataURL('image/webp');
        //     }
        // }
        */

    /* filters
        // function changeFilter() {
        //     var el = document.getElementById('RecordedVideo');
        //     var effect = this.value;
        //     if (effect) {
        //         el.classList="";
        //         el.classList.add(effect);
        //     }
        // }

        // // document.getElementById('videoEffectPicker').addEventListener(
        //     // 'change', changeFilter, false);
    */