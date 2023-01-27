<script lang="ts">
	import type { ZabbixHost } from '../types';
	import { FetchHosts } from '../methods/api';
	import { getPingStatus } from '../methods/hostFormat';

	let ZabbixHostInfoCollection: Array<ZabbixHost> = [];
	let OnlineAndOfflineHosts: Array<boolean> = [];

	function LoadHostsFromApi(): void {
		FetchHosts()
			.then((response) => {
				ZabbixHostInfoCollection = response.data.result;
				console.log(ZabbixHostInfoCollection);
			})
			.catch((error) => console.log(error));
	}

	function tryFillOnlineAndOfflineHosts(): void {
		console.log('tryFillOnlineAndOfflineHosts');
		try {
			ZabbixHostInfoCollection.forEach((host) => {
				OnlineAndOfflineHosts.push(getPingStatus(host) === 'Online' ? true : false);
			});
			console.log(OnlineAndOfflineHosts);
		} catch (error) {
			console.log(error);
		}
	}
	let timeout = () =>
		setTimeout(() => {
			if (ZabbixHostInfoCollection.length > 0) {
				tryFillOnlineAndOfflineHosts();
			} else timeout();
		}, 5000);
	LoadHostsFromApi();
	timeout();
</script>

<section id="page">
	<h1>{ZabbixHostInfoCollection.length}</h1>
</section>

<style>
	* {
		box-sizing: var(--sizing);
		font-family: var(--primary-font);
	}
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--light-text-color-0);
	}
</style>
