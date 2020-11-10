"use strict";

const {
  getRandomPaint
} = window.util;
const {
  wizardsProperties, sortingWizards
} = window.data;
const {
  load
} = window.backend;
const {
  debounce
} = window.debounce;

const setupSimilarItem = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const setupSimilarList = document.querySelector(`.setup-similar-list`);

const createWizard = (wizard) => {
  let newWizard = setupSimilarItem.cloneNode(true);
  newWizard.querySelector(`.setup-similar-label`).textContent = wizard.name;
  newWizard.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
  newWizard.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;
  return newWizard;
};

const renderWizards = (data, destinationTag) => {
  const WIZARDS_QUANTITY = 4;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < WIZARDS_QUANTITY; i++) {
    fragment.appendChild(createWizard(data[i]));
  }
  destinationTag.innerHTML = ``;
  destinationTag.appendChild(fragment);
};

const setup = document.querySelector(`.setup`);
const setupWizard = setup.querySelector(`.setup-wizard`);
const wizardCoat = setupWizard.querySelector(`.wizard-coat`);
const wizardCoatInput = setup.querySelector(`[name="coat-color"]`);
const wizardEyes = setupWizard.querySelector(`.wizard-eyes`);
const wizardEyesInput = setup.querySelector(`[name="eyes-color"]`);
const setupFireballWrap = setup.querySelector(`.setup-fireball-wrap`);
const setupFireballInput = setup.querySelector(`[name="fireball-color"]`);

const setupHandle = setup.querySelector(`.upload`);

let coatColor = `rgb(101, 137, 164)`;
let eyesColor = `black`;
let wizardsArray = [];

const updateWizards = debounce(() => {
  sortingWizards(wizardsArray, coatColor, eyesColor);
  renderWizards(wizardsArray, setupSimilarList);
});

const onWizardCoatClick = () => {
  coatColor = getRandomPaint(wizardsProperties.coatColor, wizardCoat, wizardCoatInput);
  updateWizards();
};
const onWizardEyesClick = () => {
  eyesColor = getRandomPaint(wizardsProperties.eyesColor, wizardEyes, wizardEyesInput);
  updateWizards();
};
const onFireballClick = () => {
  getRandomPaint(wizardsProperties.fireballColor, setupFireballWrap, setupFireballInput);
};

const successHandler = (wizards) => {
  wizardsArray = wizards;
  sortingWizards(wizardsArray, coatColor, eyesColor);
  renderWizards(wizardsArray, setupSimilarList);
  setup.querySelector(`.setup-similar`).classList.remove(`hidden`);
};
const errorHandler = (errorMessage) => {
  const node = document.createElement(`div`);
  node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
  node.style.position = `absolute`;
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = `30px`;

  node.textContent = errorMessage;
  document.body.insertAdjacentElement(`afterbegin`, node);
};

load(successHandler, errorHandler);

window.setup = {
  setup, wizardCoat, wizardEyes, setupFireballWrap, setupHandle, onWizardCoatClick, onWizardEyesClick, onFireballClick
};
