<script lang="ts">
	export let ZabbixHostInfo: ZabbixHost;

	import type { ZabbixHost } from '../types';
</script>

<section id="card">
	<div id="background" />
	<div id="head">
		<h2 id="name">
			{ZabbixHostInfo.name}
		</h2>
	</div>
	<div id="host-data">
		<p>
			Ping:
			{#each ZabbixHostInfo.items as item}
				{#if item.name === 'Zabbix agent ping'}
					{#if item.lastvalue === '1'}
						<span class="online">Online</span>
					{:else if item.lastvalue === '0'}
						<span class="offline">Offline</span>
					{/if}
				{/if}
			{/each}
			{#each ZabbixHostInfo.items as item}
				{#if item.name === 'ICMP ping'}
					{#if item.lastvalue === '1'}
						<span class="online">Online</span>
					{:else if item.lastvalue === '0'}
						<span class="offline">Offline</span>
					{/if}
				{/if}
			{/each}
			{#if ZabbixHostInfo.items.filter((item) => item.name === 'Zabbix agent ping').length === 0}
				{#if ZabbixHostInfo.items.filter((item) => item.name === 'ICMP ping').length === 0}
					<span class="unknown">Unknown</span>
				{/if}
			{/if}
		</p>
		<p>
			OS:
			{#each ZabbixHostInfo.items as item}
				{#if item.name === 'System description'}
					<span class={item.lastvalue.split(' ')[0]}>{item.lastvalue.split(' ')[0]}</span>
				{/if}
			{/each}
			{#if ZabbixHostInfo.items.filter((item) => item.name === 'System description').length === 0 || ZabbixHostInfo.items.filter((item) => item.name === 'System description')[0].lastvalue === ''}
				<span class="unknown">Unknown</span>
			{/if}
		</p>
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
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 5px 50px;
	}
	@media (max-width: 759px) {
		section {
			width: var(--end-percent);
		}
	}
</style>
