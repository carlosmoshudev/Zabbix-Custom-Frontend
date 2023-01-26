<script lang="ts">
	/*        Component Exports        */
	export let ZabbixHostInfoCollection: Array<ZabbixHost> = [];
	/*              Types              */
	import type { ZabbixHost } from '../types';
	/*            Functions            */
	function doesXHostHasYItem(zabbixHostInfo: ZabbixHost, zabbixHostItemName: string): boolean {
		let hasItem = false;
		zabbixHostInfo.items.forEach((item) => {
			if (item.name === zabbixHostItemName) {
				hasItem = true;
			}
		});
		return hasItem;
	}
</script>

<section id="element">
	<table id="table">
		<tbody id="body">
			{#each ZabbixHostInfoCollection as zabbixHost}
				<tr>
					<td>{zabbixHost.name}</td>
					{#each zabbixHost.items as item}
						{#if item.name === 'Zabbix agent ping'}
							<td class={item.lastvalue === '1' ? 'online' : 'offline'}>
								{item.lastvalue === '1' ? 'Online' : 'Offline'}
							</td>
						{/if}
					{/each}
					{#each zabbixHost.items as item}
						{#if item.name === 'ICMP ping'}
							<td class={item.lastvalue === '1' ? 'online' : 'offline'}>
								{item.lastvalue === '1' ? 'Online' : 'Offline'}
							</td>
						{/if}
					{/each}
					{#if !doesXHostHasYItem(zabbixHost, 'ICMP ping') && !doesXHostHasYItem(zabbixHost, 'Zabbix agent ping')}
						<td class="unknown">Unknown</td>
					{/if}
					{#each zabbixHost.items as item}
						{#if item.name === 'System description'}
							{#if item.lastvalue.split(' ')[0] === ''}
								<td class="unknown">Unknown</td>
							{:else}
								<td class={item.lastvalue.split(' ')[0]}>
									{item.lastvalue.split(' ')[0]}
								</td>
							{/if}
						{/if}
					{/each}
					{#if !doesXHostHasYItem(zabbixHost, 'System description')}
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
</style>
