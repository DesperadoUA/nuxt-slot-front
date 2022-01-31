<template>
   <div class="register_container">
       <div class="form_container">
           <div class="form_title">Login</div>
           <form @submit.prevent="send">
                <input type="email" class="form_input"
                       v-model="email"
                       placeholder="email"
                       maxlength="50"
                       minlength="3"
                />
                <input type="password" class="form_input"
                       v-model="password"
                       placeholder="password"
                       maxlength="12"
                       minlength="6"
                />
                <button class="form_btn">Send</button>
                <p><NuxtLink to="/registration">Регистрация</NuxtLink></p>
                <div class="form_error" v-if="error !== ''">{{error}}</div>
           </form>
       </div>
   </div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate.json'
    import DAL_Forum from '~/DAL/forum'
    export default {
        name: "registration",
        data() {
            return {
                email: '',
                password: '',
                error: ''
            }
        },
        methods: {
          async  send() {
              this.error = ''
              const data = {
                  email: this.email,
                  password: this.password
              }
              const result = await DAL_Forum.login(data)
              if(result.data.confirm === 'ok') {
                  const user = result.data.body
                  user.login = true
                  this.$store.dispatch('user/setUser', user)
                  this.$router.push(`/user/${user.id}`)
              } else {
                  this.error = 'Сообщение об ошибке'
              }
            }
        },
        mounted() {

        },
        head() {
            return {
                title: 'Вход в личный кабинет',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Вход в личный кабинет',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scope>
    .register_container {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form_container {
        width:320px;
        border:1px solid red;
        padding: 5px 10px;
        border-radius: 12px;
    }
    .form_title {
        font: var(--base-font-family);
        font-size: 20px;
        font-weight: bold;
    }
    .form_error {
        padding: 0px 5px 5px 5px;
        color: red;
    }
    .form_input {
        width: 100%;
        height: 35px;
        border-radius: 4px;
        margin-bottom: 10px;
    }
</style>