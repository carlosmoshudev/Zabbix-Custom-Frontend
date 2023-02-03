<script lang="ts">
	export let ItemCollection: Array<IZabbixHostItem>;
	import type { IZabbixHostItem } from '../../types/$interfaces';
	import { Get_StatusText, Has_PingItem } from '../../models/status';
	import { StatusTextByCode } from '../../models/status';
	import { hostPingItemMatchers } from '../../models/api';
	const TEXT = 'Ping:';
	const DEFAULT_CODE = 'na';
</script>

<p>
	{TEXT}
	{#each hostPingItemMatchers as __match}
		{#each ItemCollection as __item}
			{#if __item.name === __match}
				<span class={Get_StatusText(__item)}>
					{Get_StatusText(__item)}
				</span>
			{/if}
		{/each}
	{/each}
	{#if Has_PingItem(ItemCollection)}
		<span class={StatusTextByCode[DEFAULT_CODE]}>
			{StatusTextByCode[DEFAULT_CODE]}
		</span>
	{/if}
</p>
