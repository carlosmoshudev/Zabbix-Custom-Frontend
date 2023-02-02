<script lang="ts">
	export let ZabbixHostInfo: IZabbixHostInfo;
	import type { IZabbixHostInfo } from '../../zabbix_interfaces';
	import HostCardPingData_Component from './HostCardPingData.svelte';
	import HostCardTargetData_Component from './HostCardTargetData.svelte';
	import { hostItemTargets } from '../../models/api';
</script>

<section class="base__style__formatting host__card__body">
	<div class="host__card__header"><h2>{ZabbixHostInfo.name}</h2></div>
	<div class="host__card__content">
		<HostCardPingData_Component ItemCollection={ZabbixHostInfo.items} />
		{#each hostItemTargets as __target}
			<HostCardTargetData_Component
				ItemCollection={ZabbixHostInfo.items}
				Title={__target.Title}
				Matchers={__target.ItemCollection}
			/>
		{/each}
	</div>
</section>
