<template>
<section class="best-offer">
    <div class="container">
        <h2 class="best-offer__ttl">Лучшие предложения</h2>

        <div class="best-offer__container-slider">
            <div class="best-offer__list">
                <NuxtLink no-prefetch :to="item.permalink" class="offer-item" v-for="(item, index) in value" :key="index">
                    <div class="circle-rating" :data-fill="item.rating">
                        <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="item |classRating">
                            <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            <path class="circle-rating__circle" :stroke-dasharray="item.rating + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        </svg>
                        <img class="circle-rating__logo" :src="item.icon" :alt="item.title">
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
.best-offer {
    --offer-gutter: 14px;
    --offer-width: 270px;
    margin-bottom: 27px;
    color: var(--theme-cr-txt-alt);

    @media (min-width: 768px) {
        --offer-width: 50%;
    }

    @media (min-width: 992px) {
        --offer-width: 25%;
        margin-bottom: 50px;
    }
}

.best-offer__ttl {
    font-size: 28px;
    line-height: 1.358;
    margin-bottom: 22px;
    text-align: center;
}

.best-offer__list {
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--offer-gutter) / -2);
    margin-right: calc(var(--offer-gutter) / -2);

    .offer-item {
        width: calc(var(--offer-width) - var(--offer-gutter));
        flex-basis: calc(var(--offer-width) - var(--offer-gutter));
        margin-left: calc(var(--offer-gutter) / 2);
        margin-right: calc(var(--offer-gutter) / 2);
        flex-shrink: 0;
        margin-bottom: var(--offer-gutter);
    }
}

.offer-item {
    color: currentColor;
    text-decoration: none;
    display: flex;
    align-items: center;
    border-radius: 14px;
    background: rgba(#000, .2);
    backdrop-filter: blur(20px);
    max-width: var(--offer-width);
    padding: 17px 5px 18px 9px;

    @media (min-width: 992px) {
        &:hover {
            background: rgba(#000, .4);
        }
    }

    .circle-rating {
        margin-right: 10px;
    }
}

.offer-item__content {
    font-size: 12px;
    line-height: 1.333;

    p {
        margin-bottom: 0;
    }
}

.offer-item__ttl {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 7px;
}
</style>
