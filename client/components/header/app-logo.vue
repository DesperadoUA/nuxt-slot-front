<template>
    <NuxtLink no-prefetch to="/" v-if="options !== null" >
        <img class="logo" :src="options.value" alt="Casino Online">
    </NuxtLink>
</template>
<script>
    export default {
        name: "app-logo",
        data(){
            return {
                options: null
            }
        },
        async mounted() {
          await this.$store.dispatch('options/setOptions')
          const options = this.$store.getters['options/getOptions']
          this.options = options.filter(item => item.key === 'logo')[0]
        }
    }
</script>

<style lang="scss">

</style>
