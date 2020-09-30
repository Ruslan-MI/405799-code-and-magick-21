"use strict";

const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const SHADOW_GAP = 10;
const MAX_BAR_HEIGHT = 150;
const BAR_WIDTH = 40;
const BAR_GAP = 50;
const HEADING_TEXT = [`Ура, Вы победили!`, `Список результатов:`];
const CLOUD_PADDING = 20;
const CLOUD_PADDING_LEFT = 40;
const LINE_HEIGTH = 20;
const NAME_MARGIN_TOP = 10;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const renderHeading = function (ctx, array) {
  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  for (let i = 0; i < array.length; i++) {
    ctx.fillText(array[i], CLOUD_X + CLOUD_PADDING, CLOUD_Y + CLOUD_PADDING + LINE_HEIGTH * i);
  }
};

const getMaxTime = function (array) {
  if (array.length === 0) {
    array[0] = 1;
  }
  let maxTime = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxTime) {
      maxTime = array[i];
    }
  }
  return maxTime;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);
  renderHeading(ctx, HEADING_TEXT);
  let maxTime = getMaxTime(times);
  for (let i = 0; i < times.length; i++) {
    let barHeight = (times[i] * MAX_BAR_HEIGHT) / maxTime;
    let color = (names[i] === `Вы`) ? `rgba(255, 0, 0, 1)` : `hsl(240, ` + Math.round(Math.random() * 100) + `%, 50%)`;
    ctx.fillStyle = color;
    ctx.fillRect(CLOUD_X + CLOUD_PADDING_LEFT + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - CLOUD_PADDING - LINE_HEIGTH, BAR_WIDTH, barHeight * -1);
    ctx.fillStyle = `#000`;
    ctx.fillText(Math.round(times[i]), CLOUD_X + CLOUD_PADDING_LEFT + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - CLOUD_PADDING - LINE_HEIGTH * 2 - barHeight);
    ctx.fillText(names[i], CLOUD_X + CLOUD_PADDING_LEFT + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - CLOUD_PADDING - LINE_HEIGTH + NAME_MARGIN_TOP);
  }
};
