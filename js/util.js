"use strict";

(() => {
  window.util = {
    getRandomIndex: (data) => {
      let index = Math.floor(Math.random() * data.length);
      return index;
    },
    enterEvent: (evt, action) => {
      if (evt.key === `Enter`) {
        action();
      }
    },
    escEvent: (evt, action) => {
      if (evt.key === `Escape`) {
        evt.preventDefault();
        action();
      }
    },
    getRandomPaint: (data, paintableTag, destinationInput) => {
      const nextColor = data[window.util.getRandomIndex(data)];
      if (paintableTag.tagName.toLowerCase() === `div`) {
        paintableTag.style.backgroundColor = nextColor;
      } else {
        paintableTag.style.fill = nextColor;
      }
      destinationInput.value = nextColor;
    }
  };
})();
