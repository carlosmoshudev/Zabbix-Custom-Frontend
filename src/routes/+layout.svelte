<script>
	import BottomNavBar from './../components/BottomNavBar.svelte';
	import './styles.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
	<footer>
		<BottomNavBar />
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
