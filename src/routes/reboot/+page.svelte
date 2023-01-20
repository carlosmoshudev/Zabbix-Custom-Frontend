<script lang="ts">
import reb from 'child_process';
reb.exec('sudo /sbin/shutdown -r now', function (msg:unknown) { console.log(msg) });
	
</script>

<svelte:head>
	<meta name="description" content="Main-Zabbix" />
</svelte:head>

<section>
	<h1>Rebooting...</h1>
	<p class="info"></p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	h1 {
		font-size: 2rem;
	}
</style>
