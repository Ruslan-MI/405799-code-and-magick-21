"use strict";

const {
  setup, wizardCoat, wizardEyes, setupFireballWrap, setupHandle, onWizardCoatClick, onWizardEyesClick, onFireballClick
} = window.setup;
const {
  escEvent, enterEvent
} = window.util;
const {
  getMove, getDefaultOffsets, setDefaultOffsets
} = window.move;
const {
  save
} = window.backend;

const setupOpen = document.querySelector(`.setup-open`);
const setupClose = setup.querySelector(`.setup-close`);
const setupUserName = setup.querySelector(`.setup-user-name`);
let isSetupUserNameFocus = false;

const openModal = () => {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onModalEscPress);
  setupUserName.addEventListener(`focus`, onSetupUserNameFocus);
  setupUserName.addEventListener(`blur`, onSetupUserNameBlur);
  wizardCoat.addEventListener(`click`, onWizardCoatClick);
  wizardEyes.addEventListener(`click`, onWizardEyesClick);
  setupFireballWrap.addEventListener(`click`, onFireballClick);
  getDefaultOffsets(setup);
};
const closeModal = () => {
  if (!isSetupUserNameFocus) {
    setup.classList.add(`hidden`);
    document.removeEventListener(`keydown`, onModalEscPress);
    setupUserName.removeEventListener(`focus`, onSetupUserNameFocus);
    setupUserName.removeEventListener(`blur`, onSetupUserNameBlur);
    wizardCoat.removeEventListener(`click`, onWizardCoatClick);
    wizardEyes.removeEventListener(`click`, onWizardEyesClick);
    setupFireballWrap.removeEventListener(`click`, onFireballClick);
    setDefaultOffsets(setup);
  }
};

const onModalEscPress = (evt) => {
  escEvent(evt, closeModal);
};
const onSetupUserNameFocus = () => {
  isSetupUserNameFocus = true;
};
const onSetupUserNameBlur = () => {
  isSetupUserNameFocus = false;
};

setupOpen.addEventListener(`click`, () => {
  openModal();
});
setupClose.addEventListener(`click`, () => {
  closeModal();
});
setupOpen.addEventListener(`keydown`, (evt) => {
  enterEvent(evt, openModal);
});
setupClose.addEventListener(`keydown`, (evt) => {
  enterEvent(evt, closeModal);
});

getMove(setup, setupHandle);

const form = setup.querySelector(`.setup-wizard-form`);

form.addEventListener(`submit`, (evt) => {
  save(new FormData(form), () => {
    closeModal();
  });
  evt.preventDefault();
});
