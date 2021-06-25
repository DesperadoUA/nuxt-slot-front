<template>
<div class="casino-detail">
    <div class="container">
        <div class="detail-row" v-if="value.details.length !== 0">
            <h3 class="detail-row__ttl">{{details}}</h3>
            <div class="detail-row__content">
                <ul class="detail-list">
                    <li class="detail-list__item" v-for="(item, index) in value.details" :key="index">
                        <span class="detail-list__ttl">{{ item.value_1 }}</span>
                        <span class="detail-list__value">{{ item.value_2 }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="detail-row">
            <h3 class="detail-row__ttl">{{gameOffers}}</h3>

            <div class="detail-row__heading" v-if="value.type_games.length !== 0">
                <h4 class="detail-row__sub-ttl">{{typeGames}}</h4>
            </div>

            <div class="detail-row__content" v-if="value.type_games.length !== 0">
                <div class="game-type" v-for="(item, index) in value.type_games" :key="index">
                    <img class="game-type__icon" width="17" height="20" :src="icons[item]"/>
                    {{ item }}
                </div>
            </div>

            <div class="detail-row__heading" v-if="value.vendors.length !== 0">
                <h4 class="detail-row__sub-ttl">{{vendors}}</h4>
            </div>

            <div class="detail-row__content" v-if="value.vendors.length !== 0">
                <NuxtLink no-prefetch
                          :to="item.permalink"
                          class="detail-item"
                          v-for="(item, index) in value.vendors" :key="index">
                    <img class="detail-item__icon" width="26" height="26" :src="item.icon"/>
                    {{ item.title }}
                </NuxtLink>
            </div>
        </div>

        <div class="detail-row" v-if="value.payments.length !== 0">
            <h3 class="detail-row__ttl">{{payments}}</h3>

            <div class="detail-row__heading">
                <h4 class="detail-row__sub-ttl">{{paymentOptions}}</h4>
            </div>

            <div class="detail-row__content">
                <NuxtLink no-prefetch
                          :to="item.permalink"
                          v-for="(item, index) in value.payments" :key="index"
                          class="detail-item">{{ item.title }}
                </NuxtLink>
            </div>
        </div>

        <div class="detail-row">
            <div class="detail-row__heading">
                <h4 class="detail-row__sub-ttl">{{deposit}}</h4>
            </div>

            <div class="detail-row__content">
                <ul class="detail-list">
                    <li class="detail-list__item full-width">
                        <span class="detail-list__ttl">{{minDeposit}}:</span>
                        <span class="detail-list__value">{{ value.min_deposit }}</span>
                    </li>
                    <li class="detail-list__item full-width">
                        <span class="detail-list__ttl">{{minPayout}}:</span>
                        <span class="detail-list__value">{{ value.min_payout }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate'
    export default {
        name: "app-casino-detail",
        props: {
            value: {
                type: Object
            }
        },
        data(){
            return {
                icons: {
                    'Blackjack': '/img/game_types/blackjack.png',
                    'Baccarat': '/img/game_types/baccarat.png',
                    'Live Casino': '/img/game_types/live_casino.png',
                    'Slots': '/img/game_types/slots.png',
                    'Poker': '/img/game_types/poker.png',
                    'Roulette': '/img/game_types/roulette.png'
                },
                details: '',
                gameOffers: '',
                typeGames: '',
                vendors: '',
                payments: '',
                paymentOptions: '',
                deposit: '',
                minDeposit: '',
                minPayout: ''
            }
        },
        mounted() {
            this.details = TRANSLATE.DETAILS.uk
            this.gameOffers = TRANSLATE.GAME_OFFERS.uk
            this.typeGames = TRANSLATE.TYPE_GAMES.uk
            this.vendors = TRANSLATE.VENDORS.uk
            this.payments = TRANSLATE.PAYMENTS.uk
            this.paymentOptions = TRANSLATE.PAYMENTS_OPTIONS.uk
            this.deposit = TRANSLATE.DEPOSIT.uk
            this.minDeposit = TRANSLATE.MIN_DEPOSIT.uk
            this.minPayout = TRANSLATE.MIN_PAYOUT.uk
        }
    }
</script>

<style lang="scss">
</style>
