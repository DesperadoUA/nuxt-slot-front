<template>
    <a href="">
        <img class="logo" :src="options.value" alt="Casino Online">
    </a>  
</template>
<script>
    export default {
        name: "app-logo",
        data(){
            return {
                options: {}
            }
        },
        async mounted(){
          await this.$store.dispatch('options/setOptions')
          const options = this.$store.getters['options/getOptions']
          this.options = options.filter(item => item.key === 'logo')[0]
        }
    }
</script>

<style>
  
</style>