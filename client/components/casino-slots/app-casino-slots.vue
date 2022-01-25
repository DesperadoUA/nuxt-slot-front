<template>
<section class="casino-slots" v-if="value.length !== 0">
    <div class="container">
        <h2 class="casino-slots__ttl">{{popularSlots}} в {{ title }}</h2>

        <div class="casino-slots__list">
            <NuxtLink v-for="(item, index) in value"
                      :key="index"
                      :to="item.permalink"
                      class="casino-group-item">
                <div class="circle-rating">
                    <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="item | classRating">
                        <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        <path class="circle-rating__circle" :stroke-dasharray="item.rating + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    </svg>
                    <picture>
                        <img class="circle-rating__logo"
                             :src="item.icon"
                             :alt="item.title">
                    </picture>
                </div>

                <div class="casino-group-item__content">
                    <div class="casino-group-item__name">{{ item.title }}</div>
                    <div class="casino-group-item__rating">{{rating}}: <b>{{ item.rating }}</b></div>
                    <svg class="casino-group-item__arrow" width="9" height="14" viewBox="0 0 9 14" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
            </NuxtLink>
        </div>
    </div>
</section>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app-casino-slots",
        props: {
            value: {
                type: Array,
                default: []
            },
            title: {
              type: String,
              default: ''
            }
        },
        data(){
            return {
                popularSlots: '',
                rating: ''
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
        mounted() {
            this.popularSlots = TRANSLATE.POPULAR_SLOTS.uk
            this.rating = TRANSLATE.RATING.uk
        }
    }
</script>

<style lang="scss" scoped>
.casino-slots {
    --slots-gutters: 70px;
    --slots-width: 33.333%;

    background-color: var(--theme-bg-1);
    padding-top: 41px;
    padding-bottom: 37px;
}

.casino-slots__ttl {
    font-size: 28px;
    line-height: 1.8;
    font-weight: 700;
    margin-bottom: 16px;
}

.casino-slots__list {
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--slots-gutters) / -2);
    margin-right: calc(var(--slots-gutters) / -2);
    
    .casino-group-item {
        width: calc(var(--slots-width) - var(--slots-gutters));
        flex-basis: calc(var(--slots-width) - var(--slots-gutters));
        margin-left: calc(var(--slots-gutters) / 2);
        margin-right: calc(var(--slots-gutters) / 2);
        flex-shrink: 0;

        @media (max-width: 767px) {
            width: 100%;
            margin: 0px 0px 6px 0px;
            flex-basis: 100%;
        }
    }

    @media (min-width: 767px) and (max-width: 1200px) {
         justify-content: center;  
    }
    @media (max-width: 767px) {
        margin: 0px;
    }
}

.casino-group-item {
    background-color: rgba(#0b0038, .7);
    border: 1px solid rgba(#fff, .1);
    color: #fff;
    
    @media (min-width: 767px) and (max-width: 1200px) {
         flex-basis: 40%!important;     
    }
    
    @media (min-width: 992px) {
        &:hover {
            background-color: rgba(#0b0038, .8);
        }
    }
}

</style>
