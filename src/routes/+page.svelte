<script lang="ts">
	import type { ZabbixHost } from '../types';
	import { FetchHosts } from '../methods/api';

	let ZabbixHostInfoCollection: Array<ZabbixHost> = [];

	function LoadHostsFromApi(): void {
		FetchHosts()
			.then((response) => {
				ZabbixHostInfoCollection = response.data.result;
				console.log(ZabbixHostInfoCollection);
			})
			.catch((error) => console.log(error));
	}

	LoadHostsFromApi();
</script>

<section id="page">
	<h1>Page</h1>
</section>

<style>
	* {
		box-sizing: var(--sizing);
		font-family: var(--primary-font);
	}
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--light-text-color-0);
	}
</style>
