<template>
<div class="slots">
    <div class="container">
        <div class="slots__heading">
            <h2 class="slots__ttl">Популярные слоты</h2>
            <NuxtLink no-prefetch to="/slots" class="link-primary">Все слоты</NuxtLink>
        </div>

        <div class="slots__container">
            <NuxtLink class="slot-item" no-prefetch 
                      :to="item.permalink" 
                      v-for="(item, index) in value" 
                      :key="index" >
                <div class="slot-item__logo">
                    <img :src="item.thumbnail" alt="" />
                </div>
                <div class="slot-item__content">
                    <div class="slot-item__name">{{item.title}}</div>
                    <div class="slot-item__stats">
                        Рейтинг <strong class="slot-item__stats-val">{{item.rating}}</strong>
                        <span class="slot-item__divider"></span>
                        RTP <strong class="slot-item__stats-val">{{item.rtp}}</strong>
                    </div>
                </div>

                <div class="slot-item__btns">
                    <button class="slot-item__btn --blue">Играть</button>
                </div>
            </NuxtLink>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "app_popular_slots",
        props: {
            value: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss">

</style>
