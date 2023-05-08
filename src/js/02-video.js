import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

// const iframe = document.querySelector('iframe');
// const iframePlayer = new Vimeo.Player(iframe);
const idPlayer = new Vimeo.Player('vimeo-player');

const savedTime = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedTime) {
  idPlayer.setCurrentTime(savedTime.seconds);
}

idPlayer.on('timeupdate', throttle(onPlayerStart, 1000));

function onPlayerStart(e) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      seconds: e.seconds,
    })
  );
}
