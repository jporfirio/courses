const robot = require('robotjs');
const argv = require('yargs').argv;

const MOUSE_DELAY = 10;

function click(time){
  robot.setMouseDelay(MOUSE_DELAY);

  const stopId = setInterval(() => {
    robot.mouseClick();
  }, MOUSE_DELAY);

  setTimeout(() => {
    clearInterval(stopId);
  }, time * 1000);
};

const duration = parseInt(argv._) || 30;
click(duration ? duration : 30);
