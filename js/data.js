"use strict";

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

const sortingWizards = (wizards, coatColor, eyesColor) => {
  const getRank = (wizard) => {
    let rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };
  const namesComparator = (left, right) => {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  wizards.sort((left, right) => {
    let rankDiff = getRank(right) - getRank(left);
    if (rankDiff === 0) {
      rankDiff = namesComparator(left.name, right.name);
    }
    return rankDiff;
  });
  return wizards;
};

window.data = {
  wizardsProperties, sortingWizards
};
