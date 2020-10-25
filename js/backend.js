"use strict";

(() => {
  const STATUS_CODE = {
    OK: 200
  };
  const TIMEOUT_IN_MS = 10000;

  const load = (onLoad, onError) => {
    const URL = `https://21.javascript.pages.academy/code-and-magick/data`;

    const xhr = new XMLHttpRequest();

    xhr.responseType = `json`;

    xhr.addEventListener(`load`, () => {
      if (xhr.status === STATUS_CODE.OK) {
        onLoad(xhr.response);
      } else {
        onError(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
      }
    });
    xhr.addEventListener(`error`, function () {
      onError(`Произошла ошибка соединения`);
    });
    xhr.addEventListener(`timeout`, function () {
      onError(`Запрос не успел выполниться за ` + xhr.timeout + `мс`);
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open(`GET`, URL);
    xhr.send();
  };
  const save = (data, onLoad, onError) => {
    const URL = `https://21.javascript.pages.academy/code-and-magick`;

    const xhr = new XMLHttpRequest();

    xhr.responseType = `json`;

    xhr.addEventListener(`load`, () => {
      if (xhr.status === STATUS_CODE.OK) {
        onLoad(xhr.response);
      } else {
        onError(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
      }
    });
    xhr.addEventListener(`error`, function () {
      onError(`Произошла ошибка соединения`);
    });
    xhr.addEventListener(`timeout`, function () {
      onError(`Запрос не успел выполниться за ` + xhr.timeout + `мс`);
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open(`POST`, URL);
    xhr.send(data);
  };

  window.backend = {
    load, save
  };
})();
