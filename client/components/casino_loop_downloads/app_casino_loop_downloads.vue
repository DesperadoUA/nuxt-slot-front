<template>
<div class="casinos">
    <div class="container">
        <div class="casinos__container">
            <div class="casino-item" v-for="(item, index) in currentPosts" :key="index" >
                <div class="casino-item__top">
                    <div class="casino-item__logo">
                        <NuxtLink no-prefetch
                                  :to="item.permalink">
                            <img :src="item.thumbnail" alt="" loading="lazy">
                        </NuxtLink>
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
                        <span class="casinos-rating__txt">{{translates.RATING[config.LANG]}}</span>
                    </div>
                </div>
                <div class="casino-item__content">
                    <div class="casino-param" v-if="item.close !== 1">
                        <div :class="item.regular_offers == 1 ? 'casino-param__item': 'casino-param__item disabled'">
                            <img class="casino-param__img" src="/img/fire.svg" loading="lazy" width="17" height="17" alt="">
                            <span class="casino-param__txt">Regular Offers</span>
                        </div>

                        <div :class="item.live_chat == 1 ? 'casino-param__item': 'casino-param__item disabled'">
                            <img class="casino-param__img" src="/img/chat.svg" loading="lazy" width="19" height="17" alt="">
                            <span class="casino-param__txt">Live Chat</span>
                        </div>

                        <div :class="item.live_casino == 1 ? 'casino-param__item': 'casino-param__item disabled'">
                            <img class="casino-param__img" src="/img/casino.svg" loading="lazy" width="19" height="17" alt="">
                            <span class="casino-param__txt">Live Casino</span>
                        </div>

                        <div :class="item.vip_program == 1 ? 'casino-param__item': 'casino-param__item disabled'">
                            <img class="casino-param__img" src="/img/star.svg" loading="lazy" width="17" height="17" alt="">
                            <span class="casino-param__txt">Vip Program</span>
                        </div>
                    </div>
                    <div class="casino-param" v-else>
                        <div class="casino-close">
                            {{translates.CLOSED[config.LANG]}}
                        </div>
                    </div>

                    <div class="casino-bonuses">
                        <div class="casino-bonus">
                            <span class="casino-bonus__value" style="color: #ffe600;">{{item.bonus}}</span>
                            <span class="casino-bonus__ttl">{{translates.WELCOME_BONUS[config.LANG]}}</span>

                            <div class="casino-bonus__wager">{{item.bonus_wagering}}</div>
                        </div>

                        <div class="casino-bonus">
                            <span class="casino-bonus__value" style="color: #12d4ff;">{{item.freespins}}</span>
                            <span class="casino-bonus__ttl">{{translates.FREE_SPINS[config.LANG]}}</span>

                            <div class="casino-bonus__wager">{{item.freespins_wagering}}</div>
                        </div>
                    </div>

                    <div class="casino-item__btns">
                         <NuxtLink no-prefetch
                                  :to="item.permalink"
                                  class="casino-item__btn --green">{{translates.CASINO_REVIEW[config.LANG]}}</NuxtLink>
                        <button class="casino-item__btn --blue" @click="refActivate(item)">
                            {{translates.GO_TO[config.LANG]}}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="items-more">
            <button no-prefetch v-if="value.length > (numberPostOnQuery*postCurrentPage)"
                    class="btn-primary"
                    @click="postShowMore"
            >{{translates.SHOW_MORE[config.LANG]}}</button>
        </div>
    </div>
</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
    export default {
        name: "app_casino_loop_downloads",
        props: {
            value: {
                type: Array,
                default: []
            },
        },
        mixins: [translateMixin],
        data(){
            return {
                numberPostOnQuery: 12,
                postCurrentPage: 1,
            }
        },
        computed: {
            currentPosts() {
               return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        },
        filters:{
            rating(item){
                return Math.trunc(item/10)
            },
            classRating(item) {
               return Helper.classRating(item)
            }
        },
        methods: {
            refActivate(item) {
                 Helper.refActivate(item)
            },
            postShowMore(){
                this.postCurrentPage += 1
            }
        }
    }
</script>