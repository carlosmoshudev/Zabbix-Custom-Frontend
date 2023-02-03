<script lang="ts">
	import type { IZabbixHostInfo } from '../../types/$interfaces';
	import HostsTable_Component from '../../components/HostTable/HostsTable.svelte';
	import Loading_Component from '../../components/Loading.svelte';
	import { FetchHosts } from '../../functions/api';
	let hosts: Array<IZabbixHostInfo> = [];

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

<section class="page__margin__bottom">
	{#if hosts.length === 0}
		<Loading_Component />
	{:else}
		<HostsTable_Component ZabbixHostInfoCollection={hosts} />
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
		margin-top: 20px;
		table-layout: fixed;
	}
</style>
