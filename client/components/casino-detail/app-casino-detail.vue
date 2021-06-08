<template>
<div class="casino-detail">
    <div class="container">
        <div class="detail-row" v-if="value.details.length !== 0">
            <h3 class="detail-row__ttl">Детали</h3>
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
            <h3 class="detail-row__ttl">Предложения игр</h3>

            <div class="detail-row__heading" v-if="value.type_games.length !== 0">
                <h4 class="detail-row__sub-ttl">Типы игр</h4>
            </div>

            <div class="detail-row__content" v-if="value.type_games.length !== 0">
                <div class="game-type" v-for="(item, index) in value.type_games" :key="index">
                    <img class="game-type__icon" width="17" height="20" :src="icons[item]"/>
                    {{ item }}
                </div>
            </div>

            <div class="detail-row__heading" v-if="value.vendors.length !== 0">
                <h4 class="detail-row__sub-ttl">Провайдеры</h4>
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
            <h3 class="detail-row__ttl">Оплата</h3>

            <div class="detail-row__heading">
                <h4 class="detail-row__sub-ttl">Варианты оплаты</h4>
            </div>

            <div class="detail-row__content">
                <NuxtLink no-prefetch
                          no-prefetch
                          :to="item.permalink"
                          v-for="(item, index) in value.payments" :key="index"
                          class="detail-item">{{ item.title }}
                </NuxtLink>
            </div>
        </div>

        <div class="detail-row">
            <div class="detail-row__heading">
                <h4 class="detail-row__sub-ttl">Депозит</h4>
            </div>

            <div class="detail-row__content">
                <ul class="detail-list">
                    <li class="detail-list__item full-width">
                        <span class="detail-list__ttl">Мин. депозит:</span>
                        <span class="detail-list__value">{{ value.min_deposit }}</span>
                    </li>
                    <li class="detail-list__item full-width">
                        <span class="detail-list__ttl">Мин. вывод:</span>
                        <span class="detail-list__value">{{ value.min_payout }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
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
                }
            }
        }
    }
</script>

<style lang="scss">
</style>
