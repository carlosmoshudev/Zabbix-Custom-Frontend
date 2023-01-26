<script lang="ts">
	/*        Component Exports        */
	export let ButtonProps: LinkButtonProps;
	/*              Types              */
	import type { LinkButtonProps } from '../types';
</script>

<li id="element">
	<a href={ButtonProps.link} id="link">
		<i class={ButtonProps.icon} /><span id="text">{ButtonProps.text}</span>
	</a>
</li>

<style lang="css" scoped>
	* {
		margin: var(--zero);
		padding: var(--zero);
		box-sizing: var(--sizing);
		font-family: var(--primary-font);
	}
	#element {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: var(--end-percent);
		height: var(--end-percent);
		border-right: var(--pixel) dashed #ccc6;
		border-left: var(--pixel) dashed #ccc6;
		opacity: 0.8;
	}
	#element:hover {
		opacity: 1;
	}
	#link {
		text-decoration: none;
		font-size: var(--font-size);
		animation: ligth-text-blinking var(--large-animation-time) ease infinite;
	}
	i {
		margin: 0 1vw;
		text-align: center;
		vertical-align: bottom;
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
