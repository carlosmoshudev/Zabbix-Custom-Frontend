<script lang="ts">
	/*        Component Exports        */
	export let ZabbixHostInfo: IZabbixHostInfo;

	/*            Interfaces           */
	import type { IZabbixHostInfo } from '../../zabbix_interfaces';

	/*         Svelte Components       */
	import HostCardPingData_Component from './HostCardPingData.svelte';
	import HostCardTargetData_Component from './HostCardTargetData.svelte';

	/*        Component Constants      */
	const DATA_TARGETS = [{ Title: 'OS', ItemCollection: ['System description'] }];
</script>

<section id="card">
	<div id="background" />
	<div id="head">
		<h2 id="name">
			{ZabbixHostInfo.name}
		</h2>
	</div>
	<div id="host-data">
		<HostCardPingData_Component ItemCollection={ZabbixHostInfo.items} />
		{#each DATA_TARGETS as _target}
			<HostCardTargetData_Component
				ItemCollection={ZabbixHostInfo.items}
				Title={_target.Title}
				Matchers={_target.ItemCollection}
			/>
		{/each}
	</div>
</section>

<style lang="css" scoped>
	* {
		box-sizing: var(--sizing);
		font-family: var(--primary-font);
	}
	#card {
		position: relative;
		width: 45vw;
		height: var(--end-percent);
		background-image: linear-gradient(
			var(--background-vertical-degree),
			var(--component-background-color-0) var(--start-percent),
			var(--component-background-color-1) var(--first-third-percent),
			var(--component-background-color-0) var(--end-percent)
		);
		padding: 5px 10px;
		margin: 10px;
		border-radius: var(--base-radius);
		box-shadow: 0 1px 24px rgba(50, 185, 205, 0.25), 1px 1px 0 1px rgba(255, 255, 255, 0.3),
			-1px -1px 0 1px rgba(255, 255, 255, 0.5);
	}
	#card::before {
		content: '';
		position: absolute;
		z-index: -1;
		border-radius: inherit;
		left: -1px;
		top: -1px;
		width: calc(100% + 1px * 2);
		height: calc(100% + 1px * 2);
		background-image: linear-gradient(90deg, #4edcb7, #83ea9e, #32b9cd, #32b9cd, #4edcb7);
		-webkit-animation: card-border-spinning var(--small-animation-time) linear infinite alternate;
		animation: card-border-spinning var(--small-animation-time) linear infinite alternate;
		background-repeat: no-repeat;
		opacity: 0.1;
	}
	#name {
		margin: var(--zero);
		padding: 5px 5px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	#head {
		width: var(--end-percent);
		font-size: x-small;
		border-bottom: var(--pixel) solid var(--light-text-color-0);
		border-radius: var(--zero) var(--zero) var(--base-radius) var(--zero);
		text-align: center;
	}
	#host-data {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 759px) {
		#card {
			width: var(--end-percent);
		}
	}
</style>
