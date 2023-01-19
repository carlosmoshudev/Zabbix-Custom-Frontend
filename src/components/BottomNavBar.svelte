<script lang="ts">
	import type { LinkButtonProps } from '../types';
	export let buttons: Array<LinkButtonProps>;
</script>

<svelte:head>
	<meta name="description" content="bottom-bar" />
</svelte:head>

<section>
	<ul id="nav-buttons">
		{#each buttons as button}
			<li>
				<a href={button.href}>
					<i class={button.icon} />{button.text}
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		background-color: var(--component-background-color);
		color: var(--light-text-color);
		font-size: var(--nav-font-size);
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0 10px var(--box-shadow-color);
		position: fixed;
		left: -4vw;
		bottom: 0;
		width: 104%;
		height: 5vh;
	}
	ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100%;
		list-style: none;
	}
	li {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		border-top: 1px dashed #ccc6;
		border-right: 1px dotted #ccc6;
		border-left: 1px dotted #ccc6;
		opacity: 0.8;
	}

	a {
		text-decoration: none;
		color: #fff;
		font-size: 1.2rem;
	}
	i {
		margin: 0 1vw;
	}
</style>
