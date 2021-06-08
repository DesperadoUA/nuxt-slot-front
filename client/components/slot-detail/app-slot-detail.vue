<template>
<div class="casino-detail">
    <div class="container">
        <div class="detail-row">
            <h3 class="detail-row__ttl">Детали</h3>
            <div class="detail-row__content">
                <ul class="detail-list">
                    <li class="detail-list__item">
                        <span class="detail-list__ttl">Name</span>
                        <span class="detail-list__value">{{ value.title }}</span>
                    </li>
                    <li class="detail-list__item">
                        <span class="detail-list__ttl">Фри спины</span>
                        <span class="detail-list__value">{{ value.free_spins | detailsFilters }}</span>
                    </li>
                    <li class="detail-list__item">
                        <span class="detail-list__ttl">Кол-во линий</span>
                        <span class="detail-list__value">{{ value.number_rows }}</span>
                    </li>
                    <li class="detail-list__item">
                        <span class="detail-list__ttl">Scatters</span>
                        <span class="detail-list__value">{{ value.scatters | detailsFilters }}</span>
                    </li>
                    <li class="detail-list__item">
                        <span class="detail-list__ttl">Бонус раунд</span>
                        <span class="detail-list__value">{{ value.bonus_rounds | detailsFilters }}</span>
                    </li>
                    <li class="detail-list__item">
                        <span class="detail-list__ttl">Дикий символ</span>
                        <span class="detail-list__value">{{ value.wild_symbol | detailsFilters }}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="detail-row">
            <div class="detail-row__heading" v-if="value.vendors.length !== 0">
                <h4 class="detail-row__ttl">Провайдер</h4>
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
        <div class="detail-row">
            <div class="detail-row__heading" v-if="value.casino.length !== 0">
                <h4 class="detail-row__ttl">Казино</h4>
            </div>
            <div class="detail-row__content" v-if="value.casino.length !== 0">
                <NuxtLink no-prefetch
                          :to="item.permalink"
                          class="detail-item"
                          v-for="(item, index) in value.casino" :key="index">
                    <img class="detail-item__icon" width="26" height="26" :src="item.icon"/>
                    {{ item.title }}
                </NuxtLink>
            </div>
        </div>
        <div class="detail-row">
            <div class="detail-row__heading" v-if="value.type_game.length !== 0">
                <h4 class="detail-row__ttl">Тип игры</h4>
            </div>
            <div class="detail-row__content" v-if="value.type_game.length !== 0">
                <div class="game-type" v-for="(item, index) in value.type_game" :key="index">
                    <img class="game-type__icon" width="17" height="20" :src="icons[item]"/>
                    {{ item }}
                </div>
            </div>
        </div>
        <div class="detail-row">
            <div class="detail-row__heading">
                <h4 class="detail-row__ttl">Информация о прибыли</h4>
            </div>
            <div class="detail-row__content">
                <ul class="detail-list">
                    <li class="detail-list__item full-width">
                        <span class="detail-list__ttl">RTP</span>
                        <span class="detail-list__value">{{ value.rtp }}</span>
                    </li>
                    <li class="detail-list__item full-width">
                        <span class="detail-list__ttl">Волатильность</span>
                        <span class="detail-list__value">{{ value.volatility }}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="detail-row">
            <div class="detail-row__heading">
                <h4 class="detail-row__ttl">Ставка</h4>
            </div>
            <div class="detail-row__content">
                <ul class="detail-list">
                    <li class="detail-list__item full-width">
                        <span class="detail-list__ttl">Макс. ставка</span>
                        <span class="detail-list__value">{{ value.max_bet }}</span>
                    </li>
                    <li class="detail-list__item full-width">
                        <span class="detail-list__ttl">Мин. ставка</span>
                        <span class="detail-list__value">{{ value.min_bet }}</span>
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
        },
        filters: {
            detailsFilters(item){
                return item == 1 ? 'Да' : 'Нет'
            }
        }
    }
</script>

<style lang="scss"></style>
