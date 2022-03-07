import { initGame, gameStage } from "./game";
import { Tank } from "./Tank";

initGame();
const tank = Tank.create();
gameStage().addChild(tank);
