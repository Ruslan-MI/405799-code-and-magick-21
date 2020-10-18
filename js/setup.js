"use strict";

(() => {
  const {
    getRandomIndex, getRandomPaint
  } = window.util;

  const WIZARDS_QUANTITY = 4;

  const wizardsProperties = {
    firstNames: [
      `Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`
    ],
    secondNames: [
      `да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`
    ],
    coatColor: [
      `rgb(101, 137, 164)`,
      `rgb(241, 43, 107)`,
      `rgb(146, 100, 161)`,
      `rgb(56, 159, 117)`,
      `rgb(215, 210, 55)`,
      `rgb(0, 0, 0)`
    ],
    eyesColor: [
      `black`, `red`, `blue`, `yellow`, `green`
    ],
    fireballColor: [
      `#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`
    ]
  };

  const getWizardsArray = (data) => {
    const {
      firstNames, secondNames, coatColor, eyesColor
    } = data;
    let wizardsArray = [];
    for (let i = 0; i < WIZARDS_QUANTITY; i++) {
      let wizard = {};
      wizard.name = firstNames[getRandomIndex(firstNames)] + ` ` + secondNames[getRandomIndex(secondNames)];
      wizard.coatColor = coatColor[getRandomIndex(coatColor)];
      wizard.eyesColor = eyesColor[getRandomIndex(eyesColor)];
      wizardsArray.push(wizard);
    }
    return wizardsArray;
  };

  const wizards = getWizardsArray(wizardsProperties);

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

  window.setup = {
    setup,
    wizardCoat,
    wizardEyes,
    setupFireballWrap,
    setupHandle,
    onWizardCoatClick: () => {
      getRandomPaint(wizardsProperties.coatColor, wizardCoat, wizardCoatInput);
    },
    onWizardEyesClick: () => {
      getRandomPaint(wizardsProperties.eyesColor, wizardEyes, wizardEyesInput);
    },
    onFireballClick: () => {
      getRandomPaint(wizardsProperties.fireballColor, setupFireballWrap, setupFireballInput);
    }
  };
})();
