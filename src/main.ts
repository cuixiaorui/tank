import { Application } from "pixi.js";

const game = new Application({
  width: 500,
  height: 500,
});

document.body.append(game.view);
