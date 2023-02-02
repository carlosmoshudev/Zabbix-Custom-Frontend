<script lang="ts">
	/*        Component Exports        */
	export let ApplicationTitle: string;

	/*          Image Imports          */
	import TrisonLogo from '../../lib/images/trison.png';
	import CustomerLogo from '../../lib/images/customer.svg';
	import ZabbixLogo from '../../lib/images/zabbix.svg';

	/*        Component Constants      */
	const TRISON_CLASS = 'trison__logo header__logo';
	const CUSTOMER_CLASS = 'customer__logo header__logo';
	const ZABBIX_CLASS = 'zabbix__logo header__logo';
</script>

<header class="flex__fixed__container base__style__formatting">
	<div class={TRISON_CLASS}>
		<img src={TrisonLogo} alt={TRISON_CLASS} />
	</div>

	<h2 id="title">{ApplicationTitle}</h2>

	<div class={CUSTOMER_CLASS}>
		<img src={CustomerLogo} alt={CUSTOMER_CLASS} />
	</div>

	<div class={ZABBIX_CLASS}>
		<img src={ZabbixLogo} alt={ZABBIX_CLASS} />
	</div>
</header>

<style lang="css" scoped>
	.zabbix__logo {
		width: 5vw;
	}

	.zabbix__logo img {
		width: 100%;
	}

	#title {
		font-size: 1.8vw;
		font-weight: 600;
		color: var(--component-background-color-1);
		letter-spacing: 0.3rem;
	}
</style>
