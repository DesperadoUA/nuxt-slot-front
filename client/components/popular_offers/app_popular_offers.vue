<template>
    <div class="slots">
        <div class="container">
            <div class="slots__heading">
                <h2 class="slots__ttl">{{dontMissOffer}}</h2>
                <NuxtLink no-prefetch to="/bonuses" class="link-primary">{{allOffers}}</NuxtLink>
            </div>

            <div class="slots__container">
                <NuxtLink no-prefetch class="slot-item slot-item--gradient"
                    :to="item.permalink"
                        v-for="(item, index) in value"
                        :key="index"
                    >
                    <div class="slot-item__rating">
                        <div class="circle-rating">
                            <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="item | classRating">
                                <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path class="circle-rating__circle" :stroke-dasharray="item.rating + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            </svg>
                            <img class="circle-rating__logo" :src="item.icon" alt="">
                        </div>
                        <span class="slot-item__casino-name">{{item.title}}</span>
                    </div>

                    <div class="slot-item__content">
                        <div class="slot-item__txt">{{welcomePackage}}: <br>
                            <strong>{{item.bonus}}</strong>
                        </div>
                    </div>

                    <div class="slot-item__btns">
                        <button class="slot-item__btn --blue">{{goTo}}</button>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_popular_offers",
        props: {
            value: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                goTo: '',
                welcomePackage: '',
                allOffers: '',
                dontMissOffer: ''
            }
        },
        filters:{
            classRating(item) {
                return Helper.classRating(item)
            }
        },
        mounted() {
            this.goTo = TRANSLATE.GO_TO.uk
            this.welcomePackage = TRANSLATE.WELCOME_PACKAGE.uk
            this.allOffers = TRANSLATE.ALL_OFFERS.uk
            this.dontMissOffer = TRANSLATE.DONT_MISS_OFFERS.uk
        }
    }
</script>

<style lang="scss"></style>
