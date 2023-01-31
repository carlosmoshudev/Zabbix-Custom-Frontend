<script lang="ts">
	/*       Component Exports        */
	export let ItemCollection: Array<IZabbixHostItem>;
	export let Title: string;
	export let Matchers: Array<string>;

	/*            Interfaces           */
	import type { IZabbixHostItem } from '../../zabbix_interfaces';
</script>

<p>
	{Title}:
	{#each Matchers as _matcher}
		{#each ItemCollection as _item}
			{#if _item.name === _matcher}
				<span class={_item.lastvalue.split(' ')[0]}>{_item.lastvalue.split(' ')[0]}</span>
			{/if}
		{/each}
	{/each}
	{#if ItemCollection.filter((item) => item.name === Matchers[0]).length === 0 && ItemCollection.filter((item) => item.name === Matchers[1]).length === 0}
		<span class="unknown">Unknown</span>
	{/if}
</p>
