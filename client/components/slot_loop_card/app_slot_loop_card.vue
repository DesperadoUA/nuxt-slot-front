<template>
    <div class="container casino-cards-container">
        <div class="casino-card" v-for="(item, index) in currentPosts" :key="index">
            <div class="casino-card__logo">
                <img :src="item.thumbnail" :alt="item.title">
            </div>

            <div class="casino-card__rating">
                <div class="circle-rating">
                    <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="item | classRating">
                        <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        <path class="circle-rating__circle" :stroke-dasharray="item.rating + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    </svg>
                    <div class="circle-rating__percentage">{{ item.rating }}</div>
                </div>
                <span class="casinos-rating__txt">{{rating}}</span>
            </div>

            <div class="casino-card-param">
                <div class="casino-card-param__item">
                    <span class="casino-card-param__value">{{ item.number_rows }}</span>
                    <span class="casino-card-param__txt">{{numberRows}}</span>
                </div>

                <div class="casino-card-param__item">
                    <span class="casino-card-param__value">{{ item.min_bet }}</span>
                    <span class="casino-card-param__txt">{{minBet}}</span>
                </div>

                <div class="casino-card-param__item">
                    <span class="casino-card-param__value">{{ item.pay_lines }}</span>
                    <span class="casino-card-param__txt">{{payLines}}</span>
                </div>

                <div class="casino-card-param__item">
                    <span class="casino-card-param__value">{{ item.reels }}</span>
                    <span class="casino-card-param__txt">{{wheels}}</span>
                </div>
            </div>

            <div class="casino-card-bonus">
                <span class="casino-card-bonus__value" style="color: #ffe600;">{{ item.volatility }}</span>
                <div class="casino-card-bonus__wager">{{volatility}}</div>
            </div>

            <div class="casino-card-bonus">
                <span class="casino-card-bonus__value" style="color: #12d4ff;">{{ item.rtp }}</span>
                <div class="casino-card-bonus__wager">RTP</div>
            </div>
            <div class="casino-card__cta">
                <NuxtLink :to="item.permalink"
                          no-prefetch
                          type="button"
                          class="casino-card__cta btn-tertiary --green">{{review}}
                </NuxtLink>
                <button type="button" class="casino-card__cta btn-tertiary" @click="refActivate(item)">{{play}}</button>
            </div>
        </div>
        <div class="items-more casino-card__more">
            <button no-prefetch v-if="value.length > (numberPostOnQuery*postCurrentPage)"
                    class="btn-primary"
                    @click="postShowMore"
            >{{showMore}}
            </button>
        </div>
    </div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_slot_loop_card",
        props: {
            value: {
                type: Array,
                default: []
            }
        },
        data(){
            return {
                numberPostOnQuery: 10,
                postCurrentPage: 1,
                showMore: '',
                play: '',
                review: '',
                volatility: '',
                wheels: '',
                payLines: '',
                minBet: '',
                numberRows: '',
                rating: ''
            }
        },
        computed: {
            currentPosts() {
               return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
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
            postShowMore(){
                this.postCurrentPage += 1
            }
        },
        mounted() {
            this.showMore = TRANSLATE.SHOW_MORE.uk
            this.play = TRANSLATE.PLAY.uk
            this.review = TRANSLATE.REVIEW.uk
            this.volatility = TRANSLATE.VOLATILITY.uk
            this.wheels = TRANSLATE.WHEELS.uk
            this.payLines = TRANSLATE.PAY_LINES.uk
            this.minBet = TRANSLATE.MIN_BET.uk
            this.numberRows = TRANSLATE.NUMBER_ROWS.uk
            this.rating = TRANSLATE.RATING.uk
        }
    }
</script>

<style lang="scss" scoped>
</style>
