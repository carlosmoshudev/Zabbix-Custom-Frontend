<script lang="ts">
	/*              Types              */
	import type { LinkButtonPropertiesType } from 'src/types/$types';

	/*         Svelte Components       */
	import Header_Component from '../components/Layout/Header.svelte';
	import BottomNavigationBar_Component from '../components/Layout/BottomNavBar.svelte';

	/*          Image Imports          */
	import BackgroundImage from '../lib/images/bg0.webp';

	/*        Component Constants      */
	const APPLICATION_TITLE = 'AV Health Info';
	const BACKGROUND_CLASS = 'application__background';
	const NAVIGATION_BUTTONS: Array<LinkButtonPropertiesType> = [
		{
			Link: '/',
			Text: 'Health',
			Icon: 'fas fa-heartbeat btn'
		},
		{
			Link: '/alerts',
			Text: 'Alerts',
			Icon: 'fas fa-exclamation-triangle btn'
		},
		{
			Link: '/devices',
			Text: 'Devices',
			Icon: 'fas fa-hdd btn'
		},
		{
			Link: '/table',
			Text: 'List View',
			Icon: 'fas fa-list btn'
		},
		{
			Link: '/support',
			Text: 'Support',
			Icon: 'fas fa-headset btn'
		}
	];

	/*              Styles             */
	import '../styles/root/Colors.css';
	import '../styles/root/Fonts.css';
	import '../styles/root/Units.css';
	import '../styles/elements/body.css';
	import '../styles/classes/zabbix-status.css';
	import '../styles/classes/layers.css';
	import '../styles/classes/layout.css';
	import '../styles/classes/framework.css';
	import '../styles/animations.css';
</script>

<div id="app">
	<div class="most__front__layer">
		<Header_Component ApplicationTitle={APPLICATION_TITLE} />
	</div>
	<div class={BACKGROUND_CLASS + ' most__back__layer'}>
		<img src={BackgroundImage} alt={BACKGROUND_CLASS} />
	</div>
	<main id="main">
		<slot /><!-- This is where the content of the page will be rendered -->
	</main>
	<div class="most__front__layer">
		<BottomNavigationBar_Component LinkButtonPropertiesCollection={NAVIGATION_BUTTONS} />
	</div>
</div>

<style lang="css" scoped>
	#app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	#main {
		margin: var(--bar-height) var(--zero);
		flex: 1;
	}
</style>
