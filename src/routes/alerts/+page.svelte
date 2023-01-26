<script lang="ts">
	/*		   Route Exports           */
	export let ZabbixHostInfoCollection: Array<ZabbixHost> = [];
	/*              Types              */
	import type { ZabbixHost } from '../../types';
	/*            Components           */
	import HostCardComponent from '../../components/HostCard.svelte';
	import LoadingComponent from '../../components/Loading.svelte';
	/*            API Methods          */
	import { getHosts } from '../../methods/api';
	/*            API Variables        */
	let authToken = '';
	let apiURL = 'http://20.229.182.95:9080//api_jsonrpc.php';
	/*            API Functions        */
	function LoadHostsFromApi(oAuthToken: string, rpcApiUrl: string): void {
		getHosts(oAuthToken, rpcApiUrl)
			.then((response) => {
				ZabbixHostInfoCollection = response.data.result;
				ZabbixHostInfoCollection = GetOfflineHosts(ZabbixHostInfoCollection);
				console.log(ZabbixHostInfoCollection);
			})
			.catch((error) => console.log(error));
	}
	function GetOfflineHosts(hosts: Array<ZabbixHost>): Array<ZabbixHost> {
		let filteredHosts: Array<ZabbixHost> = [];
		hosts.forEach((host) => {
			host.items.forEach((item) => {
				if (item.name === 'Zabbix agent ping' && item.lastvalue === '0') {
					filteredHosts.push(host);
				} else if (item.name === 'ICMP ping' && item.lastvalue === '0') {
					filteredHosts.push(host);
				}
			});
		});
		return filteredHosts;
	}
	/*              Run               */
	authToken = '712d00c487267e61984018e1528fa4b735819c9666a3d2cf3d628eee66a1185b';
	LoadHostsFromApi(authToken, apiURL);
</script>

<section>
	{#if ZabbixHostInfoCollection.length === 0}
		<LoadingComponent />
	{:else}
		<div id="dashboard-stuff">
			{#each ZabbixHostInfoCollection as host}
				<HostCardComponent ZabbixHostInfo={host} />
			{/each}
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
		margin-bottom: 20vh;
	}
	#dashboard-stuff {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
</style>
