<script lang="ts">
	export let host: ZabbixHost;
	import type { ZabbixHost } from '../types';

	function getPingStatus() {
		let pingStatus = 'DOWN';
		for (let item of host.items) {
			if (item.name === 'ICMP ping') {
				if (item.lastvalue === '1') {
					pingStatus = 'OK';
				}
			}
		}
		for (let item of host.items) {
			if (item.name === 'Zabbix agent ping') {
				if (item.lastvalue === '1') {
					pingStatus = 'OK';
				}
			}
		}
		return pingStatus;
	}

	function getCpuUtilization() {
		let cpuUtilization = '0';
		for (let item of host.items) {
			if (item.name === 'CPU utilization') {
				cpuUtilization = Number(item.lastvalue).toFixed(2);
			}
		}
		let style = Number(cpuUtilization) > 80 || Number(cpuUtilization) === 0 ? 'DOWN' : 'OK';
		return {
			usage: cpuUtilization + '%',
			style: style
		};
	}

	function getMemoryUtilization() {
		let memoryUtilization = '0';
		for (let item of host.items) {
			if (item.name === 'Memory utilization') {
				memoryUtilization = Number(item.lastvalue).toFixed(2);
			}
		}
		let style = Number(memoryUtilization) > 80 || Number(memoryUtilization) === 0 ? 'DOWN' : 'OK';
		return {
			usage: memoryUtilization + '%',
			style: style
		};
	}

	function getSystemResources() {
		let cpuCores = '0';
		let memoryGB = '0';
		let systemArchitecture = '0';
		let systemOS = '0';
		let DiskSpace = '0';
		let DiskUsedSpace = '0';

		for (let item of host.items) {
			if (item.name === 'Number of CPUs') {
				cpuCores = item.lastvalue;
			}
			if (item.name === 'Number of cores') {
				cpuCores = item.lastvalue;
			}
			if (item.name === 'Total memory') {
				memoryGB = Math.ceil(Number(item.lastvalue) / 1024 / 1024 / 1024).toString();
			}
			if (item.name === 'Operating system architecture') {
				systemArchitecture = item.lastvalue;
			}
			if (item.name === 'System description') {
				systemOS = item.lastvalue.split(' ')[0];
			}
			if (item.name.toLocaleLowerCase().includes('total space')) {
				DiskSpace = Math.ceil(Number(item.lastvalue) / 1024 / 1024 / 1024).toString();
			}
			if (item.name.toLocaleLowerCase().includes('used space')) {
				DiskUsedSpace = Math.ceil(Number(item.lastvalue) / 1024 / 1024 / 1024).toString();
			}
		}

		return {
			cpuCores: cpuCores,
			memoryGB: memoryGB + ' GB',
			systemArchitecture: systemArchitecture,
			systemOS: systemOS,
			DiskSpace: Number(DiskSpace) - Number(DiskUsedSpace) + ' / ' + DiskSpace + ' GB'
		};
	}

	function getMonitoringStatus() {
		let upTime = '0';
		let bootTime = '0';
		let interrupts = '0';
		let users = '1';
		let process = '0';

		for (let item of host.items) {
			if (item.name.toLocaleLowerCase().includes('uptime')) {
				upTime = item.lastvalue;
			}
			if (item.name === 'System boot time') {
				bootTime = item.lastvalue;
			}
			if (item.name === 'Uptime') {
				bootTime = item.lastvalue;
			}
			if (item.name.toLocaleLowerCase().includes('per second')) {
				interrupts = item.lastvalue;
			}
			if (item.name === 'Number of logged in users') {
				users = item.lastvalue;
			}
			if (item.name === 'Number of processes') {
				process = item.lastvalue;
			}
		}

		return {
			upTime: upTime + ' sec',
			bootTime: bootTime + ' sec',
			interrupts: interrupts.split('.')[0],
			users: users,
			process: process
		};
	}

	function refreshPage() {
		window.location.reload();
	}

	const HostHealthInfo = {
		ping: getPingStatus(),
		ip: host.interfaces[0].ip,
		cpu: getCpuUtilization(),
		memory: getMemoryUtilization(),
		system: getSystemResources(),
		monitoring: getMonitoringStatus()
	};
</script>

