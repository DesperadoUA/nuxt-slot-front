<template>
<div class="container container7">
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
            <span class="casinos-rating__txt">{{translates.RATING[config.LANG]}}</span>
        </div>
        <div class="casino-card__txt">
            <span class="casino-card__txt__close" v-if="item.close !== 0">{{translates.BONUS_INACTIVE[config.LANG]}}</span>
            <div v-html="item.bonus_self"></div>
        </div>
        <div class="casino-card__cta">
            <NuxtLink :to="item.permalink"
                      no-prefetch
                      type="button"
                      class="casino-card__cta btn-tertiary --green">{{translates.REVIEW[config.LANG]}}
            </NuxtLink>
            <button type="button" 
                    v-if="item.close !== 1"
                    class="casino-card__cta btn-tertiary" 
                    @click="refActivate(item)">{{translates.PLAY[config.LANG]}}</button>
        </div>
    </div>
    <div class="items-more casino-card__more">
        <button no-prefetch v-if="value.length > (numberPostOnQuery*postCurrentPage)"
                class="btn-primary"
                @click="postShowMore"
        >{{translates.SHOW_MORE[config.LANG]}}
        </button>
    </div>
</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
    export default {
        name: "app_bonuses",
        props: {
            value: {
                type: Array,
                default: []
            },
        },
        mixins: [translateMixin],
        data(){
            return {
                numberPostOnQuery: 10,
                postCurrentPage: 1,
            }
        },
        computed: {
            currentPosts() {
               return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
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
            postShowMore(){
                this.postCurrentPage += 1
            }
        }
    }
</script>
