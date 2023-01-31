<script lang="ts">
	/*        Component Exports        */
	export let ZabbixHostInfoCollection: Array<IZabbixHostInfo> = [];

	/*            Interfaces           */
	import type { IZabbixHostInfo } from '../zabbix_interfaces';

	/*         Svelte Components       */
	import HostView_Component from '../components/HostView.svelte';

	/*            Functions            */
	import { CheckHostItem } from '../methods/utils';

	/*             Events              */
	function onHostClick(host: IZabbixHostInfo): void {
		shallShowHostView = true;
		selectedHost = host;
		window.scrollTo(0, document.body.scrollHeight / 2);
	}

	/*             Fields              */
	let shallShowHostView = false;
	let selectedHost: IZabbixHostInfo;
</script>

<section id="element">
	{#if shallShowHostView}
		<div id="host-view">
			<HostView_Component HostInfo={selectedHost} />
		</div>
	{/if}
	<table id="table">
		<tbody id="body">
			{#each ZabbixHostInfoCollection as _hostInfo}
				<tr
					on:click={() => {
						onHostClick(_hostInfo);
					}}
					on:keydown={() => {
						onHostClick(_hostInfo);
					}}
				>
					<td>{_hostInfo.name}</td>
					{#each _hostInfo.items as _item}
						{#if _item.name === 'Zabbix agent ping'}
							<td class={_item.lastvalue === '1' ? 'online' : 'offline'}>
								{_item.lastvalue === '1' ? 'Online' : 'Offline'}
							</td>
						{/if}
					{/each}
					{#each _hostInfo.items as _item}
						{#if _item.name === 'ICMP ping'}
							<td class={_item.lastvalue === '1' ? 'online' : 'offline'}>
								{_item.lastvalue === '1' ? 'Online' : 'Offline'}
							</td>
						{/if}
					{/each}
					{#if !CheckHostItem(_hostInfo.items, 'ICMP ping') && !CheckHostItem(_hostInfo.items, 'Zabbix agent ping')}
						<td class="unknown">Unknown</td>
					{/if}
					{#each _hostInfo.items as _item}
						{#if _item.name === 'System description'}
							{#if _item.lastvalue.split(' ')[0] === ''}
								<td class="unknown">Unknown</td>
							{:else}
								<td class={_item.lastvalue.split(' ')[0]}>
									{_item.lastvalue.split(' ')[0]}
								</td>
							{/if}
						{/if}
					{/each}
					{#if !CheckHostItem(_hostInfo.items, 'System description')}
						<td class="unknown">Unknown</td>
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style>
	#table {
		border-collapse: collapse;
		width: var(--end-percent);
		margin-bottom: 20vh;
	}
	td {
		text-align: left;
		color: var(--light-text-color-0);
		text-align: left;
		border-bottom: var(--pixel) solid var(--light-text-color-0);
		padding: 0.3rem 5rem 0.3rem 0.3rem;
	}
	.online {
		color: var(--online-color);
	}
	.offline {
		color: var(--offline-color);
	}
	.unknown {
		color: var(--unknown-color);
	}
	#host-view {
		position: sticky;
		top: 20px;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: var(--dark-background-color-0);
		z-index: 1;
	}
</style>
