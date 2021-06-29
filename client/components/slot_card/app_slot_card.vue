<template>
<div class="container container4">
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
                <div class="circle-rating__percentage">{{ value.rating }}</div>
            </div>
            <span class="casinos-rating__txt">{{rating}}</span>
        </div>

        <div class="casino-card-param">
            <div class="casino-card-param__item">
                <span class="casino-card-param__value">{{ value.number_rows }}</span>
                <span class="casino-card-param__txt">{{numberRows}}</span>
            </div>

            <div class="casino-card-param__item">
                <span class="casino-card-param__value">{{ value.min_bet }}</span>
                <span class="casino-card-param__txt">{{minBet}}</span>
            </div>

            <div class="casino-card-param__item">
                <span class="casino-card-param__value">{{ value.pay_lines }}</span>
                <span class="casino-card-param__txt">{{payLines}}</span>
            </div>

            <div class="casino-card-param__item">
                <span class="casino-card-param__value">{{ value.reels }}</span>
                <span class="casino-card-param__txt">{{wheels}}</span>
            </div>
        </div>

        <div class="casino-card-bonus">
            <span class="casino-card-bonus__value" style="color: #ffe600;">{{ value.volatility }}</span>
            <div class="casino-card-bonus__wager">{{volatility}}</div>
        </div>

        <div class="casino-card-bonus">
            <span class="casino-card-bonus__value" style="color: #12d4ff;">{{ value.rtp }}</span>
            <div class="casino-card-bonus__wager">RTP</div>
        </div>
        <div class="casino-card__cta">
            <button type="button" class="casino-card__cta btn-tertiary" @click="refActivate(value)">{{play}}</button>
        </div>
    </div>
</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_slot_card",
        props: {
            value: {
                type: Object,
                default: {}
            }
        },
        data(){
            return {
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
        filters: {
            classRating(item) {
                return Helper.classRating(item)
            }
        },
        methods:{
            refActivate(item) {
                Helper.refActivate(item)
            }
        },
        mounted() {
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
