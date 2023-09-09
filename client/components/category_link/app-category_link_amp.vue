<template>
	<div class="categories">
		<div class="categories__container">
			<NuxtLink
				no-prefetch
				:to="`${config.AMP_PREFIX}${item.permalink}`"
				:class="item.class"
				v-for="(item, index) in currentData()"
				:key="index"
				>{{ item.title }}
			</NuxtLink>
		</div>
	</div>
</template>

<script>
import translate from '~/mixins/translate'
export default {
	name: 'app-category_link_amp',
	props: {
		value: {
			type: Array,
			default: []
		}
	},
	mixins: [translate],
	data() {
		return {}
	},
	methods: {
		currentData() {
			const items = []
			this.value.forEach((element, index) => {
				const item = element
				if (this.$route.path === this.config.AMP_PREFIX) {
					item.class =
						index === 0 ? 'categories__link is-active' : 'categories__link'
				} else {
					if (this.config.AMP_PREFIX + item.permalink === this.$route.path)
						item.class = 'categories__link is-active'
					else item.class = 'categories__link'
				}
				items.push(item)
			})
			return items
		}
	}
}
</script>
