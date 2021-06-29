<template>
<div class="casinos">
    <div class="container">
        <div class="casinos__container">
            <div class="casino-item" v-for="(item, index) in value" :key="index" >
                <div class="casino-item__top">
                    <div class="casino-item__logo">
                        <img :src="item.thumbnail" alt="">
                    </div>

                    <div class="casino-item__rating">
                        <div class="circle-rating">
                            <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="item | classRating">
                                <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path class="circle-rating__circle"
                                      :stroke-dasharray="item.rating + ', 100'"
                                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            </svg>
                            <div class="circle-rating__percentage">{{item.rating}}</div>
                        </div>
                        <span class="casinos-rating__txt">{{rating}}</span>
                    </div>
                </div>

                <div class="casino-item__content">
                    <div class="casino-param">
                        <div :class="item.regular_offers == 1 ? 'casino-param__item': 'casino-param__item disabled'">
                            <img class="casino-param__img" src="/img/fire.svg" width="17" alt="">
                            <span class="casino-param__txt">Regular Offers</span>
                        </div>

                        <div :class="item.live_chat == 1 ? 'casino-param__item': 'casino-param__item disabled'">
                            <img class="casino-param__img" src="/img/chat.svg" width="19" alt="">
                            <span class="casino-param__txt">Live Chat</span>
                        </div>

                        <div :class="item.live_casino == 1 ? 'casino-param__item': 'casino-param__item disabled'">
                            <img class="casino-param__img" src="/img/casino.svg" width="19" alt="">
                            <span class="casino-param__txt">Live Casino</span>
                        </div>

                        <div :class="item.vip_program == 1 ? 'casino-param__item': 'casino-param__item disabled'">
                            <img class="casino-param__img" src="/img/star.svg" width="17" alt="">
                            <span class="casino-param__txt">Vip Program</span>
                        </div>
                    </div>

                    <div class="casino-bonuses">
                        <div class="casino-bonus">
                            <span class="casino-bonus__value" style="color: #ffe600;">{{item.bonus}}</span>
                            <span class="casino-bonus__ttl">{{welcomeBonus}}</span>

                            <div class="casino-bonus__wager">{{item.bonus_wagering}}</div>
                        </div>

                        <div class="casino-bonus">
                            <span class="casino-bonus__value" style="color: #12d4ff;">{{item.freespins}}</span>
                            <span class="casino-bonus__ttl">{{freeSpins}}</span>

                            <div class="casino-bonus__wager">{{item.freespins_wagering}}</div>
                        </div>
                    </div>

                    <div class="casino-item__btns">
                         <NuxtLink no-prefetch
                                  :to="item.permalink"
                                  class="casino-item__btn --green">{{casinoReview}}</NuxtLink>
                        <button class="casino-item__btn --blue" @click="refActivate(item)">{{goTo}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_vendor_casino",
        props: {
            value: {
                type: Array,
                default: []
            }
        },
        data(){
            return {
                rating: '',
                welcomeBonus: '',
                freeSpins: '',
                casinoReview: '',
                goTo: ''
            }
        },
        filters:{
            classRating(item) {
                return Helper.classRating(item)
            }
        },
        methods: {
            refActivate(item) {
                Helper.refActivate(item)
            }
        },
        mounted() {
            this.rating = TRANSLATE.RATING.uk
            this.welcomeBonus = TRANSLATE.WELCOME_BONUS.uk
            this.freeSpins = TRANSLATE.FREE_SPINS.uk
            this.casinoReview = TRANSLATE.CASINO_REVIEW.uk
            this.goTo = TRANSLATE.GO_TO.uk
        }
    }
</script>

<style lang="scss" scoped>
</style>
