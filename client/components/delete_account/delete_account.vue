<template>
	<div class="pop_up">
		<div class="form_container">
			<h2>Аккаунт будет удален</h2>
			<button @click="deleteAccount">Да</button>
			<button @click="cancel">Нет</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'delete_account',
	data() {
		return {}
	},
	methods: {
		async deleteAccount() {
			const user = this.$store.getters['user/getUser']
			const data = {
				id: user.id,
				session: user.session
			}
			await this.$store.dispatch('user/deleteAccount', data)
			this.$store.dispatch('user-activity/changeStateDeleteAccount')
			this.$router.push('/login')
		},
		cancel() {
			this.$store.dispatch('user-activity/changeStateDeleteAccount')
		}
	}
}
</script>

<style scoped>
.pop_up {
	position: fixed;
	z-index: 2;
	width: 100vw;
	height: 100vh;
	background: #2a1f34;
	display: flex;
	align-items: center;
	justify-content: center;
	left: 0;
	top: 0;
}
.form_container {
	width: 350px;
	max-width: 90%;
	padding: 15px 10px;
	border: 1px solid red;
	border-radius: 12px;
	position: relative;
}
.form_ttl {
	color: white;
}
.close {
	position: absolute;
	width: 20px;
	height: 20px;
	background: white;
	display: flex;
	align-items: center;
	justify-content: center;
	right: 0px;
	top: -30px;
	border-radius: 50%;
	font-weight: bolder;
	cursor: pointer;
}
</style>
