<template>
    <div class="container">
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
                <span class="casinos-rating__txt">Рейтинг</span>
            </div>

            <div class="casino-card-param">
                <div class="casino-card-param__item">
                    <span class="casino-card-param__value">{{ item.number_rows }}</span>
                    <span class="casino-card-param__txt">Кол-во рядов</span>
                </div>

                <div class="casino-card-param__item">
                    <span class="casino-card-param__value">{{ item.min_bet }}</span>
                    <span class="casino-card-param__txt">Мин ставка</span>
                </div>

                <div class="casino-card-param__item">
                    <span class="casino-card-param__value">{{ item.pay_lines }}</span>
                    <span class="casino-card-param__txt">Линии выплат</span>
                </div>

                <div class="casino-card-param__item">
                    <span class="casino-card-param__value">{{ item.reels }}</span>
                    <span class="casino-card-param__txt">Колеса</span>
                </div>
            </div>

            <div class="casino-card-bonus">
                <span class="casino-card-bonus__value" style="color: #ffe600;">{{ item.volatility }}</span>
                <div class="casino-card-bonus__wager">Волатильность</div>
            </div>

            <div class="casino-card-bonus">
                <span class="casino-card-bonus__value" style="color: #12d4ff;">{{ item.rtp }}</span>
                <div class="casino-card-bonus__wager">RTP</div>
            </div>
            <div class="casino-card__cta">
                <NuxtLink :to="item.permalink"
                          no-prefetch
                          type="button"
                          class="casino-card__cta btn-tertiary --green">Обзор
                </NuxtLink>
                <button type="button" class="casino-card__cta btn-tertiary">Играть</button>
            </div>
        </div>
        <div class="items-more casino-card__more">
            <button no-prefetch v-if="value.length > (numberPostOnQuery*postCurrentPage)"
                    class="btn-primary"
                    @click="postShowMore"
            >Показать больше
            </button>
        </div>
    </div>
</template>

<script>
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
                postCurrentPage: 1
            }
        },
        computed: {
            currentPosts() {
               return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        },
        filters: {
            classRating(item) {
                if(item.rating < 33) return '--cr-rating: #f00'
                if(item.rating > 33 && item.rating < 67) return '--cr-rating: #ffc700'
                if(item.rating > 67) return '--cr-rating: #0f6'
            }
        },
         methods: {
            refActivate(item) {
                if(item.ref.length !== 0) {
                    const min = 0
                    const max = item.ref.length - 1
                    const random = Math.floor(Math.random() * (max - min + 1)) + min
                    window.open(item.ref[random].casino_ref, '_blank')
                }
            },
            postShowMore(){
                this.postCurrentPage += 1
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
