<script lang="ts">
	/*            Properties           */
	let ZabbixHostInfoCollection: Array<IZabbixHostInfo> = [];

	/*            Interfaces           */
	import type { IZabbixHostInfo } from '../../zabbix_interfaces';

	/*         Svelte Components       */
	import HostCard_Component from '../../components/HostCard/HostCard.svelte';
	import Loading_Component from '../../components/Loading.svelte';

	/*            Functions            */
	import { FetchHosts } from '../../functions/api';

	function Load(): void {
		FetchHosts()
			.then((response) => {
				ZabbixHostInfoCollection = response.data.result;
				ZabbixHostInfoCollection = GetOfflineHosts(ZabbixHostInfoCollection);
				console.log(ZabbixHostInfoCollection[0]);
			})
			.catch((error) => console.log(error));
	}
	function GetOfflineHosts(hosts: Array<IZabbixHostInfo>): Array<IZabbixHostInfo> {
		let filteredHosts: Array<IZabbixHostInfo> = [];
		hosts.forEach((host) => {
			host.items.forEach((item) => {
				if (item.name === 'Zabbix agent ping' && item.lastvalue === '0') {
					filteredHosts.push(host);
				} else if (item.name === 'ICMP ping' && item.lastvalue === '0') {
					filteredHosts.push(host);
				}
			});
		});
		return filteredHosts;
	}

	/*            Lifecycle            */
	Load();
</script>

<section id="page" class="center">
	{#if ZabbixHostInfoCollection.length === 0}
		<Loading_Component />
	{:else}
		<div class="center flex__row">
			{#each ZabbixHostInfoCollection as _hostInfo}
				<HostCard_Component ZabbixHostInfo={_hostInfo} />
			{/each}
		</div>
	{/if}
</section>

<style>
	#page {
		display: flex;
		flex-direction: column;
		color: var(--light-text-color-0);
		margin-bottom: 20vh;
	}
</style>
