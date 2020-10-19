"use strict";

(() => {
  let defaultOffsets;

  const getMove = (movingElement, handleElement) => {
    handleElement.addEventListener(`mousedown`, (evt) => {
      evt.preventDefault();

      let startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };

      let isMoving = false;

      const onMouseMove = (moveEvt) => {
        moveEvt.preventDefault();
        isMoving = true;
        const shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };
        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };
        movingElement.style.left = movingElement.offsetLeft - shift.x + `px`;
        movingElement.style.top = movingElement.offsetTop - shift.y + `px`;
      };
      const onMouseUp = (upEvt) => {
        upEvt.preventDefault();
        document.removeEventListener(`mousemove`, onMouseMove);
        document.removeEventListener(`mouseup`, onMouseUp);
        if (isMoving) {
          const onClickPreventDefault = (clickEvt) => {
            clickEvt.preventDefault();
            handleElement.removeEventListener(`click`, onClickPreventDefault);
          };
          handleElement.addEventListener(`click`, onClickPreventDefault);
        }
      };

      document.addEventListener(`mousemove`, onMouseMove);
      document.addEventListener(`mouseup`, onMouseUp);
    });
  };
  const getDefaultOffsets = (movingElement) => {
    defaultOffsets = {
      left: movingElement.offsetLeft,
      top: movingElement.offsetTop
    };
  };
  const setDefaultOffsets = (movingElement) => {
    movingElement.style.left = defaultOffsets.left + `px`;
    movingElement.style.top = defaultOffsets.top + `px`;
  };

  window.move = {
    getMove, getDefaultOffsets, setDefaultOffsets
  };
})();
