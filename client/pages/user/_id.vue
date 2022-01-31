<template>
  <div>
    <h1>Single User</h1>
    <div>
      <button @click="changePassword">Change Password</button>
      <button @click="changeEmail">Change Email</button>
    </div>
    <app_change_password v-if="showChangePassword"/>
    <app_change_email v-if="showChangeEmail"/>
  </div>
</template>

<script>
  import app_change_password from '~/components/change_password/change_password'
  import app_change_email from '~/components/change_email/change_email'
    export default {
        name: "single_user",
        layout: 'user',
        components: {
            app_change_password,
            app_change_email
        },
        methods: {
            changePassword(){
                this.$store.dispatch('user-activity/changeStatePassword')
            },
            changeEmail(){
                this.$store.dispatch('user-activity/changeStateEmail')
            }
        },
        computed: {
            showChangePassword(){
                return this.$store.getters['user-activity/getChangePassword']
            },
            showChangeEmail(){
                return this.$store.getters['user-activity/getChangeEmail']
            }
        }

    }
</script>

<style scoped>

</style>