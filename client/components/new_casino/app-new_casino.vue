<template>
    <div class="slots">
        <div class="container">
            <div class="slots__heading">
                <h2 class="slots__ttl">{{newCasino}}</h2>
                <NuxtLink no-prefetch to="/reviews" class="link-primary">{{allCasino}}</NuxtLink>
            </div>

            <div class="slots__container">
                <NuxtLink no-prefetch :to="item.permalink"
                          class="slot-item slot-item--gradient"
                          v-for="(item, index) in value"
                          :key="index">
                    <div class="slot-item__rating">
                        <div class="circle-rating">
                            <svg viewBox="0 0 36 36" class="circle-rating__chart" :style="item |classRating">
                                <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <path class="circle-rating__circle" :stroke-dasharray="item.rating + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            </svg>
                            <img class="circle-rating__logo" loading="lazy" :src="item.icon" alt="">
                        </div>
                        <span class="slot-item__casino-name">{{ item.title }}</span>
                    </div>

                    <div class="slot-item__content">
                        {{rating}} <strong>{{ item.rating }}</strong>
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
        name: "app_new_casino",
        props: {
            value: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                goTo: '',
                rating: '',
                newCasino: '',
                allCasino: ''
            }
        },
        filters: {
            classRating(item) {
                return Helper.classRating(item)
            }
        },
        mounted() {
            this.goTo = TRANSLATE.GO_TO.uk
            this.rating = TRANSLATE.RATING.uk
            this.newCasino = TRANSLATE.NEW_CASINO.uk
            this.allCasino = TRANSLATE.ALL_CASINO.uk
        }
    }
</script>

<style lang="scss">
.slots {
    --slots-width: 269px;
    --slots-gutter: 14px;
    background-color: var(--theme-bg-1);
    padding-bottom: 15px;

    .casinos + & {
        padding-top: 40px;
    }
}

.slots__heading {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 26px;

    @media (min-width: 768px) {
        justify-content: space-between;
    }

    .link-primary {
        @media (max-width: 767px) {
            display: none;
        }
    }
}

.slots__ttl {
    font-size: 20px;
    line-height: 1.358;
    font-weight: 700;
    margin-bottom: 0;

    @media (min-width: 992px) {
        font-size: 28px;
    }
}

.slots__container {
    overflow-x: auto;
    display: flex;
    justify-content: space-between;
    margin-left: calc(var(--slots-gutter) / -2);
    margin-right: calc(var(--slots-gutter) / -2);
    margin-bottom: 16px;

    @media (max-width: 1150px) {
        margin-right: calc(var(--side-gutters) * -1);
    }

    &:after {
        content: '';
        flex: auto;
    }

    .slot-item {
        flex-shrink: 0;
        flex-basis: var(--slots-width);
        margin-left: calc(var(--slots-gutter) / 2);
        margin-right: calc(var(--slots-gutter) / 2);
        position: relative;
    }
}

.slot-item {
    background-color: #fff;
    width: var(--slots-width);
    min-height: 260px;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 14px rgba(#04001a, .15);
    color: currentColor;
    text-decoration: none;

    &--gradient {
        padding-top: 38px;
        color: #fff;

        &:nth-child(4n - 3) {
            background-image: linear-gradient(0deg, #0d0121, #530323);
        }

        &:nth-child(4n - 2) {
            background-image: linear-gradient(0deg, #011127, #026f4c);
        }

        &:nth-child(4n - 1) {
            background-image: linear-gradient(0deg, #0d0121, #024278);
        }

        &:nth-child(4n) {
            background-image: linear-gradient(0deg, #320082, #08002E);
        }

        // Всегда синий
        .slots--new & {
            background-image: linear-gradient(0deg, #0d0121, #024278);
        }
    }
}

.slot-item__rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
}

.slot-item__logo {
    overflow: hidden;
    border-radius: 10px 10px 0 0;
    margin-bottom: 14px;

    img {
        width: 100%;
    }
}

.slot-item__casino-name {
    font-size: 18px;
    line-height: 1.389;
    font-weight: 700;
    text-align: center;
}

.slot-item__content {
    font-size: 14px;
    line-height: 1.357;
    text-align: center;
    margin-bottom: 17px;
    padding-left: 8px;
    padding-right: 8px;
}

.slot-item__txt {
    min-height: 86px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.slot-item__name {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.389;
    margin-bottom: 1px;
}

.slot-item__stats {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.slot-item__divider {
    width: 1px;
    height: 23px;
    background: rgba(#281c4b, .2);
    border-radius: 1px;
    margin-left: 8px;
    margin-right: 8px;
}

.slot-item__stats-val {
    margin-left: 4px;
}

.slot-item__btns {
    margin-top: auto;
    overflow: hidden;
    border-radius: 0 0 10px 10px;
}

.slot-item__btn {
    color: #fff;
    font-family: var(--base-font-family);
    font-size: 16px;
    font-weight: 700;
    min-height: 40px;
    text-decoration: none;
    border: 0;
    padding: 3px 5px;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &.--green {
        background-color: var(--btn-secondary);

        &:hover {
            background-color: #009c3e;
        }
    }

    &.--blue {
        background-color: var(--btn-primary);

        &:hover {
            background-color: #0475dd;
        }
    }
}
</style>
