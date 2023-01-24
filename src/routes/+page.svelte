<script lang="ts">
	import type { ZabbixHost } from '../types';
	import { getHosts } from '../methods/api';
	import HostsTable from '../components/HostsTable.svelte';
	import Loading from '../components/Loading.svelte';

	let authToken = '';
	let apiURL = 'http://20.229.182.95:9080//api_jsonrpc.php';
	let hosts: Array<ZabbixHost> = [];

	authToken = '712d00c487267e61984018e1528fa4b735819c9666a3d2cf3d628eee66a1185b';
	load_hosts(authToken, apiURL);

	function load_hosts(token: string, url: string) {
		getHosts(token, url)
			.then((response) => {
				hosts = response.data.result;
				console.log(hosts);
			})
			.catch((error) => console.log(error));
	}
</script>

<svelte:head>
	<meta name="description" content="Main-Zabbix" />
</svelte:head>

<section>
	{#if hosts.length === 0}
		<Loading />
	{:else}
		<div class="table">
			<HostsTable {hosts} />
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
	}
	.table {
		margin-top: 20px;
		table-layout: fixed;
	}
</style>
