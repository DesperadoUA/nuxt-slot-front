<template>
<div class="container container6 single_template">
    <div class="casino-card">
        <div class="casino-card__logo">
            <amp-img :src="value.thumbnail" :alt="value.title" width="357" height="203" />
        </div>
        <div class="casino-card__txt" v-html="value.amp_content" v-if="value.amp_content" />
    </div>
</div>
</template>

<script>
    export default {
        name: "app_vendor_card_amp",
        props: {
            value: {
                type: Object,
                default: {}
            }
        }
    }
</script>
