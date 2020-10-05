"use strict";

const WIZARDS_QUANTITY = 4;

document.querySelector(`.setup`).classList.remove(`hidden`);

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
