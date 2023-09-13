<template>
	<section class="section-heading">
		<div class="section-heading__container container">
			<h2 class="section-heading__ttl">{{ value.title }}</h2>
			<NuxtLink
				v-if="value.permalink !== ''"
				:to="`${config.AMP_PREFIX}${value.permalink}`"
				class="section-heading__link"
				>{{ value.title_permalink }}
			</NuxtLink>
		</div>
	</section>
</template>

<script>
import translate from '~/mixins/translate'
export default {
	name: 'app_section_heading_amp',
	mixins: [translate],
	props: {
		value: {
			type: Object,
			default: {
				title: '',
				permalink: '',
				title_permalink: ''
			}
		}
	}
}
</script>
