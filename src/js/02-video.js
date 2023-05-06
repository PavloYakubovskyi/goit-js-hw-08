import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframeEL = document.querySelector('iframe');
const player = new Vimeo.Player(iframeEL);

const savedTime = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedTime) {
  player.setCurrentTime(savedTime.seconds);
}

player.on('timeupdate', throttle(onPlayerStart, 1000));

function onPlayerStart(e) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      seconds: e.seconds,
    })
  );
}
