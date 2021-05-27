<template>
    <a href="">
        <img class="logo" src="img/logo.svg" alt="Casino Online">
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
          /*await this.$store.dispatch('options/setOptions')
          const options = this.$store.getters['options/getOptions']
          this.options = options.filter(item => item.key === 'logo')[0]*/
        }
    }
</script>

<style lang="scss">
.logo {
  width: 177px;
  height: 31px;

  @media (min-width: 1280px) {
    width: 199px;
    height: 35px;
  }
}
</style>
