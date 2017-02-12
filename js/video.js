    var myConstraints = {
        audio: false,
        video: {
            width: {
                min: 30
            },
            height: {
                min: 30
            }
        }
    };

    var video = document.querySelector('video');
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var mediaStream = null;

    navigator.mediaDevices.getUserMedia(myConstraints).then(function (localMediaStream) {
        var video = document.querySelector('video');
        video.src = window.URL.createObjectURL(localMediaStream);
        video.onloadedmetadata = function (e) {};
        mediaStream = localMediaStream;
    }).catch(function (err) {});


    var elem = document.getElementById("recordedVideo");
    if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }

    document.addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
            alert();
            toggleFullScreen();
        }
    }, false);

    function toggleFullScreen() {
        if (!elem.fullscreenElement) {
            elem.webkitRequestFullscreen();
        } else {
            if (elem.exitFullscreen) {
                elem.webkitExitFullscreen();
            }
        }
    }

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