<template>
<div class="container container6 single_template">
    <div class="casino-card">
        <div class="casino-card__logo">
            <img :src="value.thumbnail" :alt="value.title">
        </div>
        <div class="casino-card__txt" v-html="value.content"></div>
    </div>
</div>
</template>

<script>
    export default {
        name: "app_vendor_card",
        props: {
            value: {
                type: Object,
                default: {}
            }
        },
        data(){
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
