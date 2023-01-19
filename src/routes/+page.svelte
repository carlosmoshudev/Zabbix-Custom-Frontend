<script lang="ts">
	import type { ZabbixGroup, ZabbixHost } from '../types';
	import { login, getHosts, getHostGroups, getGraphs } from '../methods/api';

	let authToken = '';
	let apiURL = 'http://20.229.182.95:9080//api_jsonrpc.php';
	let hosts: Array<ZabbixHost> = [];
	let groups: Array<ZabbixGroup> = [];
	
	authToken = '712d00c487267e61984018e1528fa4b735819c9666a3d2cf3d628eee66a1185b'
	load_hosts(authToken, apiURL);
	load_groups(authToken, apiURL);

	function load_hosts(token: string, url: string) {
		getHosts(token, url)
			.then((response) => {
				hosts = response.data.result;
				console.log(hosts);
			})
			.catch((error) => console.log(error));
	}

	function load_groups(token: string, url: string) {
		getHostGroups(token, url)
			.then((response) => (groups = response.data.result))
			.catch((error) => console.log(error));
	}
</script>

<svelte:head>
	<meta name="description" content="Main-Zabbix" />
</svelte:head>

<section>
	{#if hosts.length === 0}
		<h1>Loading hosts... Please wait</h1>
		<div class="loading_animation"></div>
	{:else}
		<h1> Rack Health Info</h1>
		<div class="counters">
			<div class="counter">
				<h2>{hosts.length}</h2>
				<p>Hosts</p>
			</div>
			<div class="counter">
				<h2>{groups.length}</h2>
				<p>Groups</p>
			</div>
		</div>
		<div class="charts"></div>
		<div class="table">
			<table>
				<thead>
					<tr>
						<th>Host</th>
						<th>Group</th>
						<th>IP</th>
					</tr>
				</thead>
				<tbody>
					{#each hosts as host}
						<tr>
							<td>{host.name}</td>
							<td>{#each host.groups as group}
								{group.name}
								{/each}</td>
							<td>{host.interfaces[0].ip}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.loading_animation {
		width: 100px;
		height: 100px;
		border: 10px solid #f3f3f3;
		border-top: 10px solid #3498db;
		border-radius: 50%;
		animation: spin 2s linear infinite;
		opacity: 0.5;
	}

	table {
		border-collapse: collapse;
		width: 100%;
	}

	.table {
		margin-top: 20px;
		table-layout: fixed;
	}

	th,
	td {
		text-align: left;
		padding: 8px;
		border: 1px solid #ddd8;
		color: #fffc;
		text-align: center;
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
