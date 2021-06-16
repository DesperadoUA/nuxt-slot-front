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
                <div class="circle-rating__percentage">{{value.rating}}</div>
            </div>
            <span class="casinos-rating__txt">Рейтинг</span>
        </div>

        <div class="casino-card__txt" v-html="value.bonus_self"></div>

        <div class="casino-card__cta">
            <button type="button" class="casino-card__cta btn-tertiary" @click="refActivate(value)">Перейти</button>
        </div>
    </div>
</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
    export default {
        name: "app_bonus_card",
        props: {
            value: {
                type: Object,
                default: {}
            },
        },
        data(){
            return {
                numberPostOnQuery: 10,
                postCurrentPage: 1
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
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>
