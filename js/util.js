"use strict";

(() => {
  const getRandomIndex = (data) => {
    let index = Math.floor(Math.random() * data.length);
    return index;
  };
  const enterEvent = (evt, action) => {
    if (evt.key === `Enter`) {
      action();
    }
  };
  const escEvent = (evt, action) => {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      action();
    }
  };
  const getRandomPaint = (data, paintableTag, destinationInput) => {
    const nextColor = data[getRandomIndex(data)];
    if (paintableTag.tagName.toLowerCase() === `div`) {
      paintableTag.style.backgroundColor = nextColor;
    } else {
      paintableTag.style.fill = nextColor;
    }
    destinationInput.value = nextColor;
    return nextColor;
  };

  window.util = {
    getRandomIndex, enterEvent, escEvent, getRandomPaint
  };
})();