<section>
	<div id="head">
		{host.name}
		<div id="close" on:click={refreshPage} on:keydown={refreshPage}>X</div>
	</div>
	<div id="panels">
		<div id="left-top" class={HostHealthInfo.ping}>
			<p>Ping Status:</p>
			<span>
				{HostHealthInfo.ping} - {HostHealthInfo.ip}
			</span>
		</div>
		<div id="left-bottom">
			<div class="subletf {HostHealthInfo.cpu.style}">
				<p>CPU Usage:</p>
				<span>
					{HostHealthInfo.cpu.usage}
				</span>
			</div>
			<div class="subright {HostHealthInfo.memory.style}">
				<p>Memory Usage:</p>
				<span>
					{HostHealthInfo.memory.usage}
				</span>
			</div>
		</div>
		<div id="right-top" class="info">
			<p>CPU Cores: <span>{HostHealthInfo.system.cpuCores}</span></p>
			<p>Memory: <span>{HostHealthInfo.system.memoryGB}</span></p>
			<p>System Architecture: <span>{HostHealthInfo.system.systemArchitecture}</span></p>
			<p>System OS: <span>{HostHealthInfo.system.systemOS}</span></p>
			<p>Disk Space: <span>{HostHealthInfo.system.DiskSpace}</span></p>
		</div>
		<div id="right-bottom" class="info">
			<p>Link Uptime: <span>{HostHealthInfo.monitoring.upTime}</span></p>
			<p>Boot Time: <span>{HostHealthInfo.monitoring.bootTime}</span></p>
			<p>Interrupts per second: <span>{HostHealthInfo.monitoring.interrupts}</span></p>
			<p>Users logged in: <span>{HostHealthInfo.monitoring.users}</span></p>
			<p>Number of Processes: <span>{HostHealthInfo.monitoring.process}</span></p>
		</div>
	</div>
</section>

<style>
	* {
		box-sizing: border-box;
		font-family: var(--primary-font);
	}
	section {
		position: sticky;
		width: 100%;
		height: 85%;
		margin-top: 5vh;
		margin-bottom: 20vh;
		padding: 20px;
		background: linear-gradient(
			var(--background-vertical-degree),
			var(--component-background-color-1) var(--start-percent),
			var(--component-background-color-0) var(--middle-percent),
			var(--component-background-color-1) var(--end-percent)
		);
		text-shadow: 0 0 0.5rem var(--component-background-light-color-1);
	}
	#head {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 0;
		padding: 0 0 0 50vh;
		font-size: large;
		text-align: center;
		text-decoration: underline;
	}
	#close {
		width: 30px;
		height: 30px;
		border-radius: 20%;
		background-color: var(--component-background-light-color-0);
		color: var(--component-background-color-1);
		font-size: 1.2rem;
		font-weight: 600;
		text-align: center;
		padding: 5px;
		border: 1px solid var(--component-background-color-1);
		filter: drop-shadow(0 0 0.5rem var(--component-background-light-color-1));
	}
	#panels {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-template-areas:
			'left-top right-top'
			'left-bottom right-bottom';
	}
	div {
		border-radius: 1px;
		padding: 30px 1px;
		margin: 5px;
	}
	div > p {
		font-size: 1.2rem;
		font-weight: 600;
		padding: var(--zero);
		margin: var(--zero);
		text-shadow: 0 0 0.5rem var(--component-background-light-color-1);
	}
	div > span {
		font-size: 1.5rem;
		font-weight: 600;
		text-shadow: 0 0 0.5rem var(--component-background-light-color-1);
	}
	div > div {
		padding: var(--zero);
		margin: var(--zero);
	}
	#left-top {
		grid-area: left-top;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 30vh;
		margin: 1px;
	}

	#left-bottom {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: 'subletf subright';
		grid-area: left-bottom;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 30vh;
		margin: 1px;
	}
	#left-bottom > div {
		display: flex;
		flex-direction: column;
		height: 30vh;
		margin: 1px;
	}

	#right-top {
		display: flex;
		grid-area: right-top;
		margin: 10px;
		flex-direction: column;
		justify-content: center;
		padding-left: 35px;
		height: 30vh;
		margin: 1px;
	}

	#right-bottom {
		display: flex;
		grid-area: right-bottom;
		margin: 10px;
		flex-direction: column;
		justify-content: center;
		padding-left: 35px;
		height: 30vh;
		margin: 1px;
	}

	#right-bottom > p > span,
	#right-top > p > span {
		margin-left: 10px;
	}

	.subletf {
		grid-area: subletf;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 1rem;
		width: 100%;
		height: 100%;
		margin: 5px;
	}

	.subright {
		grid-area: subright;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 1rem;
		width: 100%;
		height: 100%;
		margin: 5px;
	}

	.info {
		background: linear-gradient(
			to left,
			var(--first-set-light-color-4) var(--second-third-percent),
			var(--first-set-color-4) var(--high-percent),
			var(--first-set-dark-color-4) var(--end-percent)
		);
		background-size: var(--background-size);
		font-size: 1.2rem;
		font-weight: 600;
		padding-top: var(--zero);
		text-shadow: 0 0 0.5rem var(--component-background-light-color-1);
	}
</style>
