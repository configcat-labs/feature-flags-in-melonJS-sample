import * as me from 'melonjs/dist/melonjs.module.js';
import EnemyManager from "../enemy-manager.js";

class PlayScreen extends me.Stage {
				onResetEvent() {	
								me.game.world.addChild(new me.ImageLayer(0, 0, {
												image: "bg",
												repeat: "repeat",
												z: 0 
								}), 0);

								this.player = me.pool.pull("player");
								me.game.world.addChild(this.player, 1);

								this.enemyManager = new EnemyManager();
								this.enemyManager.createEnemies();
								me.game.world.addChild(this.enemyManager, 2);

								me.input.bindKey(me.input.KEY.LEFT, "left");
								me.input.bindKey(me.input.KEY.RIGHT, "right");
								me.input.bindKey(me.input.KEY.A, "left");
								me.input.bindKey(me.input.KEY.D, "right");

								me.input.bindKey(me.input.KEY.SPACE, "shoot", true);
				}


				onDestroyEvent() {
								me.input.unbindKey(me.input.KEY.LEFT);
								me.input.unbindKey(me.input.KEY.RIGHT);
								me.input.unbindKey(me.input.KEY.A);
								me.input.unbindKey(me.input.KEY.D);

								me.input.unbindKey(me.input.KEY.SPACE);
				}

				checkIfLoss(y) {
								if (y >= this.player.pos.y) {
												this.reset();
								}
				}
};

export default PlayScreen;
