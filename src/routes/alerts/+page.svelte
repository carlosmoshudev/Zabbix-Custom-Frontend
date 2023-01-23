<script lang="ts">
	import HostCard from '../../components/HostCard.svelte';
	import type { ZabbixHost } from '../../types';
	import { getHosts } from '../../methods/api';
	export let hosts: Array<ZabbixHost> = [];
	let authToken = '';
	let apiURL = 'http://20.229.182.95:9080//api_jsonrpc.php';
	authToken = '712d00c487267e61984018e1528fa4b735819c9666a3d2cf3d628eee66a1185b';
	load_hosts(authToken, apiURL);

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
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section>
	{#if hosts.length === 0}
		<h1>Loading hosts... Please wait</h1>
		<div class="loading_animation" />
	{:else}
		<div class="dashboard-stuff">
			{#each hosts as host}
				<HostCard {host} />
			{/each}
		</div>
	{/if}
</section>

<style>
	* {
		box-sizing: border-box;
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
	.dashboard-stuff {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.loading_animation {
		width: 60px;
		height: 60px;
		border: 10px solid #c5e3ff;
		border-top: 10px solid #67deee;
		border-radius: 50%;
		box-shadow: 0 0 5px rgb(169, 239, 248);
		animation: spin 5s linear infinite;
		opacity: 0.7;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
