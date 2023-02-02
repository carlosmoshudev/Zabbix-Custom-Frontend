<script lang="ts">
	export let ZabbixHostInfoCollection: Array<IZabbixHostInfo> = [];
	import type { IZabbixHostInfo } from '../../zabbix_interfaces';
	import { CheckHostItem } from '../../functions/utils';
	import { hostPingItemMatchers } from '../../models/api';
	import HostTableCellPing from './HostTableCellPing.svelte';
</script>

<section>
	<table class="host__table__view">
		<tbody>
			{#each ZabbixHostInfoCollection as __host}
				<tr>
					<td class="host__table__cell">{__host.name}</td>
					{#each hostPingItemMatchers as __match}
						<HostTableCellPing itemCollection={__host.items} matcher={__match} />
					{/each}
					{#if !CheckHostItem(__host.items, 'ICMP ping') && !CheckHostItem(__host.items, 'Zabbix agent ping')}
						<td class="Unknown host__table__cell">Unknown</td>
					{/if}
					{#each __host.items as __item}
						{#if __item.name === 'System description'}
							{#if __item.lastvalue.split(' ')[0] === ''}
								<td class="Unknown host__table__cell" />
							{:else}
								<td class="{__item.lastvalue.split(' ')[0]} host__table__cell">
									{__item.lastvalue.split(' ')[0]}
								</td>
							{/if}
						{/if}
					{/each}
					{#if !CheckHostItem(__host.items, 'System description')}
						<td class="Unknown host__table__cell" />
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
</section>
