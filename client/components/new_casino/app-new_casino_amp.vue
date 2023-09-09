<template>
	<div class="slots">
		<div class="container">
			<div class="slots__heading">
				<h2 class="slots__ttl">{{ translates.NEW_CASINO[config.LANG] }}</h2>
				<NuxtLink
					no-prefetch
					:to="`${config.AMP_PREFIX}/reviews`"
					class="link-primary"
					>{{ translates.ALL_CASINO[config.LANG] }}</NuxtLink
				>
			</div>

			<div class="slots__container">
				<NuxtLink
					no-prefetch
					:to="`${config.AMP_PREFIX}${item.permalink}`"
					class="slot-item slot-item--gradient"
					v-for="(item, index) in value"
					:key="index"
				>
					<div class="slot-item__rating">
						<div class="circle-rating">
							<svg
								viewBox="0 0 36 36"
								class="circle-rating__chart"
								:style="item | classRating"
							>
								<path
									class="circle-rating__circle-bg"
									d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
								/>
								<path
									class="circle-rating__circle"
									:stroke-dasharray="item.rating + ', 100'"
									d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
								/>
							</svg>
							<amp-img
								class="circle-rating__logo"
								:src="item.icon"
								alt=""
								width="62"
								height="62"
							/>
						</div>
						<span class="slot-item__casino-name">{{ item.title }}</span>
					</div>

					<div class="slot-item__content">
						{{ translates.RATING[config.LANG] }}
						<strong>{{ item.rating }}</strong>
					</div>

					<div class="slot-item__btns">
						<button class="slot-item__btn --blue">
							{{ translates.GO_TO[config.LANG] }}
						</button>
					</div>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_new_casino',
	props: {
		value: {
			type: Array,
			default: []
		}
	},
	mixins: [translateMixin],
	data() {
		return {}
	},
	filters: {
		classRating(item) {
			return Helper.classRating(item)
		}
	}
}
</script>
