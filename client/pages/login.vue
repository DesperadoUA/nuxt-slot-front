<template>
  <div class="main register_container">
            <div class="form_container">
                <div class="form_title">{{translates.LOGIN[config.LANG]}}</div>
                <form @submit.prevent="send">
                        <input type="email" class="form_input"
                            v-model="email"
                            placeholder="Email"
                            maxlength="50"
                            minlength="3"
                        />
                        <input type="password" class="form_input"
                            v-model="password"
                            placeholder="Password"
                            maxlength="12"
                            minlength="6"
                        />
                        <button class="form_btn">{{translates.SEND[config.LANG]}}</button>
                        <p class="form_link">
                            <NuxtLink to="/registration">
                                {{translates.REGISTRATION[config.LANG]}}
                            </NuxtLink>
                        </p>
                        <div class="form_error" v-if="error !== ''">{{error}}</div>
                </form>
            </div>
        </div>
</template>

<script>
    import DAL_Forum from '~/DAL/forum'
    import translateMixin from '~/mixins/translate'
    export default {
        name: "login",
        layout: 'login',
        mixins: [translateMixin],
        data() {
            return {
                email: '',
                password: '',
                error: '',
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
        head() {
            return {
                title: this.translates.LOGIN_PERSONAL_ACCOUNT[this.config.LANG],
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.translates.LOGIN_PERSONAL_ACCOUNT[this.config.LANG],
                    },
                ]
            }
        }
    }
</script>

<style scoped>
.register_container {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form_container {
        width:380px;
        padding: 5px 10px;
        border-radius: 12px;
        margin-top: -150px;
    }
    .form_title {
        font: var(--base-font-family);
        font-size: 20px;
        font-weight: bold;
        font-size: 50px;
        text-align: center;
        color: #fff;
    }
    .form_btn {
        width: 100%;
        height: 50px;
        background: linear-gradient(0deg, #0194FF, #0194FF), #01B94A;
        border-radius: 10px;
        border: none;
        font-size: 16px;
        font-weight: bold;
        color: white;
        cursor: pointer;
    }
    .form_error {
        padding: 0px 5px 5px 5px;
        color: red;
    }
    .form_input {
        width: 100%;
        height: 50px;
        border-radius: 10px;
        margin-bottom: 10px;
        background: rgba(255, 255, 255, 0.1);
        padding: 0px 5px;
        border: none;
        color: white;
    }
    .form_link {
        margin-top: 10px;
    }
    .form_link a {
        color: white;
        text-decoration: none;
        color: white;
    }
    .form_input::-moz-placeholder { 
        color: white; 
    }
    .form_input::-webkit-input-placeholder { 
        color: white; 
    }
</style>