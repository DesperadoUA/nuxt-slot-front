<template>
<div class="container container3">
    <div class="casino-card">
        <div class="casino-card__logo">
            <amp-img :src="value.thumbnail" :alt="value.title" width="244" height="137" />
        </div>

        <div class="casino-card__rating">
            <div class="circle-rating">
                <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="value | classRating">
                    <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path class="circle-rating__circle" :stroke-dasharray="value.rating + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                </svg>
                <div class="circle-rating__percentage">{{value.rating}}</div>
            </div>
            <span class="casinos-rating__txt">{{translates.RATING[config.LANG]}}</span>
        </div>

       <div class="casino-card__txt" v-html="value.short_text"></div>
    </div>
</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
    export default {
        name: "app-casino-card_amp",
        props: ['value'],
        mixins: [translateMixin],
        data(){
            return {}
        },
        filters: {
            classRating(item) {
                return Helper.classRating(item)
            }
        }
    }
</script>