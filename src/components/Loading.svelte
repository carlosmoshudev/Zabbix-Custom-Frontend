<h1 id="title">Loading hosts... Please wait</h1>
<div id="loading_animation" />

<style lang="css" scoped>
	* {
		box-sizing: var(--sizing);
		font-family: var(--primary-font);
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	#title {
		color: var(--light-text-color-0);
	}
	#loading_animation {
		width: 60px;
		height: 60px;
		border: 10px solid #c5e3ff;
		border-top: 10px solid #67deee;
		border-radius: 50%;
		box-shadow: 0 0 5px rgb(169, 239, 248);
		animation: loading-spinner 5s linear infinite;
		opacity: 0.7;
	}
</style>
