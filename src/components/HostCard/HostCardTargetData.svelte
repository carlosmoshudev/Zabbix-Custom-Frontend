<script lang="ts">
	export let ItemCollection: Array<IZabbixHostItem>;
	export let Title: string;
	export let Matchers: Array<string>;
	import type { IZabbixHostItem } from '../../zabbix_interfaces';
	import { Get_FirstWord } from '../../models/status';
</script>

<p>
	{Title}:
	{#each Matchers as __match}
		{#each ItemCollection as __item}
			{#if __item.name === __match}
				<span class={Get_FirstWord(__item.lastvalue)}>
					{Get_FirstWord(__item.lastvalue)}
				</span>
			{/if}
		{/each}
	{/each}
</p>
