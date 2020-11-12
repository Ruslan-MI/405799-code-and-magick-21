"use strict";

const FILE_TYPES = [`gif`, `jpg`, `jpeg`, `png`];

const avatarInput = document.querySelector(`.upload input[type="file"]`);
const setupUserPic = document.querySelector(`.setup-user-pic`);

avatarInput.addEventListener(`change`, () => {
  const file = avatarInput.files[0];

  const matches = FILE_TYPES.some((element) => {
    return file.type.endsWith(element);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener(`load`, () => {
      setupUserPic.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});
