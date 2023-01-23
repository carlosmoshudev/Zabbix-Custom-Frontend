<script lang="ts">
	import type { ZabbixHost } from 'src/types';
	export let host: ZabbixHost;
</script>

<section class="modern-card-host-data card">
	<div class="head">
		<h2>
			{host.name}
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
		<p>Operating system:</p>
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
		width: 45vw;
		height: 100%;
	}
	h2 {
		margin: 0;
		padding: 5px 10px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.head {
		width: 100%;
		font-size: x-small;
		border-bottom: 1px solid var(--light-text-color-0);
		border-radius: 0 0 20px 0;
		text-align: center;
	}

	@media (max-width: 759px) {
		section {
			width: 100%;
		}
	}

	.card {
		position: relative;
		border-radius: 15px;
		box-shadow: rgba(50, 185, 205, 0.25) 0px 50px 100px -20px,
			rgba(255, 255, 255, 0.3) 0px 30px 60px -30px;
	}
	.card::before {
		content: '';
		position: absolute;
		z-index: -1;
		border-radius: inherit;
		left: -1px;
		top: -1px;
		width: calc(100% + 1px * 2);
		height: calc(100% + 1px * 2);
		background-image: linear-gradient(90deg, #4edcb7, #83ea9e, #32b9cd, #32b9cd, #4edcb7);
		background-size: 300% 200%;
		-webkit-animation: spining 3s linear infinite alternate;
		animation: spining 3s linear infinite alternate;
		background-repeat: no-repeat;
	}

	@-webkit-keyframes spining {
		0% {
			background-position: 0% 0%;
		}
		100% {
			background-position: 100% 100%;
		}
	}

	@keyframes spining {
		0% {
			background-position: 0% 0%;
		}
		100% {
			background-position: 100% 100%;
		}
	}
</style>
