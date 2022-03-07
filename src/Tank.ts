import tankLogo from "./assets/logo.png";
import { Texture, Sprite, Container } from "pixi.js";
import { game } from "./game";

export class Tank extends Container {
  private sprite: Sprite;
  private speed = 10;
  constructor() {
    // 有一个图片
    // 先显示一个图片
    super();
    // ui
    const texture = Texture.from(tankLogo);
    this.sprite = new Sprite(texture);

    this.addChild(this.sprite);
    window.addEventListener("keydown", this.keydownHandler.bind(this));
    window.addEventListener("keyup", this.keyupHandler.bind(this));
    game.ticker.add(this.handleTicker.bind(this));
  }

  private isDown = false;
  private isUp = false;
  handleTicker() {
    if (this.isDown) {
      this.y += this.speed;
    }
    if (this.isUp) {
      this.y -= this.speed;
    }
  }

  keyupHandler(e: KeyboardEvent) {
    switch (e.code) {
      case "ArrowDown":
        this.isDown = false;
        break;
      case "ArrowUp":
        this.isUp = false;
        break;
      default:
        break;
    }
  }

  keydownHandler(e: KeyboardEvent) {
    switch (e.code) {
      case "ArrowDown":
        this.isDown = true;
	this.dirY = 1
        break;
      case "ArrowUp":
        this.isUp = true;
	this.dirY = -1
        break;
      default:
        break;
    }
  }

  static create() {
    const tank = new Tank();
    return tank;
  }
}
