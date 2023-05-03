<template>
    <div>
        <Header/>
        <nuxt />
    </div>
</template>

<script>
    import Header from '~/components/header/app-header'
    export default {
        name: "registration",
        data() {
            return {
               
            }
        },
        components: {
            Header
        }
    }
</script>

<style scoped>
    
</style>