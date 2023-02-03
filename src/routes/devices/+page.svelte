<script lang="ts">
	let ZabbixHostInfoCollection: Array<IZabbixHostInfo> = [];
	import type { IZabbixHostInfo } from '../../types/$interfaces';
	import HostCard_Component from '../../components/HostCard/HostCard.svelte';
	import Loading_Component from '../../components/Loading.svelte';
	import { FetchHosts } from '../../functions/api';

	function LoadHostsFromApi(): void {
		FetchHosts(null, null)
			.then((response) => {
				ZabbixHostInfoCollection = response.data.result;
				console.log(ZabbixHostInfoCollection[0]);
			})
			.catch((error) => console.log(error));
	}

	LoadHostsFromApi();
</script>

<section id="page" class="all__center page__margin__bottom">
	{#if ZabbixHostInfoCollection.length === 0}
		<Loading_Component />
	{:else}
		<div id="dashboard-stuff" class="all__center">
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
	}
	#dashboard-stuff {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
