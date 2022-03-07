import { Application } from "pixi.js";

export const game = new Application({
  width: 500,
  height: 500,
});

export function initGame() {
  document.body.append(game.view);
}

export function gameStage() {
  return game.stage;
}

