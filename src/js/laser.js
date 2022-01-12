import * as me from 'melonjs/dist/melonjs.module.js';
import { defines as CONSTANTS } from './constants.js';
import PlayScreen from './stage/play.js';

/**
 *
 */
export class LaserRenderable extends me.Renderable {
				constructor() {
								super(0, 0, CONSTANTS.LASER.WIDTH, CONSTANTS.LASER.HEIGHT);

								this.z = 5;
				}

				destroy() {

				}

				draw(renderer) {
								let color = renderer.getColor();
								renderer.setColor('#5EFF7E');
								renderer.fillRect(0, 0, this.width, this.height);
								renderer.setColor(color);
				}
}


class Laser extends me.Entity {
				constructor(x, y) {
								super(x, y, { width: CONSTANTS.LASER.WIDTH, height: CONSTANTS.LASER.HEIGHT });


								this.z = 5;

								// this body has a velocity of 0 units horizontal and 16 units vertically
								this.body.vel.set(0, 16);

								// the force to be applied at each update is -8 units vertically (in html, this means towards top of window)
								this.body.force.set(0, -8);

								// cap the velocity of the laser beam to the initial velocity
								this.body.setMaxVelocity(3, 16);

								// this object is officially a projectile
								this.body.collisionType = me.collision.types.PROJECTILE_OBJECT;

								// don't let gravity affect the object
								this.body.ignoreGravity = true;


								this.renderable = new LaserRenderable();
								this.alwaysUpdate = true;
				}

    /**
     *
     * @param dt
     * @returns {boolean}
     */
				update(dt) {
								// because we're using melonjs' physics system, all we need to do is update the object.
								// this call will move the object
								super.update(dt);

								// if the laser is above the screen, remove it from the game world
								if (this.pos.y + this.height <= 0) {
												me.game.world.removeChild(this);
								}

								return true;
				}

				onCollision(response, other) {

								if (other.body.collisionType === me.collision.types.ENEMY_OBJECT) {
												me.game.world.removeChild(this);

												if (me.state.current() instanceof PlayScreen) {
																me.state.current().enemyManager.removeChild(other);
												};												

												return false;
								}
				}
}

export default Laser;