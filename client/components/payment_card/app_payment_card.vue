<template>
    <div class="container">
        <div class="casino-card">
            <div class="casino-card__logo">
                <img :src="value.thumbnail" :alt="value.title">
            </div>

            <div class="casino-card__rating">
                <div class="circle-rating">
                    <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="value | classRating">
                        <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        <!-- значение рейтинга - 1ый параметр в атрибуте stroke-dasharray -->
                        <path class="circle-rating__circle" :stroke-dasharray="value.rating + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    </svg>
                    <div class="circle-rating__percentage">{{value.rating}}</div>
                </div>
                <span class="casinos-rating__txt">Рейтинг</span>
            </div>

           <div class="casino-card__txt" v-html="value.short_text"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-casino-card",
        props: ['value'],
        data(){
            return {
            }
        },
        filters: {
            classRating(item) {
                if(item.rating < 33) return '--cr-rating: #f00'
                if(item.rating > 33 && item.rating < 67) return '--cr-rating: #ffc700'
                if(item.rating > 67) return '--cr-rating: #0f6'
            }
        }
    }
</script>

<style lang="scss">
   
</style>
