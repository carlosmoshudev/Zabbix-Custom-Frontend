<script lang="ts">
	/*        Component Exports        */
	export let HostInfo: IZabbixHostInfo;

	/*            Interfaces           */
	import type { IZabbixHostInfo } from '../zabbix_interfaces';

	/*              Types              */
	import type { HostHealthInfoType } from '../types';

	/*            Functions            */
	import { Format } from '../methods/hostFormat';

	/*             Events              */
	function refreshPage() {
		window.location.reload();
	}

	/*            Properties           */
	let hostHealthInfo: HostHealthInfoType = Format(HostInfo);
</script>

<section>
	<div id="head">
		{HostInfo.name}
		<div id="close" on:click={refreshPage} on:keydown={refreshPage}>X</div>
	</div>
	<div id="panels">
		<div id="left-top" class={hostHealthInfo.Ping}>
			<p>Ping Status:</p>
			<span>
				{hostHealthInfo.Ping} - {hostHealthInfo.IPAddress}
			</span>
		</div>
		<div id="left-bottom">
			<div class="subletf {hostHealthInfo.CPU.CSS}">
				<p>CPU Usage:</p>
				<div class="progress-bar" style="--progress: {hostHealthInfo.CPU.Usage}">
					{hostHealthInfo.CPU.Usage}
				</div>
			</div>
			<div class="subright {hostHealthInfo.PhysicalMemory.CSS}">
				<p>Memory Usage:</p>
				<div class="progress-bar">
					<div class="progress" style="--progress: {hostHealthInfo.PhysicalMemory.Usage}">
						{hostHealthInfo.PhysicalMemory.Usage}
					</div>
				</div>
			</div>
		</div>
		<div id="right-top" class="info">
			<p>
				CPU Cores:
				<span>{hostHealthInfo.system.cpuCores}</span>
			</p>
			<p>
				Memory:
				<span>{hostHealthInfo.system.memoryGB}</span>
			</p>
			<p>
				System Architecture:
				<span>{hostHealthInfo.system.systemArchitecture}</span>
			</p>
			<p>
				System OS:
				<span>{hostHealthInfo.system.systemOS}</span>
			</p>
			<p>
				Disk Space:
				<span>{hostHealthInfo.system.DiskSpace}</span>
			</p>
		</div>
		<div id="right-bottom" class="info">
			<p>
				Link Uptime:
				<span> {hostHealthInfo.monitoring.upTime}</span>
			</p>
			<p>
				Boot Time:
				<span>{hostHealthInfo.monitoring.bootTime}</span>
			</p>
			<p>
				Interrupts per second:
				<span>{hostHealthInfo.monitoring.interrupts}</span>
			</p>
			<p>
				Users logged in:
				<span>{hostHealthInfo.monitoring.users}</span>
			</p>
			<p>
				Number of Processes:
				<span>{hostHealthInfo.monitoring.process}</span>
			</p>
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
		text-shadow: 0 0 0.5rem var(--first-set-color-5);
	}
	div > span {
		font-size: 1.5rem;
		font-weight: 600;
		text-shadow: 0 0 0.5rem var(--first-set-color-5);
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
		width: 99.6%;
		margin: 1px;
	}
	#left-bottom > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: space-between;
		height: 30vh;
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
	}

	.info {
		background: var(--first-set-color-4);
		border: 1px solid black;
		background-blend-mode: saturation;
		background-size: var(--background-size);
		font-size: 1.2rem;
		font-weight: 600;
		padding-top: var(--zero);
		text-shadow: 0 0 0.5rem var(--first-set-color-5);
	}
</style>
