import Vivus from 'vivus';

const svg = document.getElementById('logo-svg');

var vivus = new Vivus('logo-svg', {
    duration: 200,
    type: 'oneByOne',
    animTimingFunction: Vivus.EASE_OUT,
    pathTimingFunction: Vivus.EASE_OUT,
    delay: 50,
    start: 'inViewport',
    dashGap: 20,
    forceRender: false
});

vivus.play();