"use strict";

(() => {
  const {
    getRandomIndex
  } = window.util;

  const wizardsProperties = {
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
    const WIZARDS_QUANTITY = 4;
    let wizardsArray = [];
    while (wizardsArray.length !== WIZARDS_QUANTITY) {
      let randomWizard = data[getRandomIndex(data)];
      let isDuplicate = wizardsArray.includes(randomWizard);
      if (!isDuplicate) {
        wizardsArray.push(randomWizard);
      }
    }
    return wizardsArray;
  };

  window.data = {
    wizardsProperties, getWizardsArray
  };
})();
