<script lang="ts">
	/*        Component Exports        */
	export let LinkButtonPropertiesCollection: Array<LinkButtonPropertiesType>;

	/*              Types              */
	import type { LinkButtonPropertiesType } from '../../types';

	/*         Svelte Components       */
	import NavigationButton_Component from '../../components/Layout/NavButton.svelte';
</script>

<footer class="flex__fixed__container">
	<ul class="base__style__formatting navigation__link__list">
		{#each LinkButtonPropertiesCollection as _properties}
			<NavigationButton_Component LinkButtonProperties={_properties} />
		{/each}
	</ul>
</footer>
