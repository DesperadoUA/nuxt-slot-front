<template>
    <div class="categories">
        <div class="categories__container">
              <NuxtLink no-prefetch :to="item.permalink"
                        :class="item.class"
                        v-for="(item, index) in currentData"
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
                currentData: []
            }
        },
        mounted(){
            this.value.forEach((element, index)=> {
              const item = element
              if(this.$route.path === '/') {
                item.class = index === 0 ? 'categories__link is-active' : 'categories__link'
              } else {
                  if(item.permalink === this.$route.path) item.class = 'categories__link is-active'
                  else item.class = 'categories__link'
              }
              this.currentData.push(item)
            })
        },
        filters: {
             linkClasses(item) {
                 return 'categories__link'
            }
        }
    }
</script>

<style lang="scss" scope>
.categories {
    padding-left: var(--side-gutters);
    padding-right: var(--side-gutters);
    margin-bottom: 25px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.categories__container {
    margin-left: auto;
    margin-right: auto;
    width: calc(var(--container-width) - var(--side-gutters) * 2);
    background-color: rgba(#000, .2);
    backdrop-filter: blur(20px);
    border-radius: 14px;
    display: flex;
    justify-content: space-between;
}

.categories__link {
    text-align: center;
    flex: 1 1 auto;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
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
        font-weight: 700;
    }
}
</style>
