<template>
  <section class="intro">
    <div class="container--cms text-center">
      <h1>{{ data.h1 }}</h1>
      <div v-html="data.short_desc"></div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "app_intro",
        props: ['data'],
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

    @media (min-width: 992px) {
        margin-bottom: 50px;
        font-size: 18px;
    }
}

.intro__sub-heading {
    font-size: 24px;
    line-height: 1.25;

    @media (min-width: 992px) {
        font-size: 32px;
    }
}
</style>
