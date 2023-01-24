<script lang="ts">
	/* Export */
	export let buttons: Array<LinkButtonProps>;
	/* Types */
	/* Import */
	import type { LinkButtonProps } from '../types';
	/* Fields */
	/* Functions */
	/* Run */
</script>

<section>
	<ul>
		{#each buttons as button}
			<li>
				<a href={button.href}>
					<i class={button.icon} /><span>{button.text}</span>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style lang="css" scoped>
	* {
		margin: var(--zero);
		padding: var(--zero);
		box-sizing: var(--sizing);
		font-family: var(--primary-font);
	}
	section {
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
		filter: drop-shadow(0 2px 0.1rem #a7c957);
	}
	ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: var(--end-percent);
		height: var(--end-percent);
		list-style: none;
	}
	li {
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
	li:hover {
		opacity: 1;
	}

	a {
		text-decoration: none;
		font-size: var(--font-size);
		animation: ligth-text-blinking var(--large-animation-time) ease infinite;
	}
	i {
		margin: 0 1vw;
		text-align: center;
		vertical-align: bottom;
	}

	span {
		margin: 0 1vw;
		text-align: center;
		font-size: 1rem;
		letter-spacing: 0.1rem;
	}

	@media (max-width: 600px) {
		section {
			height: 8vh;
		}
		span {
			display: none;
		}
	}
</style>
