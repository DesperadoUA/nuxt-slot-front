<template>
    <section class="best-offer">
        <div class="container">
            <h2>Лучшие предложения</h2>
            <div class="best-offer__container-slider js-best-offer-swiper">
                <div class="best-offer__list swiper-wrapper">
                    <NuxtLink no-prefetch :to="item.permalink" class="offer-item" v-for="(item, index) in value" :key="index">
                        <div class="circle-rating" 
                            :data-fill="item.rating" 
                            style="--circle-cr: #236054; --bar-cr: #00ff66;">
                            <img class="offer-item__logo" :src="item.icon" :alt="item.title">
                            <div class="circle-rating__bar"></div>
                        </div>
    
                        <div class="offer-item__content">
                            <h3 class="offer-item__ttl">{{item.title}}</h3>
                            <p>{{item.short_desc}}</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "app_intro",
        props: ['value'],
        data(){
            return {
            }
        },
    }
</script>

<style lang="scss">
</style>
