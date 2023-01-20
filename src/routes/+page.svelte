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
		<div class="table">
			<table>
				<tbody>
					{#each hosts as host}
						<tr>
							<td>{host.name}</td>
							<td>
								{#each host.items as item}
									{#if item.name === 'Zabbix agent ping'}
										{item.lastvalue === '1' ? 'Online' : 'Offline'}
									{/if}
								{/each}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
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

	table {
		border-collapse: collapse;
		width: 100%;
		margin-bottom: 20vh;
	}

	.table {
		margin-top: 20px;
		table-layout: fixed;
	}
	td {
		text-align: left;
		padding: 8px;
		color: #fffc;
		text-align: left;
		border-bottom: 1px solid #ddd;
		padding: 0.3rem 1rem;
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
