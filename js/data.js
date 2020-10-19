"use strict";

(() => {
  const WIZARDS_QUANTITY = 4;

  const {
    getRandomIndex
  } = window.util;

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

  const getWizardsArray = () => {
    const {
      firstNames, secondNames, coatColor, eyesColor
    } = wizardsProperties;
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

  window.data = {
    wizardsProperties, getWizardsArray
  };
})();
