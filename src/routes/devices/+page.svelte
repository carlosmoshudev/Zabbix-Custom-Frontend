<script lang="ts">
	import HostCard from '../../components/HostCard.svelte';
	import type { ZabbixHost } from '../../types';
	import { getHosts } from '../../methods/api';
	import Loading from '../../components/Loading.svelte';
	export let hosts: Array<ZabbixHost> = [];
	let authToken = '';
	let apiURL = 'http://20.229.182.95:9080//api_jsonrpc.php';
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
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section>
	{#if hosts.length === 0}
		<Loading />
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
</style>
