<script lang="ts">
	/*            Components           */
	import Header from '../components/Layout/Header.svelte';
	import BottomNavigationBarComponent from '../components/Layout/BottomNavBar.svelte';
	import Background from '../lib/images/bg0.webp';

	/*              Styles             */
	import './styles.css';
</script>

<div id="app">
	<div class="front"><Header title="AV Health Info" /></div>
	<div id="background">
		<img src={Background} alt="background" />
	</div>
	<main id="main">
		<slot /><!-- This is where the content of the page will be rendered -->
	</main>
	<div class="front">
		<BottomNavigationBarComponent
			LinkButtonPropsCollection={[
				{ link: '/', text: 'Health', icon: 'fas fa-heartbeat btn' },
				{ link: '/alerts', text: 'Alerts', icon: 'fas fa-exclamation-triangle btn' },
				{ link: '/devices', text: 'Devices', icon: 'fas fa-hdd btn' },
				{ link: '/table', text: 'List View', icon: 'fas fa-list btn' },
				{ link: '/support', text: 'Support', icon: 'fas fa-headset btn' }
			]}
		/>
	</div>
</div>

<style>
	#app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	#background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		filter: blur(5px);
		opacity: 0.4;
		z-index: -1;
	}
	#main {
		margin: var(--bar-height) var(--zero);
		flex: 1;
	}
	.front {
		z-index: 2;
	}
</style>
