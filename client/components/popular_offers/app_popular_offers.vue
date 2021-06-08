<template>
    <div class="slots">
        <div class="container">
            <div class="slots__heading">
                <h2 class="slots__ttl">Не пропустите предложения</h2>
                <NuxtLink no-prefetch to="/bonuses" class="link-primary">Все предложения</NuxtLink>
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
                        <div class="slot-item__txt">Приветственный пакет: <br>
                            <strong>{{item.bonus}}</strong>
                        </div>
                    </div>

                    <div class="slot-item__btns">
                        <button class="slot-item__btn --blue">Перейти</button>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
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
            }
        },
        filters:{
            classRating(item) {
                if(item.rating < 33) return '--cr-rating: #f00'
                if(item.rating > 33 && item.rating < 67) return '--cr-rating: #ffc700'
                if(item.rating > 67) return '--cr-rating: #0f6'
            }
        },
    }
</script>

<style lang="scss"></style>
