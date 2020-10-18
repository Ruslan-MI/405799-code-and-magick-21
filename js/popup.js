"use strict";

(() => {
  const {
    setup, wizardCoat, wizardEyes, setupFireballWrap, setupHandle, onWizardCoatClick, onWizardEyesClick, onFireballClick
  } = window.setup;

  const {
    escEvent, enterEvent
  } = window.util;

  const {
    getMove, getDefaultOffsets, setDefaultOffsets
  } = window.move;

  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = setup.querySelector(`.setup-close`);
  const setupUserName = setup.querySelector(`.setup-user-name`);
  let isSetupUserNameFocus = false;

  setup.querySelector(`.setup-similar`).classList.remove(`hidden`);

  const openPopup = () => {
    setup.classList.remove(`hidden`);
    document.addEventListener(`keydown`, onPopupEscPress);
    setupUserName.addEventListener(`focus`, onSetupUserNameFocus);
    setupUserName.addEventListener(`blur`, onSetupUserNameBlur);
    wizardCoat.addEventListener(`click`, onWizardCoatClick);
    wizardEyes.addEventListener(`click`, onWizardEyesClick);
    setupFireballWrap.addEventListener(`click`, onFireballClick);
    getDefaultOffsets(setup);
  };
  const closePopup = () => {
    if (!isSetupUserNameFocus) {
      setup.classList.add(`hidden`);
      document.removeEventListener(`keydown`, onPopupEscPress);
      setupUserName.removeEventListener(`focus`, onSetupUserNameFocus);
      setupUserName.removeEventListener(`blur`, onSetupUserNameBlur);
      wizardCoat.removeEventListener(`click`, onWizardCoatClick);
      wizardEyes.removeEventListener(`click`, onWizardEyesClick);
      setupFireballWrap.removeEventListener(`click`, onFireballClick);
      setDefaultOffsets(setup);
    }
  };

  const onPopupEscPress = (evt) => {
    escEvent(evt, closePopup);
  };
  const onSetupUserNameFocus = () => {
    isSetupUserNameFocus = true;
  };
  const onSetupUserNameBlur = () => {
    isSetupUserNameFocus = false;
  };

  setupOpen.addEventListener(`click`, () => {
    openPopup();
  });
  setupClose.addEventListener(`click`, () => {
    closePopup();
  });
  setupOpen.addEventListener(`keydown`, (evt) => {
    enterEvent(evt, openPopup);
  });
  setupClose.addEventListener(`keydown`, (evt) => {
    enterEvent(evt, closePopup);
  });

  getMove(setup, setupHandle);
})();
