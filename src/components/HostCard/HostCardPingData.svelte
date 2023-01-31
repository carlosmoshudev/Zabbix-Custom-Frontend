<script lang="ts">
	/*       Component Exports        */
	export let ItemCollection: Array<IZabbixHostItem>;

	/*            Interfaces           */
	import type { IZabbixHostItem } from '../../zabbix_interfaces';

	/*       Component Constants      */
	const ITEM_MATCHERS: Array<string> = ['Zabbix agent ping', 'ICMP ping'];
</script>

<p>
	Ping:
	{#each ITEM_MATCHERS as _matcher}
		{#each ItemCollection as _item}
			{#if _item.name === _matcher}
				{#if _item.lastvalue === '1'}
					<span class="online">Online</span>
				{:else if _item.lastvalue === '0'}
					<span class="offline">Offline</span>
				{/if}
			{/if}
		{/each}
	{/each}
	{#if ItemCollection.filter((item) => item.name === ITEM_MATCHERS[0]).length === 0 && ItemCollection.filter((item) => item.name === ITEM_MATCHERS[1]).length === 0}
		<span class="unknown">Unknown</span>
	{/if}
</p>
