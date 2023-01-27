<script lang="ts">
	/*              Types              */
	import type { ZabbixHost } from '../../types';

	/*            Components           */
	import HostsTable from '../../components/HostsTable.svelte';
	import Loading from '../../components/Loading.svelte';

	/*            API Methods          */
	import { FetchHosts } from '../../methods/api';

	/*            API Variables        */
	let hosts: Array<ZabbixHost> = [];

	/*			  Run Code             */
	function Load() {
		FetchHosts()
			.then((response) => {
				hosts = response.data.result;
				console.log(hosts);
			})
			.catch((error) => console.log(error));
	}
	Load();
</script>

<section>
	{#if hosts.length === 0}
		<Loading />
	{:else}
		<div id="table">
			<HostsTable ZabbixHostInfoCollection={hosts} />
		</div>
	{/if}
</section>

<style>
	* {
		box-sizing: var(--sizing);
		font-family: var(--primary-font);
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--light-text-color-0);
	}
	#table {
		margin-top: 20px;
		table-layout: fixed;
	}
</style>
