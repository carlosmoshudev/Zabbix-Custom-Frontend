<script lang="ts">
	/*       Component Exports        */
	export let ItemCollection: Array<IZabbixHostItem>;

	/*            Interfaces           */
	import type { IZabbixHostItem } from '../../zabbix_interfaces';

	/*            Functions            */
	import { Get_StatusText, Has_PingItem } from '../../models/status';

	/*            Models               */
	import { StatusTextByCode } from '../../models/status';
	import { hostPingItemMatchers } from '../../models/api';

	/*       Component Constants      */
	const TEXT = 'Ping:';
</script>

<p>
	{TEXT}
	{#each hostPingItemMatchers as _matcher}
		{#each ItemCollection as _item}
			{#if _item.name === _matcher}
				<span class={Get_StatusText(_item)}>{Get_StatusText(_item)}</span>
			{/if}
		{/each}
	{/each}
	{#if Has_PingItem(ItemCollection)}
		<span class={StatusTextByCode['na']}>{StatusTextByCode['na']}</span>
	{/if}
</p>
