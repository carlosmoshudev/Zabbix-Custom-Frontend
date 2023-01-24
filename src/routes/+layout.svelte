<script lang="ts">
	import BottomNavigationBarComponent from '../components/BottomNavBar.svelte';
	import './styles.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
	<footer>
		<BottomNavigationBarComponent
			LinkButtonPropsCollection={[
				{ link: '/', text: 'Home', icon: 'fas fa-chart-line btn' },
				{ link: '/alerts', text: 'Alerts', icon: 'fas fa-exclamation-triangle btn' },
				{ link: '/devices', text: 'Devices', icon: 'fas fa-hdd btn' },
				{ link: '/support', text: 'Support', icon: 'fas fa-headset btn' }
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
