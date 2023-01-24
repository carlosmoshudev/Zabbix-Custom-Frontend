<script lang="ts">
	/* Export */
	export let host: ZabbixHost;
	/* Types */
	import type { ZabbixHost } from 'src/types';
	/* Import */
	/* Fields */
	/* Functions */
	/* Run */
</script>

<section id="card">
	<div id="background" />
	<div id="head">
		<h2>
			{host.name}
		</h2>
	</div>
	<div id="host-data">
		<p>
			Ping:
			{#each host.items as item}
				{#if item.name === 'Zabbix agent ping'}
					{#if item.lastvalue === '1'}
						<span class="online">Online</span>
					{:else if item.lastvalue === '0'}
						<span class="offline">Offline</span>
					{/if}
				{/if}
			{/each}
			{#each host.items as item}
				{#if item.name === 'ICMP ping'}
					{#if item.lastvalue === '1'}
						<span class="online">Online</span>
					{:else if item.lastvalue === '0'}
						<span class="offline">Offline</span>
					{/if}
				{/if}
			{/each}
			{#if host.items.filter((item) => item.name === 'Zabbix agent ping').length === 0}
				{#if host.items.filter((item) => item.name === 'ICMP ping').length === 0}
					<span class="unknown">Unknown</span>
				{/if}
			{/if}
		</p>
		<p>
			Operating system:
			{#each host.items as item}
				{#if item.name === 'System description'}
					<span class={item.lastvalue.split(' ')[0]}>{item.lastvalue.split(' ')[0]}</span>
				{/if}
			{/each}
			{#if host.items.filter((item) => item.name === 'System description').length === 0}
				<span class="unknown">Unknown</span>
			{/if}
		</p>
	</div>
</section>

<style lang="css" scoped>
	section {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--light-text-color-0);
		background-image: linear-gradient(
			var(--background-vertical-degree),
			var(--component-background-color-0) 0%,
			var(--component-background-color-1) 30%,
			var(--component-background-color-0) 100%
		);
		border-radius: var(--base-radius);
		padding: 5px;
		margin: 10px;
		width: 45vw;
		height: var(--end-percent);
	}
	h2 {
		margin: var(--zero);
		padding: 5px 10px;
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
	#card {
		position: relative;
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
		opacity: 0.5;
	}
	@media (max-width: 759px) {
		section {
			width: var(--end-percent);
		}
	}
</style>
