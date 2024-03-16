import { loadAll } from '@tsparticles/all';
import configs from '@tsparticles/configs';
import Particles from '@tsparticles/solid';
import { type Engine, tsParticles } from '@tsparticles/engine';

function ParticlesAnimation() {
	(async (engine: Engine) => {
		await loadAll(engine);

		await engine.load({
			id: 'tsparticles',
			options: {
				fullScreen: {
					zIndex: 1,
				},
				emitters: {
					position: {
						x: 50,
						y: 100,
					},
					rate: {
						quantity: 6,
						delay: 0.15,
					},
				},
				particles: {
					color: {
						value: ['#1E00FF', '#FF0061', '#E1FF00', '#00FF9E'],
					},
					move: {
						decay: 0.015,
						direction: 'top',
						enable: true,
						gravity: {
							enable: true,
						},
						outModes: {
							top: 'none',
							default: 'destroy',
						},
						speed: {
							min: 80,
							max: 150,
						},
					},
					number: {
						value: 0,
					},
					opacity: {
						value: 1,
					},
					rotate: {
						value: {
							min: 0,
							max: 360,
						},
						direction: 'random',
						animation: {
							enable: true,
							speed: 30,
						},
					},
					tilt: {
						direction: 'random',
						enable: true,
						value: {
							min: 0,
							max: 360,
						},
						animation: {
							enable: true,
							speed: 30,
						},
					},
					size: {
						value: 5,
						animation: {
							enable: true,
							startValue: 'min',
							count: 1,
							speed: 16,
							sync: true,
						},
					},
					roll: {
						darken: {
							enable: true,
							value: 25,
						},
						enlighten: {
							enable: true,
							value: 25,
						},
						enable: true,
						speed: {
							min: 5,
							max: 15,
						},
					},
					wobble: {
						distance: 30,
						enable: true,
						speed: {
							min: -7,
							max: 7,
						},
					},
					shape: {
						type: ['circle', 'square'],
						options: {},
					},
				},
				responsive: [
					{
						maxWidth: 1024,
						options: {
							particles: {
								move: {
									speed: {
										min: 33,
										max: 66,
									},
								},
							},
						},
					},
				],
			},
		});
	})(tsParticles);

	return <Particles id="tsparticles" />;
}

export default ParticlesAnimation;
