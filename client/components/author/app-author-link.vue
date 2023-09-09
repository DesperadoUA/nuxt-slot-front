<template>
	<div class="root">
		<div class="leftPart">
			{{ text }}: <NuxtLink no-prefetch :to="link">{{ name }}</NuxtLink>
		</div>
		<div class="rightPart">
			{{ translates.PUBLICATION_DATE[config.LANG] }}:
			<span>{{ dataTime }}</span>
		</div>
	</div>
</template>
<script>
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_author_link',
	mixins: [translateMixin],
	props: {
		link: {
			type: String,
			default: ''
		},
		text: {
			type: String,
			default: ''
		},
		dataTime: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: ''
		}
	}
}
</script>
<style scoped>
.root {
	display: flex;
	padding: 15px 0px;
	box-sizing: border-box;
}
.leftPart {
	font-family: var(--base-font-family);
	font-size: 14px;
	font-weight: 600;
	color: var(--theme-cr-txt);
	text-decoration: none;
}
.leftPart a {
	color: var(--table-head);
	text-decoration: none;
}
.rightPart {
	padding-left: 15px;
	font-family: var(--base-font-family);
	font-size: 14px;
	font-weight: 200;
	color: var(--theme-cr-txt);
}
@media (max-width: 768px) {
	.root {
		flex-wrap: wrap;
		width: 100%;
	}
	.leftPart,
	.rightPart {
		width: 100%;
		padding-left: 0px;
	}
}
</style>
