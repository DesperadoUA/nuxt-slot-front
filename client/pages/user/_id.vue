<template>
	<div>
		<div>
			<app_user_menu />
			<app_ticket_content />
			<app_list_tickets :value="userTickets" />
		</div>
	</div>
</template>

<script>
import app_list_tickets from '~/components/list_tickets/list_tickets'
import app_user_menu from '~/components/user_menu/user_menu'
import app_ticket_content from '~/components/ticket_content/ticket_content'
export default {
	name: 'single_user',
	layout: 'user',
	components: {
		app_list_tickets,
		app_user_menu,
		app_ticket_content
	},
	async mounted() {
		const user = this.$store.getters['user/getUser']
		const data = {
			id: user.id,
			session: user.session
		}
		await this.$store.dispatch('tickets/setPosts', data)
		await this.$store.dispatch('tickets/setUserTickets', data)
	},
	beforeDestroy() {
		this.$store.dispatch('user-activity/setDefaultState')
	},
	computed: {
		userTickets() {
			return this.$store.getters['tickets/getUserTickets']
		}
	}
}
</script>

<style scoped></style>
