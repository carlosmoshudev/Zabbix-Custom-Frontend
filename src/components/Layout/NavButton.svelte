<script lang="ts">
	export let LinkButtonProperties: LinkButtonPropertiesType;
	import type { LinkButtonPropertiesType } from '../../types/$types';
	const li_classes = `
	navigation__link__item 
	hw__100p 
	all__center`;
</script>

<li class={li_classes}>
	<a href={LinkButtonProperties.Link} class="navigation__link">
		<i class={LinkButtonProperties.Icon} />
		<span class="navigation__link__text">{LinkButtonProperties.Text}</span>
	</a>
</li>
