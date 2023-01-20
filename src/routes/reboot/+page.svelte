<script lang="ts">
	import { exec } from 'child_process';
	import { onMount } from 'svelte';

	onMount(() => {
		let info = document.querySelector('.info') as HTMLParagraphElement;
		exec('sudo reboot now', (error, stdout, stderr) => {
			info.innerHTML = 'Rebooting...';
			if (error) {
				console.log(`error: ${error.message}`);
				info.innerHTML = 'Error: ' + error.message;
				return;
			}
			if (stderr) {
				console.log(`stderr: ${stderr}`);
				info.innerHTML = 'Error: ' + stderr;
				return;
			}
			console.log(`stdout: ${stdout}`);
			info.innerHTML = 'Doing it...' + stdout;
		});
	});
	
	
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
