<script lang="ts">
	import type { ZabbixHost } from 'src/types';

	export let hosts: Array<ZabbixHost> = [];

	function host_has_this_item(host: ZabbixHost, item_name: string): boolean {
		let has_item = false;
		host.items.forEach((item) => {
			if (item.name === item_name) {
				has_item = true;
			}
		});
		return has_item;
	}
</script>

<section>
	<table>
		<tbody>
			{#each hosts as host}
				<tr>
					<td>{host.name}</td>
					{#each host.items as item}
						{#if item.name === 'Zabbix agent ping'}
							<td class={item.lastvalue === '1' ? 'online' : 'offline'}>
								{item.lastvalue === '1' ? 'Online' : 'Offline'}
							</td>
						{/if}
					{/each}
					{#each host.items as item}
						{#if item.name === 'ICMP ping'}
							<td class={item.lastvalue === '1' ? 'online' : 'offline'}>
								{item.lastvalue === '1' ? 'Online' : 'Offline'}
							</td>
						{/if}
					{/each}
					{#if !host_has_this_item(host, 'ICMP ping') && !host_has_this_item(host, 'Zabbix agent ping')}
						<td class="unknown">Unknown</td>
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style>
	table {
		border-collapse: collapse;
		width: 100%;
		margin-bottom: 20vh;
	}

	td {
		text-align: left;
		color: var(--light-text-color-0);
		text-align: left;
		border-bottom: 1px solid var(--light-text-color-0);
		padding: 0.3rem 5rem 0.3rem 0.3rem;
	}

	.online {
		color: var(--online-color);
	}
	.online::before {
		content: '▲ ';
	}
	.offline {
		color: var(--offline-color);
	}
	.offline::before {
		content: '▼ ';
	}

	.unknown {
		color: var(--unknown-color);
	}
	.unknown::before {
		content: '⚠ ';
	}

</style>
