"use strict";

(() => {
  const {
    getRandomPaint
  } = window.util;
  const {
    wizardsProperties, getWizardsArray
  } = window.data;

  const wizards = getWizardsArray();

  const setupSimilarItem = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

  const setupSimilarList = document.querySelector(`.setup-similar-list`);

  const createWizard = (wizard) => {
    let newWizard = setupSimilarItem.cloneNode(true);
    newWizard.querySelector(`.setup-similar-label`).textContent = wizard.name;
    newWizard.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
    newWizard.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
    return newWizard;
  };

  const renderWizards = (data, destinationTag) => {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < data.length; i++) {
      fragment.appendChild(createWizard(data[i]));
    }
    destinationTag.appendChild(fragment);
  };

  renderWizards(wizards, setupSimilarList);

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

  window.setup = {
    setup, wizardCoat, wizardEyes, setupFireballWrap, setupHandle, onWizardCoatClick, onWizardEyesClick, onFireballClick
  };
})();
