<script>
	import { onMount } from 'svelte';
	import BottomNavBar from '../components/BottomNavBar.svelte';
	import './styles.css';

	/* Catch gesture events */
	onMount(() => {
		document.addEventListener('ontouchmove', (e) => {e.preventDefault(); alert('ontouchmove');});
	});
</script>

<div class="app">
	<main>
		<slot />
	</main>
	<footer>
		<BottomNavBar
			buttons={[
				{ href: '/', text: 'Home', icon: 'fas fa-chart-line btn' },
				{ href: '/alerts', text: 'Alerts', icon: 'fas fa-exclamation-triangle btn' },
				{ href: '/devices', text: 'Devices', icon: 'fas fa-hdd btn' },
				{ href: '/support', text: 'Support', icon: 'fas fa-headset btn' }
			]}
		/>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	footer {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
