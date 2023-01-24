<script lang="ts">
	import type { ZabbixHost } from '../types';
	import { getHosts } from '../methods/api';
	import HostsTable from '../components/HostsTable.svelte';

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
		<h1>Loading hosts... Please wait</h1>
		<div class="loading_animation" />
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
	.loading_animation {
		width: 60px;
		height: 60px;
		border: 10px solid #c5e3ff;
		border-top: 10px solid #67deee;
		border-radius: 50%;
		box-shadow: 0 0 5px rgb(169, 239, 248);
		animation: loading-spinner 5s linear infinite;
		opacity: 0.7;
	}
</style>
