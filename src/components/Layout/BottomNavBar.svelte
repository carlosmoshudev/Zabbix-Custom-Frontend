<script lang="ts">
	export let LinkButtonPropertiesCollection: Array<LinkButtonPropertiesType>;
	import type { LinkButtonPropertiesType } from '../../types';

	import NavigationButton_Component from '../../components/Layout/NavButton.svelte';
</script>

<footer class="flex__fixed__container">
	<ul class="base__style__formatting navigation__link__list hw__100p">
		{#each LinkButtonPropertiesCollection as _properties}
			<NavigationButton_Component LinkButtonProperties={_properties} />
		{/each}
	</ul>
</footer>
