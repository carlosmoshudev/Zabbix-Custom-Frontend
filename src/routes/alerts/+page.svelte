<script lang="ts">
	/* Export */
	export let hosts: Array<ZabbixHost> = [];
	/* Types */
	import type { ZabbixHost } from '../../types';
	/* Import */
	import HostCard from '../../components/HostCard.svelte';
	import Loading from '../../components/Loading.svelte';
	import { getHosts } from '../../methods/api';
	/* Fields */
	let authToken = '';
	let apiURL = 'http://20.229.182.95:9080//api_jsonrpc.php';
	authToken = '712d00c487267e61984018e1528fa4b735819c9666a3d2cf3d628eee66a1185b';
	/* Functions */
	function load_hosts(token: string, url: string) {
		getHosts(token, url)
		.then((response) => {
			hosts = response.data.result;
			hosts = filterOffline(hosts);
			console.log(hosts);
		})
		.catch((error) => console.log(error));
	}
	function filterOffline(hosts: Array<ZabbixHost>): Array<ZabbixHost> {
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
	/* Run */
	load_hosts(authToken, apiURL);
</script>

<section>
	{#if hosts.length === 0}
		<Loading />
	{:else}
		<div id="dashboard-stuff">
			{#each hosts as host}
				<HostCard {host} />
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
