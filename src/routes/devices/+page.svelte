<script lang="ts">
	/*            Properties           */
	let ZabbixHostInfoCollection: Array<IZabbixHostInfo> = [];

	/*             Fields              */
	let shallShowHostView = false;
	let selectedHost: IZabbixHostInfo;

	/*            Interfaces           */
	import type { IZabbixHostInfo } from '../../zabbix_interfaces';

	/*         Svelte Components       */
	import HostCard_Component from '../../components/HostCard/HostCard.svelte';
	import Loading_Component from '../../components/Loading.svelte';
	import HostView_Component from '../../components/HostView.svelte';

	/*            Functions            */
	import { FetchHosts } from '../../methods/api';

	function LoadHostsFromApi(): void {
		FetchHosts(null, null)
			.then((response) => {
				ZabbixHostInfoCollection = response.data.result;
				console.log(ZabbixHostInfoCollection[0]);
			})
			.catch((error) => console.log(error));
	}

	/*             Events              */
	function onHostClick(host: IZabbixHostInfo): void {
		shallShowHostView = true;
		selectedHost = host;
		// scroll down
		window.scrollTo(0, document.body.scrollHeight / 2);
	}

	/*            Lifecycle            */
	LoadHostsFromApi();
</script>

<section id="page">
	{#if shallShowHostView}
		<div id="host-view">
			<HostView_Component HostInfo={selectedHost} />
		</div>
	{/if}
	{#if ZabbixHostInfoCollection.length === 0}
		<Loading_Component />
	{:else}
		<div id="dashboard-stuff">
			{#each ZabbixHostInfoCollection as _hostInfo}
				<HostCard_Component ZabbixHostInfo={_hostInfo} />
			{/each}
		</div>
	{/if}
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
		margin-bottom: 20vh;
	}
	#dashboard-stuff {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	#host-view {
		position: sticky;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: var(--dark-background-color-0);
		z-index: 1;
	}
</style>
