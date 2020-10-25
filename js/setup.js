"use strict";

(() => {
  const {
    getRandomPaint
  } = window.util;
  const {
    wizardsProperties, getWizardsArray
  } = window.data;
  const {
    load
  } = window.backend;

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
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < data.length; i++) {
      fragment.appendChild(createWizard(data[i]));
    }
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

  const onWizardCoatClick = () => {
    getRandomPaint(wizardsProperties.coatColor, wizardCoat, wizardCoatInput);
  };
  const onWizardEyesClick = () => {
    getRandomPaint(wizardsProperties.eyesColor, wizardEyes, wizardEyesInput);
  };
  const onFireballClick = () => {
    getRandomPaint(wizardsProperties.fireballColor, setupFireballWrap, setupFireballInput);
  };

  const successHandler = (wizards) => {
    const wizardsArray = getWizardsArray(wizards);
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
})();
