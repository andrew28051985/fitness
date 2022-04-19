const getVideo = () => {
  const controlVideo = document.querySelector('.gym__video-control');
  let player;
  controlVideo.addEventListener('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: '9TZXsZItgdw',
      playerVars: {
        'autoplay': 0,
        'controls': 1,
      },
      events: {
        'onReady': onPlayerReady,
      },
    });
    function onPlayerReady(event) {
      event.target.playVideo();
    }
  });
};

export {getVideo};
