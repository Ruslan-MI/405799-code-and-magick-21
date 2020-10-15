"use strict";

const WIZARDS_QUANTITY = 4;

const firstNames = [
  `Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`
];

const secondNames = [
  `да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`
];

const coatColor = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`
];

const eyesColor = [
  `black`, `red`, `blue`, `yellow`, `green`
];

const fireballColor = [
  `#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`
];

const getRandomIndex = function (array) {
  let index = Math.floor(Math.random() * array.length);
  return index;
};

const getWizardsArray = function (firstNamesArray, secondNamesArray, coatColorArray, eyesColorArray) {
  let wizardsArray = [];
  for (let i = 0; i < WIZARDS_QUANTITY; i++) {
    let wizard = {};
    wizard.name = firstNamesArray[getRandomIndex(firstNamesArray)] + ` ` + secondNamesArray[getRandomIndex(secondNamesArray)];
    wizard.coatColor = coatColorArray[getRandomIndex(coatColorArray)];
    wizard.eyesColor = eyesColorArray[getRandomIndex(eyesColorArray)];
    wizardsArray.push(wizard);
  }
  return wizardsArray;
};

const wizards = getWizardsArray(firstNames, secondNames, coatColor, eyesColor);

const setupSimilarItem = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const setupSimilarList = document.querySelector(`.setup-similar-list`);

const renderWizard = function (wizard) {
  let newWizard = setupSimilarItem.cloneNode(true);
  newWizard.querySelector(`.setup-similar-label`).textContent = wizard.name;
  newWizard.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  newWizard.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  return newWizard;
};

let fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

setupSimilarList.appendChild(fragment);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

const setup = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = setup.querySelector(`.setup-close`);
const setupUserName = setup.querySelector(`.setup-user-name`);
let isSetupUserNameFocus = false;

const openPopup = () => {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
  setupUserName.addEventListener(`focus`, onSetupUserNameFocus);
  setupUserName.addEventListener(`blur`, onSetupUserNameBlur);
  wizardCoat.addEventListener(`click`, onWizardCoatClick);
  wizardEyes.addEventListener(`click`, onWizardEyesClick);
  setupFireballWrap.addEventListener(`click`, onFireballClick);
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
  }
};

const onPopupEscPress = (evt) => {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
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
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

const setupWizard = setup.querySelector(`.setup-wizard`);
const wizardCoat = setupWizard.querySelector(`.wizard-coat`);
const wizardEyes = setupWizard.querySelector(`.wizard-eyes`);
const setupFireballWrap = setup.querySelector(`.setup-fireball-wrap`);


const onWizardCoatClick = () => {
  const nextColor = coatColor[getRandomIndex(coatColor)];
  wizardCoat.style.fill = nextColor;
  setup.querySelector(`[name="coat-color"]`).value = nextColor;
};

const onWizardEyesClick = () => {
  const nextColor = eyesColor[getRandomIndex(eyesColor)];
  wizardEyes.style.fill = nextColor;
  setup.querySelector(`[name="eyes-color"]`).value = nextColor;
};

const onFireballClick = () => {
  const nextColor = fireballColor[getRandomIndex(fireballColor)];
  setupFireballWrap.style.backgroundColor = nextColor;
  setup.querySelector(`[name="fireball-color"]`).value = nextColor;
};
