<template>
    <section class="section-heading">
        <div class="section-heading__container container">
            <h2 class="section-heading__ttl">{{ value.title }}</h2>
            <NuxtLink v-if="value.permalink !== ''"
                      :to="value.permalink" class="section-heading__link">{{ value.title_permalink }}
            </NuxtLink>
        </div>
    </section>
</template>

<script>
    export default {
        name: "app_section_heading",
        props: {
            value: {
                type: Object,
                default: {
                    title: '',
                    permalink: '',
                    title_permalink:''
                }
            }
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss">
.section-heading__container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: #fff;
    margin-top: 25px;
    margin-bottom: 24px;
    @media (max-width: 767px) {
       flex-wrap: wrap;
    }
}

.section-heading__ttl {
    font-size: 28px;
    line-height: 1.358;
    margin-bottom: 0;
    @media (max-width: 767px) {
        display: block;
        width: 100%;
        text-align: center;
    }
}

.section-heading__link {
    font-size: 16px;
    font-weight: 700;
    color: currentColor;
    margin-bottom: 3px;

    @media (min-width: 992px) {
        &:hover {
            text-decoration: none;
        }
    }
    @media (max-width: 767px) {
       display: block;
        margin-top: 20px;
        width: 100%;
        text-align: center;
    }
}
</style>
