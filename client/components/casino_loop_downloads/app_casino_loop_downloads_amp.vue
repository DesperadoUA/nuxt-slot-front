<template>
 <amp-script layout="container" :src="`${config.BASE_URL[config.LANG]}/js/amp-casino.js`" class="sample">
    <div class="casinos">
        <div class="container">
            <div class="casinos__container">
                <div class="casino-item" v-for="(item, index) in currentPosts" :key="index" >
                    <div class="casino-item__top">
                        <div class="casino-item__logo">
                            <NuxtLink no-prefetch
                                    :to="`${config.AMP_PREFIX}${item.permalink}`">
                                <amp-img :src="item.thumbnail" alt="" width="245" height="140" />
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
                                <amp-img class="casino-param__img" src="/img/fire.svg" width="17" height="17" alt="" />
                                <span class="casino-param__txt">Regular Offers</span>
                            </div>

                            <div :class="item.live_chat == 1 ? 'casino-param__item': 'casino-param__item disabled'">
                                <amp-img class="casino-param__img" src="/img/chat.svg" width="19" height="17" alt="" />
                                <span class="casino-param__txt">Live Chat</span>
                            </div>

                            <div :class="item.live_casino == 1 ? 'casino-param__item': 'casino-param__item disabled'">
                                <amp-img class="casino-param__img" src="/img/casino.svg" width="19" height="17" alt="" />
                                <span class="casino-param__txt">Live Casino</span>
                            </div>

                            <div :class="item.vip_program == 1 ? 'casino-param__item': 'casino-param__item disabled'">
                                <amp-img class="casino-param__img" src="/img/star.svg" width="17" height="17" alt="" />
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
                                    :to="`${config.AMP_PREFIX}${item.permalink}`"
                                    class="casino-item__btn --green">{{translates.CASINO_REVIEW[config.LANG]}}</NuxtLink>
                            <a class="casino-item__btn --blue" :href="getRef(item)">
                                {{translates.GO_TO[config.LANG]}}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="loadContainer casinos__container"></div>
            <div class="items-more">
                <button v-if="value.length > (numberPostOnQuery*postCurrentPage)"
                    class="btn-primary loadMoreBtn"
                    :data-apiUrl="`${config.API_URL[config.LANG]}casino/search`" 
                    :data-postsOnQuery="numberPostOnQuery"
                    :data-ampPrefix="config.AMP_PREFIX"
                    :data-post-type="post_type"
                    :data-post-url="post_url"
                    :data-translate-rating="`${translates.RATING[config.LANG]}`"
                    :data-translate-closed="`${translates.CLOSED[config.LANG]}`"
                    :data-translate-welcome-bonus="`${translates.WELCOME_BONUS[config.LANG]}`"
                    :data-translate-free-spins="`${translates.FREE_SPINS[config.LANG]}`"
                    :data-translate-casino-review="`${translates.CASINO_REVIEW[config.LANG]}`"
                    :data-translate-go-to="`${translates.GO_TO[config.LANG]}`"
                >{{translates.SHOW_MORE[config.LANG]}}</button>
            </div>
        </div>
    </div>
 </amp-script>
</template>

<script>
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
    export default {
        name: "app_casino_loop_downloads_amp",
        props: {
            value: {
                type: Array,
                default: []
            },
             post_type: {
               default: 'page',
               type: String
            },
            post_url: {
                default: 'main',
                type: String
            }
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
           getRef(item) {
                return Helper.getRef(item)
            },
        }
    }
</script>