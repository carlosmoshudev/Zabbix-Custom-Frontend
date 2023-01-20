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
			<li class="link-li">
				<a href={button.href}>
					<i class={button.icon} />{button.text}
				</a>
			</li>
		{/each}
			<li class="power_menu">
				<!-- reboot and power off -->
				<div class="power-btn">
					<a href="/power">
						<i class="fas fa-power-off" />
					</a>
				</div>
				<div class="reboot-btn">
					<a href="/reboot">
						<i class="fas fa-sync-alt" />
					</a>
				</div>
			</li>
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
		filter: drop-shadow(0 0 0.2rem crimson); 
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
	.link-li:hover {
		opacity: 1;
	}

	.power_menu {
		display: flex;
		flex-direction: row;
		justify-content: safe center;
		align-items: center;
		width: 70%;
		height: 100%;
	}

	.power-btn, .reboot-btn {
		border-radius: 20%;
		height: 7vh;
		margin: 0 1vw;
	}
	.power-btn {
		width: 7vh;
		margin: 0;
		background-image: linear-gradient(
			to right top,
			var(--component-background-color-0) 0%,
			var(--component-background-color-1) 15%,
			var(--offline-color) 85%,
			var(--light-text-color-0) 100%
		);
	}
	.reboot-btn {
		width: 7vh;
		background-image: linear-gradient(
			to right top,
			var(--component-background-color-0) 0%,
			var(--component-background-color-1) 15%,
			var(--unknown-color) 85%,
			var(--light-text-color-0) 100%
		);
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
