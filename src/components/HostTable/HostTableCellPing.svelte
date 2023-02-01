<script lang="ts">
	export let itemCollection: Array<IZabbixHostItem> = [];
	export let matcher: string;
	import type { IZabbixHostItem } from '../../zabbix_interfaces';
</script>

{#each itemCollection as _item}
	{#if _item.name === matcher}
		<td class={_item.lastvalue === '1' ? 'Online host__table__cell' : 'Offline host__table__cell'}>
			{_item.lastvalue === '1' ? 'Online' : 'Offline'}
		</td>
	{/if}
{/each}
