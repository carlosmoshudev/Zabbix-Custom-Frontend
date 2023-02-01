<script lang="ts">
	/*        Component Exports        */
	export let LinkButtonProperties: LinkButtonPropertiesType;

	/*              Types              */
	import type { LinkButtonPropertiesType } from '../../types';
</script>

<li class="navigation__link__item">
	<a href={LinkButtonProperties.Link} id="link">
		<i class={LinkButtonProperties.Icon} />
		<span id="text">{LinkButtonProperties.Text}</span>
	</a>
</li>

<style lang="css" scoped>
	#link {
		text-decoration: none;
		font-size: var(--font-size);
		animation: ligth-text-blinking var(--large-animation-time) ease infinite;
	}

	#text {
		margin: 0 1vw;
		text-align: center;
		font-size: 1rem;
		letter-spacing: 0.1rem;
	}

	@media (max-width: 600px) {
		#text {
			display: none;
		}
	}
</style>
