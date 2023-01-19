<script>
	import BottomNavBar from './../components/BottomNavBar.svelte';
	import './styles.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
	<footer>
		<BottomNavBar 
			buttons={[
				{href: '/', text: 'Home', icon: 'fas fa-chart-line'},
				{href: '/alerts', text: 'Alerts', icon: 'fas fa-exclamation-triangle'},
				{href: '/devices', text: 'Devices', icon: 'fas fa-hdd'},
				{href: '/support', text: 'Support', icon: 'fas fa-headset'},
						]}
		/>
	</footer>
</div>

<style>
	/* Footer sticky at the bottom */
	footer {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
