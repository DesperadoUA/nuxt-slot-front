<template>
	<div class="main register_container">
		<div class="form_container">
			<div class="form_title">{{ translates.REGISTRATION[config.LANG] }}</div>
			<form @submit.prevent="send">
				<input type="text" class="form_input" v-model="name" placeholder="name" maxlength="50" minlength="3" />
				<div class="form_error" v-if="nameError">{{ nameError }}</div>
				<input type="email" class="form_input" v-model="email" placeholder="Email" />
				<div class="form_error" v-if="mailError">{{ mailError }}</div>
				<input
					type="password"
					class="form_input"
					v-model="password"
					placeholder="password"
					maxlength="12"
					minlength="6"
				/>
				<div class="form_error" v-if="passwordError">{{ passwordError }}</div>
				<button class="form_btn">Send</button>
				<div class="back_error" v-if="backEndError.length !== 0">
					<div class="form_error" v-for="(item, index) in backEndError" :key="index">
						{{ item }}
					</div>
				</div>
				<div class="success" v-if="successfulMessage.length !== 0">
					{{ successfulMessage }}
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import Validate from '~/helpers/validate'
import DAL_Forum from '~/DAL/forum'
import translateMixin from '~/mixins/translate'
export default {
	name: 'registration',
	layout: 'registration',
	data() {
		return {
			email: '',
			password: '',
			name: '',
			error: '',
			backEndError: [],
			successfulMessage: '',
			formValid: true,
			nameError: null,
			mailError: null,
			passwordError: null
		}
	},
	mixins: [translateMixin],
	methods: {
		async send() {
			this.formValid = true
			this.nameError = null
			this.mailError = null
			this.passwordError = null
			this.backEndError = []
			this.successfulMessage = ''
			const data = {
				name: this.name,
				email: this.email,
				password: this.password
			}

			if (Validate.isEmpty(data.name)) {
				this.nameError = "Введіть ім'я"
				this.formValid = false
			} else {
				if (Validate.minLength(data.name, 3)) {
					this.nameError = "Коротке ім'я, мінімум 3 символи"
					this.formValid = false
				}
				if (Validate.maxLength(data.name, 50)) {
					this.nameError = "Довге ім'я, максимум 50 символів"
					this.formValid = false
				}
			}

			if (!Validate.isEmail(data.email)) {
				this.formValid = false
				this.mailError = 'Неприпустима адреса електронної пошти'
			} else if (Validate.minLength(data.email, 4)) {
				this.formValid = false
				this.mailError = 'Неприпустима адреса електронної пошти'
			}

			if (Validate.minLength(data.password, 6)) {
				this.passwordError = 'Короткий пароль, мінімальна довжина 6 символів'
				this.formValid = false
			}
			if (Validate.maxLength(data.password, 12)) {
				this.passwordError = 'Довгий пароль, максимальна довжина 12 символів'
				this.formValid = false
			}

			if (this.formValid) {
				const result = await DAL_Forum.addCandidate(data)
				if (result.data.confirm === 'ok') {
					this.successfulMessage = this.translates.SUCCESS_MESSAGE[this.config.LANG]
				} else {
					this.backEndError = result.data.error
				}
			}
		}
	},
	head() {
		return {
			title: this.translates.REGISTRATION[this.config.LANG],
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.translates.REGISTRATION[this.config.LANG]
				}
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
	width: 380px;
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
	background: linear-gradient(0deg, #0194ff, #0194ff), #01b94a;
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
.success {
	margin-top: 10px;
	color: white;
}
</style>
