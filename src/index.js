import * as me from 'melonjs/dist/melonjs.module.js';
import 'index.css';

import PlayScreen from 'js/stage/play.js';
import PlayerEntity from 'js/renderables/player.js';
import EnemyEntity from 'js/renderables/enemy.js';
import Laser from './js/laser.js';

import DataManifest from 'manifest.js';


me.device.onReady(() => {
				setTimeout(() => {
								if (!me.video.init(1218, 562, { parent: "screen", scale: "auto", scaleMethod: "flex-width" })) {
												alert("Your browser does not support HTML5 canvas.");
												return;
								};
								me.audio.init("mp3,ogg");
								me.loader.crossOrigin = "anonymous";
								me.loader.preload(DataManifest, function () {
												me.state.set(me.state.PLAY, new PlayScreen());

												me.pool.register("player", PlayerEntity);
												me.pool.register("ships", EnemyEntity);
												me.pool.register("laser", Laser);

												me.state.change(me.state.PLAY);
								});
				}, 5000);				
});
