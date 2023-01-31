<script lang="ts">
	/*         Svelte Components       */
	import Header_Component from '../components/Layout/Header.svelte';
	import BottomNavigationBar_Component from '../components/Layout/BottomNavBar.svelte';
	import BackgroundImage from '../lib/images/bg0.webp';

	/*              Styles             */
	import './styles.css';
</script>

<div id="app">
	<div class="front"><Header_Component ApplicationTitle="AV Health Info" /></div>
	<div id="background">
		<img src={BackgroundImage} alt="background" />
	</div>
	<main id="main">
		<slot /><!-- This is where the content of the page will be rendered -->
	</main>
	<div class="front">
		<BottomNavigationBar_Component
			LinkButtonPropertiesCollection={[
				{ Link: '/', Text: 'Health', Icon: 'fas fa-heartbeat btn' },
				{ Link: '/alerts', Text: 'Alerts', Icon: 'fas fa-exclamation-triangle btn' },
				{ Link: '/devices', Text: 'Devices', Icon: 'fas fa-hdd btn' },
				{ Link: '/table', Text: 'List View', Icon: 'fas fa-list btn' },
				{ Link: '/support', Text: 'Support', Icon: 'fas fa-headset btn' }
			]}
		/>
	</div>
</div>

<style lang="css" scoped>
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
