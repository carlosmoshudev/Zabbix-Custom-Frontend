<script lang="ts">
	/*            Interfaces           */
	import type { IZabbixHostInfo } from '../../zabbix_interfaces';

	/*         Svelte Components       */
	import HostsTable_Component from '../../components/HostsTable.svelte';
	import Loading_Component from '../../components/Loading.svelte';

	/*            Functions            */
	import { FetchHosts } from '../../methods/api';
	function Load() {
		FetchHosts()
			.then((response) => {
				hosts = response.data.result;
				console.log(hosts);
			})
			.catch((error) => console.log(error));
	}

	/*            Properties           */
	let hosts: Array<IZabbixHostInfo> = [];

	/*            Lifecycle            */
	Load();
</script>

<section>
	{#if hosts.length === 0}
		<Loading_Component />
	{:else}
		<div id="table">
			<HostsTable_Component ZabbixHostInfoCollection={hosts} />
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
