<template>
<div class="container container2">
    <div class="casino-card">
        <div class="casino-card__logo">
            <img :src="value.thumbnail" :alt="value.title">
        </div>

        <div class="casino-card__rating">
            <div class="circle-rating">
                <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="value | classRating">
                    <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path class="circle-rating__circle" :stroke-dasharray="value.rating + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                </svg>
                <div class="circle-rating__percentage">{{value.rating}}</div>
            </div>
            <span class="casinos-rating__txt">{{$options.rating}}</span>
        </div>

        <div class="casino-card-param">
            <div :class="value.live_casino == 1 ? 'casino-card-param__item': 'casino-card-param__item disabled'">
                <img class="casino-card-param__img"
                     src="/img/fire.svg" width="17" alt="">
                <span class="casino-card-param__txt">Regular Offers</span>
            </div>

            <div :class="value.live_chat == 1 ? 'casino-card-param__item': 'casino-card-param__item disabled'">
                <img class="casino-card-param__img"
                     src="/img/chat.svg"
                     width="19" alt="">
                <span class="casino-card-param__txt">Live Chat</span>
            </div>

            <div :class="value.live_casino == 1 ? 'casino-card-param__item': 'casino-card-param__item disabled'">
                <img class="casino-card-param__img"
                     src="/img/casino.svg" width="19" alt="">
                <span class="casino-card-param__txt">Live Casino</span>
            </div>

            <div :class="value.vip_program == 1 ? 'casino-card-param__item': 'casino-card-param__item disabled'" >
                <img class="casino-card-param__img"
                     src="/img/fire.svg" width="17" alt="">
                <span class="casino-card-param__txt">Vip Program</span>
            </div>
        </div>

        <div class="casino-card-bonus">
            <span class="casino-card-bonus__value" style="color: #ffe600;">{{value.bonus}}</span>
            <span class="casino-card-bonus__ttl">{{$options.welcomeBonus}}</span>
            <div class="casino-card-bonus__wager">{{value.bonus_wagering}}</div>
        </div>

        <div class="casino-card-bonus">
            <span class="casino-card-bonus__value" style="color: #12d4ff;">{{value.freespins}}</span>
            <span class="casino-card-bonus__ttl">{{$options.freeSpins}}</span>
            <div class="casino-card-bonus__wager">{{value.freespins_wagering}}</div>
        </div>
        <div class="casino-card-button_wrapper">
            <button type="button" class="casino-card__cta btn-tertiary" @click="refActivate(value)">{{$options.goTo}}</button>
            <PromoBtn 
                v-if="value.promocod"
                :text="value.promocod"
                :subTitle="$options.promoTitle"
            />
        </div>
    </div>
</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import TRANSLATE from '~/helpers/translate.json'
import config from '~/config'
import PromoBtn from '~/components/casino_card/parts/PromoBtn'
    export default {
        name: "app-casino-card",
        props: ['value'],
        components: {PromoBtn},
        data(){
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
            },
        },
        created() {
            this.$options.goTo = TRANSLATE.GO_TO[config.LANG]
            this.$options.freeSpins = TRANSLATE.FREE_SPINS[config.LANG]
            this.$options.welcomeBonus = TRANSLATE.WELCOME_BONUS[config.LANG]
            this.$options.rating = TRANSLATE.RATING[config.LANG]
            this.$options.promoTitle = TRANSLATE.PROMO_TITLE[config.LANG]
        }
    }
</script>

<style lang="scss">
.casino-card-button_wrapper {
    flex-grow: 1;
}
</style>
