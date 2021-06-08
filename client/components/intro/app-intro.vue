<template>
<section class="intro">
    <div class="container--cms text-center">
        <h1 class="intro__ttl">{{ value.h1 }}</h1>
        <div v-html="value.short_desc"></div>
    </div>
</section>
</template>

<script>
    export default {
        name: "app_intro",
        props: ['value'],
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss">
.intro {
    font-size: 14px;
    line-height: 1.8333;
    color: var(--theme-cr-txt-alt);
    margin-bottom: 25px;
    text-align: center;

    @media (min-width: 992px) {
        font-size: 18px;
        margin-bottom: 58px;
    }
}

.intro__ttl {
    font-size: 38px;
    line-height: 1.3618;
    margin-bottom: 15px;

    @media (min-width: 992px) {
        font-size: 50px;
    }
}

.intro__sub-heading {
    font-size: 24px;
    line-height: 1.25;
    margin-bottom: 18px;

    @media (min-width: 992px) {
        font-size: 32px;
    }
}

.intro__sticker {
    min-height: 35px;
    background: rgba(#fff, .12);
    border-radius: 42px;
    display: inline-flex;
    align-items: center;
    padding: 4px 25px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 18px;
}

.intro__sticker-ico {
    width: 16px;
    margin-right: 6px;
}
</style>
