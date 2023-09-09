<template>
	<div class="container container4">
		<div class="casino-card">
			<div class="casino-card__logo">
				<amp-img
					:src="value.thumbnail"
					:alt="value.title"
					width="284"
					height="162"
				/>
			</div>

			<div class="casino-card__rating">
				<div class="circle-rating">
					<svg
						viewBox="0 0 36 36"
						class="circle-rating__chart"
						:style="value | classRating"
					>
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
				<span class="casinos-rating__txt">{{
					translates.RATING[config.LANG]
				}}</span>
			</div>

			<div class="casino-card-param">
				<div class="casino-card-param__item">
					<span class="casino-card-param__value">{{ value.number_rows }}</span>
					<span class="casino-card-param__txt">{{
						translates.NUMBER_ROWS[config.LANG]
					}}</span>
				</div>

				<div class="casino-card-param__item">
					<span class="casino-card-param__value">{{ value.min_bet }}</span>
					<span class="casino-card-param__txt">{{
						translates.MIN_BET[config.LANG]
					}}</span>
				</div>

				<div class="casino-card-param__item">
					<span class="casino-card-param__value">{{ value.pay_lines }}</span>
					<span class="casino-card-param__txt">{{
						translates.PAY_LINES[config.LANG]
					}}</span>
				</div>

				<div class="casino-card-param__item">
					<span class="casino-card-param__value">{{ value.reels }}</span>
					<span class="casino-card-param__txt">{{
						translates.WHEELS[config.LANG]
					}}</span>
				</div>
			</div>

			<div class="casino-card-bonus">
				<span class="casino-card-bonus__value" style="color: #ffe600;">{{
					value.volatility
				}}</span>
				<div class="casino-card-bonus__wager">
					{{ translates.VOLATILITY[config.LANG] }}
				</div>
			</div>

			<div class="casino-card-bonus">
				<span class="casino-card-bonus__value" style="color: #12d4ff;">{{
					value.rtp
				}}</span>
				<div class="casino-card-bonus__wager">RTP</div>
			</div>
			<div class="casino-card__cta">
				<a class="casino-card__cta btn-tertiary" :href="getRef(value)">
					{{ translates.PLAY[config.LANG] }}
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_slot_card',
	props: {
		value: {
			type: Object,
			default: {}
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
	},
	methods: {
		getRef(item) {
			return Helper.getRef(item)
		}
	}
}
</script>
