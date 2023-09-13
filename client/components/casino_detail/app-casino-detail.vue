<template>
	<div class="casino-detail">
		<div class="container">
			<div class="detail-row" v-if="value.details.length !== 0">
				<div class="detail-row__ttl">{{ translates.DETAILS[config.LANG] }}</div>
				<div class="detail-row__content">
					<ul class="detail-list">
						<li
							class="detail-list__item"
							v-for="(item, index) in value.details"
							:key="index"
						>
							<span class="detail-list__ttl">{{ item.value_1 }}</span>
							<span class="detail-list__value">{{ item.value_2 }}</span>
						</li>
					</ul>
				</div>
			</div>

			<div class="detail-row">
				<div class="detail-row__ttl">
					{{ translates.GAME_OFFERS[config.LANG] }}
				</div>

				<div class="detail-row__heading" v-if="value.type_games.length !== 0">
					<div class="detail-row__sub-ttl">
						{{ translates.TYPE_GAMES[config.LANG] }}
					</div>
				</div>

				<div class="detail-row__content" v-if="value.type_games.length !== 0">
					<div
						class="game-type"
						v-for="(item, index) in value.type_games"
						:key="index"
					>
						<img
							class="game-type__icon"
							width="17"
							height="20"
							:src="icons[item]"
						/>
						{{ item }}
					</div>
				</div>

				<div class="detail-row__heading" v-if="value.vendors.length !== 0">
					<div class="detail-row__sub-ttl">
						{{ translates.VENDORS[config.LANG] }}
					</div>
				</div>

				<div class="detail-row__content" v-if="value.vendors.length !== 0">
					<NuxtLink
						no-prefetch
						:to="item.permalink"
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

			<div class="detail-row" v-if="value.payments.length !== 0">
				<div class="detail-row__ttl">
					{{ translates.PAYMENTS[config.LANG] }}
				</div>

				<div class="detail-row__heading">
					<div class="detail-row__sub-ttl">
						{{ translates.PAYMENTS_OPTIONS[config.LANG] }}
					</div>
				</div>

				<div class="detail-row__content">
					<NuxtLink
						no-prefetch
						:to="item.permalink"
						v-for="(item, index) in value.payments"
						:key="index"
						class="detail-item"
						>{{ item.title }}
					</NuxtLink>
				</div>
			</div>

			<div class="detail-row">
				<div class="detail-row__heading">
					<div class="detail-row__sub-ttl">
						{{ translates.DEPOSIT[config.LANG] }}
					</div>
				</div>

				<div class="detail-row__content">
					<ul class="detail-list">
						<li class="detail-list__item full-width">
							<span class="detail-list__ttl"
								>{{ translates.MIN_DEPOSIT[config.LANG] }}:</span
							>
							<span class="detail-list__value">{{ value.min_deposit }}</span>
						</li>
						<li class="detail-list__item full-width">
							<span class="detail-list__ttl"
								>{{ translates.MIN_PAYOUT[config.LANG] }}:</span
							>
							<span class="detail-list__value">{{ value.min_payout }}</span>
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
	}
}
</script>

<style lang="scss"></style>
