<script lang="ts">
	/*        Component Exports        */
	export let ZabbixHostInfo: IZabbixHostInfo;

	/*            Interfaces           */
	import type { IZabbixHostInfo } from '../../zabbix_interfaces';

	/*         Svelte Components       */
	import HostCardPingData_Component from './HostCardPingData.svelte';
	import HostCardTargetData_Component from './HostCardTargetData.svelte';

	/*     	       Models             */
	import { hostItemTargets } from '../../models/api';
</script>

<section class="base__style__formatting host__card__body">
	<div class="host__card__header"><h2>{ZabbixHostInfo.name}</h2></div>
	<div class="host__card__content">
		<HostCardPingData_Component ItemCollection={ZabbixHostInfo.items} />
		{#each hostItemTargets as _itemTarget}
			<HostCardTargetData_Component
				ItemCollection={ZabbixHostInfo.items}
				Title={_itemTarget.Title}
				Matchers={_itemTarget.ItemCollection}
			/>
		{/each}
	</div>
</section>
