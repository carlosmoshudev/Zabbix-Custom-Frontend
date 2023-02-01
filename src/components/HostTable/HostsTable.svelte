<script lang="ts">
	/*        Component Exports        */
	export let ZabbixHostInfoCollection: Array<IZabbixHostInfo> = [];

	/*            Interfaces           */
	import type { IZabbixHostInfo } from '../../zabbix_interfaces';

	/*            Functions            */
	import { CheckHostItem } from '../../functions/utils';

	import { hostPingItemMatchers } from '../../models/api';
	import HostTableCellPing from './HostTableCellPing.svelte';
</script>

<section>
	<table class="host__table__view">
		<tbody>
			{#each ZabbixHostInfoCollection as _hostInfo}
				<tr>
					<td class="host__table__cell">{_hostInfo.name}</td>
					{#each hostPingItemMatchers as _matcher}
						<HostTableCellPing itemCollection={_hostInfo.items} matcher={_matcher} />
					{/each}
					{#if !CheckHostItem(_hostInfo.items, 'ICMP ping') && !CheckHostItem(_hostInfo.items, 'Zabbix agent ping')}
						<td class="Unknown host__table__cell">Unknown</td>
					{/if}
					{#each _hostInfo.items as _item}
						{#if _item.name === 'System description'}
							{#if _item.lastvalue.split(' ')[0] === ''}
								<td class="Unknown host__table__cell" />
							{:else}
								<td class="{_item.lastvalue.split(' ')[0]} host__table__cell">
									{_item.lastvalue.split(' ')[0]}
								</td>
							{/if}
						{/if}
					{/each}
					{#if !CheckHostItem(_hostInfo.items, 'System description')}
						<td class="Unknown host__table__cell" />
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
</section>
