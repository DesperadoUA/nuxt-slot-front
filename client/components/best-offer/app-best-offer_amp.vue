<template>
	<section class="best-offer">
		<div class="container">
			<h2 class="best-offer__ttl">{{ translates.BEST_OFFER[config.LANG] }}</h2>

			<div class="best-offer__container-slider">
				<div class="best-offer__list">
					<NuxtLink
						no-prefetch
						:to="`${config.AMP_PREFIX}${item.permalink}`"
						class="offer-item"
						v-for="(item, index) in value"
						:key="index"
					>
						<div class="circle-rating" :data-fill="item.rating">
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
							<img
								class="circle-rating__logo"
								loading="lazy"
								:src="item.icon"
								:alt="item.title"
							/>
						</div>

						<div class="offer-item__content">
							<h3 class="offer-item__ttl">
								{{ translates.BONUSES_FROM[config.LANG] }}<br />{{ item.title }}
							</h3>
						</div>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_intro_amp',
	props: ['value'],
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
