import toast from 'solid-toast';
import { Tooltip } from '@ark-ui/solid';
import { Portal } from 'solid-js/web';
import ParticlesAnimation from '@components/particle_animation';
import { Show, createSignal } from 'solid-js';

const Home = () => {
	const [show, setShow] = createSignal(false);

	const notify = () => {
		toast.success('Here is your toast.');

		setShow(true);
	};

	return (
		<>
			<div class="flex text-3xl text-center justify-center items-center h-screen">
				<Tooltip.Root openDelay={250} closeDelay={250} positioning={{ placement: 'top' }}>
					<Tooltip.Trigger>
						<button class="font-bold underline" onClick={notify}>
							Make me a toast
						</button>
					</Tooltip.Trigger>
					<Portal>
						<Tooltip.Positioner>
							<Tooltip.Content class="bg-blue-500 text-white rounded-md p-2">Test tooltip</Tooltip.Content>
						</Tooltip.Positioner>
					</Portal>
				</Tooltip.Root>
			</div>
			<div class="flex text-3xl text-center justify-center items-center h-screen">
				<Show when={show()}>
					<ParticlesAnimation />
				</Show>
			</div>
		</>
	);
};

export default Home;
