<template>
	<section class="casino-slots" v-if="value.length !== 0">
		<div class="container">
			<h2 class="casino-slots__ttl">
				{{ translates.POPULAR_SLOTS[config.LANG] }} в {{ title }}
			</h2>

			<div class="casino-slots__list">
				<NuxtLink
					v-for="(item, index) in value"
					:key="index"
					:to="`${config.AMP_PREFIX}${item.permalink}`"
					class="casino-group-item"
				>
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
							:alt="item.title"
							width="62"
							height="62"
						/>
					</div>

					<div class="casino-group-item__content">
						<div class="casino-group-item__name">{{ item.title }}</div>
						<div class="casino-group-item__rating">
							{{ translates.RATING[config.LANG] }}: <b>{{ item.rating }}</b>
						</div>
						<svg
							class="casino-group-item__arrow"
							width="9"
							height="14"
							viewBox="0 0 9 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 1L7 7L1 13"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</div>
				</NuxtLink>
			</div>
		</div>
	</section>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
export default {
	name: 'app-casino-slots',
	props: {
		value: {
			type: Array,
			default: []
		},
		title: {
			type: String,
			default: ''
		}
	},
	mixins: [translateMixin],
	data() {
		return {
			rating: ''
		}
	},
	filters: {
		rating(item) {
			return Math.trunc(item / 10)
		},
		classRating(item) {
			return Helper.classRating(item)
		}
	}
}
</script>
