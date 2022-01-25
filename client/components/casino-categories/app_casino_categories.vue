<template>
<div class="casino-categories">
    <div class="container">
        <div class="casino-categories__container">
            <div class="casino-group">
                <h3 class="casino-group__ttl">{{highestRating}}</h3>
                <NuxtLink :to="item.permalink"
                          v-for="(item, index) in value.top_rating_casino"
                          :key="index" class="casino-group-item">
                    <div class="circle-rating">
                        <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="item | classRating">
                            <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            <path class="circle-rating__circle" :stroke-dasharray="item.rating + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        </svg>
                        <picture>
                            <img class="circle-rating__logo" :src="item.icon" :alt="item.title">
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

            <div class="casino-group">
                <h3 class="casino-group__ttl">{{newCasino}}</h3>
                <NuxtLink :to="item.permalink"
                          v-for="(item, index) in value.new_casino"
                          :key="index" class="casino-group-item">
                    <div class="circle-rating">
                        <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="item | classRating">
                            <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            <path class="circle-rating__circle" :stroke-dasharray="item.rating + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        </svg>
                        <img class="circle-rating__logo" :src="item.icon" :alt="item.title">
                    </div>

                    <div class="casino-group-item__content">
                        <div class="casino-group-item__name">{{ item.title }}</div>
                        <div class="casino-group-item__rating">{{rating}}: <b>{{ item.rating }}</b></div>
                        <svg class="casino-group-item__arrow" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                </NuxtLink>
            </div>

            <div class="casino-group">
                <h3 class="casino-group__ttl">{{popularCasino}}</h3>
                <NuxtLink :to="item.permalink"
                          v-for="(item, index) in value.popular_casino"
                          :key="index" class="casino-group-item">
                    <div class="circle-rating">
                        <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="item | classRating">
                            <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            <path class="circle-rating__circle" :stroke-dasharray="item.rating + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        </svg>
                        <img class="circle-rating__logo" :src="item.icon" :alt="item.title">
                    </div>

                    <div class="casino-group-item__content">
                        <div class="casino-group-item__name">{{ item.title }}</div>
                        <div class="casino-group-item__rating">{{rating}}: <b>{{ item.rating }}</b></div>
                        <svg class="casino-group-item__arrow" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_casino_categories",
        props: {
            value: {
                type: Object,
                default: []
            }
        },
        data(){
            return {
                numberPostOnQuery: 12,
                postCurrentPage: 1,
                rating: '',
                popularCasino: '',
                newCasino: '',
                highestRating: ''
            }
        },
        computed: {
            currentPosts() {
               return this.posts.slice(0, this.numberPostOnQuery * this.postCurrentPage)
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
            postShowMore(){
                this.postCurrentPage += 1
            }
        },
        mounted() {
            this.rating = TRANSLATE.RATING.uk
            this.popularCasino = TRANSLATE.POPULAR_CASINO.uk
            this.newCasino = TRANSLATE.NEW_CASINO.uk
            this.highestRating = TRANSLATE.HIGHEST_RATING.uk
        }
    }
</script>

<style lang="scss" scoped>
.casino-categories {
    --casino-categories-gutters: 45px;
    --casino-categories-width: 388px;
    margin-bottom: 25px;
}

.casino-categories__container {
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--casino-categories-gutters) / -2);
    margin-right: calc(var(--casino-categories-gutters) / -2);
    .casino-group {
        width: calc(var(--casino-categories-width) - var(--casino-categories-gutters));
        flex-basis: calc(var(--casino-categories-width) - var(--casino-categories-gutters));
        margin-left: calc(var(--casino-categories-gutters) / 2);
        margin-right: calc(var(--casino-categories-gutters) / 2);
        flex-shrink: 0;
        @media (min-width: 320px) and (max-width: 767px) {
         margin-left:0px;
         margin-right: 0px;
         width: 100%;
         flex-basis: 100%; 
        }
         @media (min-width: 768px) and (max-width: 1000px) {
         margin-left:0px;
         margin-right: 0px;
         width: 50%;
         flex-basis: 50%; 
        }
    }
    @media (max-width: 992px) {
        margin-left:0px;
        margin-right: 0px;
    }
}

.casino-group {
    color: #fff;
    background: rgba(#000, .2);
    border: 1px solid rgba(#fff, .1);
    border-radius: 14px;
    padding: 24px 7px 0;
    margin-bottom: 30px;
}

.casino-group__ttl {
    font-size: 18px;
    line-height: 1.833;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 27px;
}


</style>
