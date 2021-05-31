<template>
    <div class="categories">
        <div class="categories__container">
              <NuxtLink no-prefetch :to="item.permalink" 
                        :class="{item, index} | linkClasses" 
                        v-for="(item, index) in value" 
                        :key="index">{{item.title}}
              </NuxtLink>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-category_link",
        props: {
            value: {
                type: Array,
                default: []
            }
        },
        data(){
            return {
            }
        },
        filters: {
             linkClasses(item) {
                 
            }
        }
    }
</script>

<style lang="scss" scope>
.categories {
    padding-left: var(--side-gutters);
    padding-right: var(--side-gutters);
    margin-bottom: 25px;
}

.categories__container {
    margin-left: auto;
    margin-right: auto;
    max-width: calc(var(--container) - var(--side-gutters) * 2);
    background-color: rgba(#000, .2);
    backdrop-filter: blur(20px);
    border-radius: 14px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.categories__link {
    text-align: center;
    flex: 1 1 0%;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    font-size: 12px;
    line-height: 27px;
    padding: 7px 5px;
    border-radius: 14px;

    @media (min-width: 992px) {
        &:hover {
            background: rgba(#000, .2);
        }
    }

    &.active,
    &.is-active {
        background-color: var(--btn-primary);
    }
}
</style>
