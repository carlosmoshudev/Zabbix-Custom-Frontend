<script lang="ts">
	import type { ZabbixHost } from 'src/types';
	export let host: ZabbixHost;
</script>

<section class="modern-card-host-data">
	<div class="head">
		<h2>
			{host.name}
			<h2 />
		</h2>
	</div>
	<div class="host-data">
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
	</div>
</section>

<style>
	section {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--light-text-color-0);
		background-image: linear-gradient(to right, #1e3c72, #2a5298);
		border-radius: 15px;
		padding: 5px;
		margin: 10px;
		width: 400px;
		height: 200px;
	}

	.head {
		width: 100%;
		font-size: x-small;
		border-bottom: 1px solid var(--light-text-color-0);
		border-radius: 0 0 20px 0;
		text-align: center;
	}

	@media (max-width: 600px) {
		section {
			width: 100%;
		}
	}
</style>
