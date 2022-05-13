import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY = 'videoplayer-current-time';

const video = new Player('vimeo-player');
const key = localStorage.getItem(KEY);
if (key) {
  video.setCurrentTime(parseFloat(key));
}

video.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(KEY, data.seconds.toString());
  }, 1000),
);
