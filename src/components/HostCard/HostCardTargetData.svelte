<script lang="ts">
	/*       Component Exports        */
	export let ItemCollection: Array<IZabbixHostItem>;
	export let Title: string;
	export let Matchers: Array<string>;

	/*            Interfaces           */
	import type { IZabbixHostItem } from '../../zabbix_interfaces';

	/*            Functions            */
	import { Get_FirstWord } from '../../models/status';
</script>

<p>
	{Title}:
	{#each Matchers as _matcher}
		{#each ItemCollection as _item}
			{#if _item.name === _matcher}
				<span class={Get_FirstWord(_item.lastvalue)}>
					{Get_FirstWord(_item.lastvalue)}
				</span>
			{/if}
		{/each}
	{/each}
</p>
