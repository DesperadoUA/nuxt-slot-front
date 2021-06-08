<template>
<div class="container">
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
            <span class="casinos-rating__txt">Рейтинг</span>
        </div>

        <div class="casino-card-param">
            <div class="casino-card-param__item">
                <span class="casino-card-param__value">{{ value.number_rows }}</span>
                <span class="casino-card-param__txt">Кол-во рядов</span>
            </div>

            <div class="casino-card-param__item">
                <span class="casino-card-param__value">{{ value.min_bet }}</span>
                <span class="casino-card-param__txt">Мин ставка</span>
            </div>

            <div class="casino-card-param__item">
                <span class="casino-card-param__value">{{ value.pay_lines }}</span>
                <span class="casino-card-param__txt">Линии выплат</span>
            </div>

            <div class="casino-card-param__item">
                <span class="casino-card-param__value">{{ value.reels }}</span>
                <span class="casino-card-param__txt">Колеса</span>
            </div>
        </div>

        <div class="casino-card-bonus">
            <span class="casino-card-bonus__value" style="color: #ffe600;">{{ value.volatility }}</span>
            <div class="casino-card-bonus__wager">Волатильность</div>
        </div>

        <div class="casino-card-bonus">
            <span class="casino-card-bonus__value" style="color: #12d4ff;">{{ value.rtp }}</span>
            <div class="casino-card-bonus__wager">RTP</div>
        </div>
        <div class="casino-card__cta">
            <button type="button" class="casino-card__cta btn-tertiary">Играть</button>
        </div>
    </div>
</div>
</template>

<script>
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
            }
        },
        filters: {
            classRating(item) {
                if(item.rating < 33) return '--cr-rating: #f00'
                if(item.rating > 33 && item.rating < 67) return '--cr-rating: #ffc700'
                if(item.rating > 67) return '--cr-rating: #0f6'
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
