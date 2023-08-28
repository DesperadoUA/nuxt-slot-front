<template>
<amp-script layout="container" :src="`${config.BASE_URL[config.LANG]}/js/amp-content.js`" class="sample">
    <section class="cms" v-if="value!==''" :data-translate-content="translates.CONTENT[config.LANG]">
        <article class="container" v-html="value"></article>
    </section>
</amp-script>
</template>

<script>
    import translateMixin from '~/mixins/translate'
    export default {
        name: "app-content_amp",
        props: ['value'],
        mixins: [translateMixin]
    }
   </script>