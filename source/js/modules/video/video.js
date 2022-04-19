/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const getVideo = () => {
  const controlVideo = document.querySelector('.gym__video-control');
  let player;
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  controlVideo.addEventListener('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: '9TZXsZItgdw',
      playerVars: {
        'autoplay': 0,
        'controls': 1,
        'modestbranding': 1,
        'showinfo': 0,
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
