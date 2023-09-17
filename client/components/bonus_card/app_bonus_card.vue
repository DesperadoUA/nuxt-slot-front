<template>
	<div class="container container1">
		<div class="casino-card">
			<div class="casino-card__logo">
				<img :src="value.thumbnail" :alt="value.title" />
			</div>

			<div class="casino-card__rating">
				<div class="circle-rating">
					<svg viewBox="0 0 36 36" class="circle-rating__chart" :style="value | classRating">
						<path
							class="circle-rating__circle-bg"
							d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
						/>
						<path
							class="circle-rating__circle"
							:stroke-dasharray="value.rating + ', 100'"
							d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
						/>
					</svg>
					<div class="circle-rating__percentage">{{ value.rating }}</div>
				</div>
				<span class="casinos-rating__txt">{{ translates.RATING[config.LANG] }}</span>
			</div>

			<div class="casino-card__txt">
				<span class="casino-card__txt__close" v-if="value.close !== 0">
					{{ translates.BONUS_INACTIVE[config.LANG] }}
				</span>
				<div v-html="value.bonus_self"></div>
			</div>
			<div class="casino-card__cta">
				<button
					type="button"
					class="casino-card__cta btn-tertiary"
					v-if="value.close !== 1"
					@click="refActivate(value)"
				>
					{{ translates.GO_TO[config.LANG] }}
				</button>
				<NuxtLink no-prefetch :to="value.casino_permalink" class="casino_card_link">
					{{ translates.CASINO_REVIEW[config.LANG] }}
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_bonus_card',
	props: {
		value: {
			type: Object,
			default: {}
		},
		bonusInactive: ''
	},
	mixins: [translateMixin],
	data() {
		return {}
	},
	filters: {
		classRating(item) {
			return Helper.classRating(item)
		}
	},
	methods: {
		refActivate(item) {
			Helper.refActivate(item)
		}
	}
}
</script>

<style lang="scss" scoped></style>
