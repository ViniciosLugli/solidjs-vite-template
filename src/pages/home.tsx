import toast from 'solid-toast';
import { Tooltip } from '@ark-ui/solid';
import { Portal } from 'solid-js/web';
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
				<img src="static/image.svg" alt="test image" width="255" height="255" />
			</div>
		</>
	);
};

export default Home;
