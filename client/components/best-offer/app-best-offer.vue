<template>
	<section class="best-offer">
		<div class="container">
			<h2 class="best-offer__ttl">{{ translates.BEST_OFFER[config.LANG] }}</h2>

			<div class="best-offer__container-slider">
				<div class="best-offer__list">
					<NuxtLink
						no-prefetch
						:to="item.permalink"
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
	name: 'app_intro',
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

<style lang="scss">
.best-offer {
	--offer-gutter: 14px;
	--offer-width: 270px;
	margin-bottom: 27px;
	color: var(--theme-cr-txt-alt);

	@media (min-width: 768px) {
		--offer-width: 50%;
	}

	@media (min-width: 992px) {
		--offer-width: 25%;
		margin-bottom: 50px;
	}
}

.best-offer__ttl {
	font-size: 28px;
	line-height: 1.358;
	margin-bottom: 22px;
	text-align: center;
}

.best-offer__list {
	display: flex;
	margin-left: calc(var(--offer-gutter) / -2);
	margin-right: calc(var(--offer-gutter) / -2);

	@media (max-width: 767px) {
		overflow-x: scroll;
		-webkit-overflow-scrolling: touch;
	}

	@media (min-width: 768px) and (max-width: 991px) {
		flex-wrap: wrap;
	}

	.offer-item {
		width: calc(var(--offer-width) - var(--offer-gutter));
		flex-basis: calc(var(--offer-width) - var(--offer-gutter));
		margin-left: calc(var(--offer-gutter) / 2);
		margin-right: calc(var(--offer-gutter) / 2);
		flex-shrink: 0;
		margin-bottom: var(--offer-gutter);
	}
}

.offer-item {
	color: currentColor;
	text-decoration: none;
	display: flex;
	align-items: center;
	border-radius: 14px;
	background: rgba(#000, 0.2);
	backdrop-filter: blur(20px);
	max-width: var(--offer-width);
	padding: 17px 5px 18px 9px;

	@media (min-width: 992px) {
		&:hover {
			background: rgba(#000, 0.4);
		}
	}

	.circle-rating {
		margin-right: 10px;
		margin-bottom: 0;
	}
}

.offer-item__content {
	font-size: 12px;
	line-height: 1.333;

	p {
		margin-bottom: 0;
	}
}

.offer-item__ttl {
	font-weight: 700;
	font-size: 14px;
	line-height: 19px;
	margin-bottom: 7px;
}
</style>
