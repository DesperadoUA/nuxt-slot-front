<template>
	<div class="casino-detail">
		<div class="container">
			<div class="detail-row">
				<h3 class="detail-row__ttl">{{ translates.DETAILS[config.LANG] }}</h3>
				<div class="detail-row__content">
					<ul class="detail-list">
						<li class="detail-list__item">
							<span class="detail-list__ttl">Name</span>
							<span class="detail-list__value">{{ value.title }}</span>
						</li>
						<li class="detail-list__item">
							<span class="detail-list__ttl">{{
								translates.FREE_SPINS[config.LANG]
							}}</span>
							<span class="detail-list__value">{{
								detailsFilters(value.free_spins)
							}}</span>
						</li>
						<li class="detail-list__item">
							<span class="detail-list__ttl">{{
								translates.PAY_LINES[config.LANG]
							}}</span>
							<span class="detail-list__value">{{ value.number_rows }}</span>
						</li>
						<li class="detail-list__item">
							<span class="detail-list__ttl">Scatters</span>
							<span class="detail-list__value">{{
								detailsFilters(value.scatters)
							}}</span>
						</li>
						<li class="detail-list__item">
							<span class="detail-list__ttl">{{
								translates.BONUS_ROUND[config.LANG]
							}}</span>
							<span class="detail-list__value">{{
								detailsFilters(value.bonus_rounds)
							}}</span>
						</li>
						<li class="detail-list__item">
							<span class="detail-list__ttl">{{
								translates.WILD_SYMBOL[config.LANG]
							}}</span>
							<span class="detail-list__value">{{
								detailsFilters(value.wild_symbol)
							}}</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="detail-row">
				<div class="detail-row__heading" v-if="value.vendors.length !== 0">
					<h4 class="detail-row__ttl">{{ translates.VENDORS[config.LANG] }}</h4>
				</div>
				<div class="detail-row__content" v-if="value.vendors.length !== 0">
					<NuxtLink
						no-prefetch
						:to="`${config.AMP_PREFIX}${item.permalink}`"
						class="detail-item"
						v-for="(item, index) in value.vendors"
						:key="index"
					>
						<img
							class="detail-item__icon"
							width="26"
							height="26"
							:src="item.icon"
						/>
						{{ item.title }}
					</NuxtLink>
				</div>
			</div>
			<div class="detail-row">
				<div class="detail-row__heading" v-if="value.casino.length !== 0">
					<h4 class="detail-row__ttl">{{ translates.CASINO[config.LANG] }}</h4>
				</div>
				<div class="detail-row__content" v-if="value.casino.length !== 0">
					<NuxtLink
						no-prefetch
						:to="`${config.AMP_PREFIX}${item.permalink}`"
						class="detail-item"
						v-for="(item, index) in value.casino"
						:key="index"
					>
						<img
							class="detail-item__icon"
							width="26"
							height="26"
							:src="item.icon"
						/>
						{{ item.title }}
					</NuxtLink>
				</div>
			</div>
			<div class="detail-row">
				<div class="detail-row__heading" v-if="value.type_game.length !== 0">
					<h4 class="detail-row__ttl">
						{{ translates.TYPE_GAME[config.LANG] }}
					</h4>
				</div>
				<div class="detail-row__content" v-if="value.type_game.length !== 0">
					<div
						class="game-type"
						v-for="(item, index) in value.type_game"
						:key="index"
					>
						<amp-img
							class="game-type__icon"
							width="17"
							height="20"
							:src="icons[item]"
						/>
						{{ item }}
					</div>
				</div>
			</div>
			<div class="detail-row">
				<div class="detail-row__heading">
					<h4 class="detail-row__ttl">
						{{ translates.PROFIT_INFORMATION[config.LANG] }}
					</h4>
				</div>
				<div class="detail-row__content">
					<ul class="detail-list">
						<li class="detail-list__item full-width">
							<span class="detail-list__ttl">RTP</span>
							<span class="detail-list__value">{{ value.rtp }}</span>
						</li>
						<li class="detail-list__item full-width">
							<span class="detail-list__ttl">{{
								translates.VOLATILITY[config.LANG]
							}}</span>
							<span class="detail-list__value">{{ value.volatility }}</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="detail-row">
				<div class="detail-row__heading">
					<h4 class="detail-row__ttl">{{ translates.RATE[config.LANG] }}</h4>
				</div>
				<div class="detail-row__content">
					<ul class="detail-list">
						<li class="detail-list__item full-width">
							<span class="detail-list__ttl">{{
								translates.MAX_RATE[config.LANG]
							}}</span>
							<span class="detail-list__value">{{ value.max_bet }}</span>
						</li>
						<li class="detail-list__item full-width">
							<span class="detail-list__ttl">{{
								translates.MIN_RATE[config.LANG]
							}}</span>
							<span class="detail-list__value">{{ value.min_bet }}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import translateMixin from '~/mixins/translate'
export default {
	name: 'app-casino-detail',
	props: {
		value: {
			type: Object
		}
	},
	mixins: [translateMixin],
	data() {
		return {
			icons: {
				Blackjack: '/img/game_types/blackjack.png',
				Baccarat: '/img/game_types/baccarat.png',
				'Live Casino': '/img/game_types/live_casino.png',
				Slots: '/img/game_types/slots.png',
				Poker: '/img/game_types/poker.png',
				Roulette: '/img/game_types/roulette.png'
			}
		}
	},
	methods: {
		detailsFilters(item) {
			return item == 1
				? this.translates.YES[this.config.LANG]
				: this.translates.NO[this.config.LANG]
		}
	}
}
</script>
