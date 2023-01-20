<script lang="ts">
	const { exec } = require('child_process');
	exec('sudo reboot now', (error: any, stdout: any, stderr: any) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
	});
	
</script>

<svelte:head>
	<meta name="description" content="Main-Zabbix" />
</svelte:head>

<section>

</section>

<style>

</style>
