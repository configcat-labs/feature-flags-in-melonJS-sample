import * as me from 'melonjs/dist/melonjs.module.js';
import { defines as CONSTANTS, getFlag} from '../constants.js';

class PlayerEntity extends me.Sprite {
				constructor() {
								let image;

								if (getFlag()) {
												image = me.loader.getImage("player2");
								} else {
												image = me.loader.getImage("player");
								}								

								super(
												me.game.viewport.width / 2 - image.width / 2,
												me.game.viewport.height - image.height - 20,
												{ image: image, width: 32, height: 32 }
								);

								this.velx = 400;
								this.maxX = me.game.viewport.width - this.width;
				}

				update(dt) {
								super.update(dt);

								if (me.input.isKeyPressed("left")) {
												this.pos.x -= this.velx * dt / 1000;
								}

								if (me.input.isKeyPressed("right")) {
												this.pos.x += this.velx * dt / 1000;
								}

								if (me.input.isKeyPressed("shoot")) {
												me.game.world.addChild(me.pool.pull("laser", this.pos.x - CONSTANTS.LASER.WIDTH, this.pos.y));
								}

								this.pos.x = me.Math.clamp(this.pos.x, 32, this.maxX);

								return true;
				}

				onCollision(response, other) {
								return true;
				}
};

export default PlayerEntity;