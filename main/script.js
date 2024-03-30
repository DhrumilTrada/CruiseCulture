var engine = document.getElementById("engine")
function abc(){
    engine.innerHTML = "ABC"
}
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.my-video');
    const button = document.querySelector('.play-pause-button');
    button.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            button.classList.add('clicked');
        } else {
            video.pause();
            button.classList.remove('clicked');
        }
    });
    video.addEventListener('play', function() {
        button.classList.add('clicked');
    });

    video.addEventListener('pause', function() {
        button.classList.remove('clicked');
    });
});
