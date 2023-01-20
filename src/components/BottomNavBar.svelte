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
					<i class={button.icon} /><span>{button.text}</span>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: var(--primary-font);
	}
	section {
		background: linear-gradient(
			180deg,
			var(--component-background-color-1) 0%,
			var(--component-background-color-0) 50%,
			var(--component-background-color-1) 100%
		);
		font-size: var(--nav-font-size);
		font-weight: var(--nav-font-weight);
		text-shadow: var(--nav-text-shadow);
		box-shadow: 0 0 1px var(--box-shadow-color);
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		left: -2vw;
		bottom: 0;
		width: 104%;
		height: 12vh;
		filter: drop-shadow(0 2px 0.1rem #a7c957);
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
		border-right: 1px dashed #ccc6;
		border-left: 1px dashed #ccc6;
		opacity: 0.8;
	}
	li:hover {
		opacity: 1;
	}

	a {
		text-decoration: none;
		font-size: 1.2rem;
		animation: rainbow 15s ease infinite;
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
	@keyframes rainbow {
		0% {
			color: var(--light-text-color-0);
		}
		30% {
			color: var(--light-text-color-1);
		}
		50% {
			color: var(--light-text-color-0);
		}
		70% {
			color: var(--light-text-color-1);
		}
		100% {
			color: var(--light-text-color-0);
		}
	}
</style>
