<script lang="ts">
	/*        Component Exports        */
	export let LinkButtonPropsCollection: Array<LinkButtonProps>;
	/*              Types              */
	import type { LinkButtonProps } from '../types';
	/*            Components           */
	import NavigationButtonComponent from './NavButton.svelte';
</script>

<footer id="element">
	<ul id="list">
		{#each LinkButtonPropsCollection as props}
			<NavigationButtonComponent ButtonProps={props} />
		{/each}
	</ul>
</footer>

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
			var(--component-background-color-1) var(--start-percent),
			var(--component-background-color-0) var(--middle-percent),
			var(--component-background-color-1) var(--end-percent)
		);
		font-size: var(--nav-font-size);
		font-weight: var(--nav-font-weight);
		text-shadow: var(--nav-text-shadow);
		box-shadow: var(--zero) var(--zero) var(--pixel) var(--box-shadow-color);
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		left: -2vw;
		bottom: var(--zero);
		width: 104%;
		height: 12vh;
		filter: var(--bar-shadow-filter);
	}
	#list {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: var(--end-percent);
		height: var(--end-percent);
		list-style: none;
	}
	@media (max-width: 600px) {
		#element {
			height: 8vh;
		}
	}
</style>
