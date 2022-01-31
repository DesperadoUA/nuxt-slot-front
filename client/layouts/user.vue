<template>
  <div v-if="status">
    <div class="admin_layout">
      <h1>Root User</h1>
      <nuxt />
    </div>
  </div>
</template>

<script>
    export default {
        name: "user",
        data() {
            return {
                status: false,
            }
        },
        async mounted() {
           const user = this.$store.getters['user/getUser']
           if(!user.login) {
               const currentUser = localStorage.getItem('currentUser')
               if(currentUser) {
                   const userData = JSON.parse(currentUser)
                   userData.id = this.$route.params.id
                   const confirm = await this.$store.dispatch('user/checkUser', userData)
                   if(confirm === 'ok') {
                       this.$store.dispatch('user/setUser', JSON.parse(currentUser))
                   }
                   else this.$router.push('/login')
               }
               else this.$router.push('/login')
           }
           this.status = true
       },
        head() {
            return {
                title: 'Личный кабинет',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Личный кабинет'
                    },
                ],
            }
        }
    }
</script>

<style>

</style>