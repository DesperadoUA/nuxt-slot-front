<template>
	<section :class="statusMenu">
		<div class="burger" @click="changeStatusMenu"></div>
		<div class="user_img">
			<img :src="userLogo" />
		</div>
		<div class="user_action">
			<button @click="changePassword" class="user_action_btn">
				Change Password
			</button>
			<button @click="changeEmail" class="user_action_btn">Change Email</button>
			<button @click="changeDeleteAccount" class="user_action_btn">
				Delete Account
			</button>
			<button @click="logout" class="user_action_btn">Logout</button>
		</div>
		<app_change_password v-if="showChangePassword" />
		<app_delete_account v-if="showDeleteAccount" />
	</section>
</template>

<script>
import app_change_password from '~/components/change_password/change_password'
import app_change_email from '~/components/change_email/change_email'
import app_delete_account from '~/components/delete_account/delete_account'
export default {
	name: 'app_user_menu',
	data: () => {
		return {}
	},
	components: {
		app_change_password,
		app_change_email,
		app_delete_account
	},
	methods: {
		changePassword() {
			this.$store.dispatch('user-activity/changeStatePassword')
		},
		changeEmail() {
			this.$store.dispatch('user-activity/changeStateEmail')
		},
		changeDeleteAccount() {
			this.$store.dispatch('user-activity/changeStateDeleteAccount')
		},
		changeStatusMenu() {
			console.log('change status')
			this.$store.dispatch('user-activity/changeStateStatusMenu')
		},
		async logout() {
			const user = this.$store.getters['user/getUser']
			const data = {
				id: user.id,
				session: user.session
			}
			await this.$store.dispatch('user/logout', data)
			const statusUser = this.$store.getters['user/getUser']
			if (!statusUser.login) this.$router.push('/login')
		}
	},
	computed: {
		showChangePassword() {
			return this.$store.getters['user-activity/getChangePassword']
		},
		showChangeEmail() {
			return this.$store.getters['user-activity/getChangeEmail']
		},
		showDeleteAccount() {
			return this.$store.getters['user-activity/getDeleteAccount']
		},
		userLogo() {
			const user = this.$store.getters['user/getUser']
			return user.thumbnail
		},
		statusMenu() {
			const status = this.$store.getters['user-activity/getStatusMenu']
			return status ? 'user_menu active_menu' : 'user_menu'
		}
	}
}
</script>
<style scoped>
.user_menu {
	width: 235px;
	background: #21173d;
	height: 100vh;
	position: fixed;
	z-index: 2;
	left: -220px;
	top: 0px;
	transition: 0.7s;
}
.active_menu {
	left: 0px;
}
.user_img img {
	width: 45px;
	border-radius: 50%;
	border: 1px solid rgba(255, 255, 255, 0.12);
}
.user_img {
	position: static;
	margin-top: 30px;
	text-align: center;
}
.user_action {
	padding-left: 20px;
	padding-right: 20px;
}
.user_action_btn {
	width: 100%;
	height: 40px;
	background: #0194ff;
	border-radius: 10px;
	font-family: Open Sans;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	color: white;
	cursor: pointer;
	border: none;
	margin-top: 20px;
}
.burger {
	width: 45px;
	height: 45px;
	position: absolute;
	right: -45px;
	top: 30px;
	background: url('/img/burger.png') #483e66;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	cursor: pointer;
	z-index: 2;
}
</style>
