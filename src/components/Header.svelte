<script lang="ts">
	/*        Component Exports        */
	export let title: string;

	/*          Image Imports          */
	import trison from '../lib/images/trison.png';
	import customer from '../lib/images/customer.svg';
	import zabbix from '../lib/images/zabbix.svg';
</script>

<header id="element">
	<div id="trison-logo" class="logo">
		<img src={trison} alt="trison" />
	</div>

	<h2 id="title">
		{title}
	</h2>

	<div id="customer-logo" class="logo">
		<img src={customer} alt="customer" />
	</div>

	<div id="zabbix-logo" class="logo">
		<img src={zabbix} alt="zabbix" />
	</div>
</header>

<style lang="css" scoped>
	* {
		margin: var(--zero);
		padding: var(--zero);
		box-sizing: var(--sizing);
		font-family: var(--primary-font);
	}

	#element {
		background: linear-gradient(
			var(--background-vertical-degree),
			var(--component-background-light-color-1) var(--start-percent),
			var(--component-background-light-color-0) var(--middle-percent),
			var(--component-background-light-color-1) var(--end-percent)
		);
		font-size: var(--nav-font-size);
		font-weight: var(--nav-font-weight);
		text-shadow: var(--nav-text-shadow);
		box-shadow: var(--zero) var(--zero) var(--pixel) var(--box-shadow-color);
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		left: -2vw;
		top: var(--zero);
		width: 104%;
		height: 6vh;
		filter: drop-shadow(var(--zero) var(--zero) 0.1rem var(--online-color));
		padding: var(--zero) 4vw;
	}

	.logo img {
		width: 10vw;
	}

	#zabbix-logo {
		width: 5vw;
	}

	#zabbix-logo img {
		width: 100%;
	}

	#title {
		font-size: 1.8vw;
		font-weight: 600;
		color: var(--component-background-color-1);
		letter-spacing: 0.3rem;
	}

	@media (max-width: 600px) {
		#element {
			height: 8vh;
		}
	}
</style>
