<script lang="ts">
	let shallShowHostView: boolean = false;
	let selectedHost: ZabbixHost;
	/*            Properties           */
	let ZabbixHostInfoCollection: Array<ZabbixHost> = [];

	/*              Types              */
	import type { ZabbixHost } from '../../types';

	/*            Components           */
	import HostCardComponent from '../../components/HostCard/HostCard.svelte';
	import LoadingComponent from '../../components/Loading.svelte';
	import HostView from '../../components/HostView.svelte';

	/*          Import Methods         */
	import { FetchHosts } from '../../methods/api';

	/*          Define Methods         */
	function LoadHostsFromApi(): void {
		FetchHosts()
			.then((response) => {
				ZabbixHostInfoCollection = response.data.result;
				console.log(ZabbixHostInfoCollection[0]);
			})
			.catch((error) => console.log(error));
	}
	function onHostClick(host: ZabbixHost): void {
		shallShowHostView = true;
		selectedHost = host;
		// scroll down
		window.scrollTo(0, document.body.scrollHeight / 2);
	}
	/*              Run               */
	LoadHostsFromApi();
</script>

<section id="page">
	{#if shallShowHostView}
		<div id="host-view">
			<HostView host={selectedHost} />
		</div>
	{/if}
	{#if ZabbixHostInfoCollection.length === 0}
		<LoadingComponent />
	{:else}
		<div id="dashboard-stuff">
			{#each ZabbixHostInfoCollection as host}
				<div on:click={() => onHostClick(host)} on:keydown={() => onHostClick(host)}>
					<HostCardComponent ZabbixHostInfo={host} />
				</div>
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
		width: 100vw;
		height: 100vh;
		background-color: var(--dark-background-color-0);
		z-index: 1;
	}
</style>
