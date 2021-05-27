<template>
  <section class="intro">
        <div class="container--cms text-center">
            <h1>{{data.h1}}</h1>
            <p class="intro__sub-heading">Complete guide to the best Canadian casinos</p>
            <p>CanadaCasino is your guide to all things online casino! Here, you will find honest casino and game reviews, together with useful guides that have been expertly put together to help you enjoy the best online casino experience from Canada!</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "app_intro",
        props: ['data'],
        data(){
            return {
            }
        },
        mounted(){
            console.log(this.data)
        }
    }
</script>

<style>
    
</style>