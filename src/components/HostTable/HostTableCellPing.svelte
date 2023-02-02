<script lang="ts">
	export let itemCollection: Array<IZabbixHostItem> = [];
	export let matcher: string;
	import type { IZabbixHostItem } from '../../zabbix_interfaces';
</script>

{#each itemCollection as __item}
	{#if __item.name === matcher}
		<td class={__item.lastvalue === '1' ? 'Online host__table__cell' : 'Offline host__table__cell'}>
			{__item.lastvalue === '1' ? 'Online' : 'Offline'}
		</td>
	{/if}
{/each}
