<template>
	<div class="candidate_single">
		<div class="container blog-single__container">
			<h1 class="intro__ttl">Confirm candidate</h1>
			<app_result_registration :value="data.status" />
		</div>
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import app_result_registration from '~/components/result_registration/result_registration'
export default {
	name: 'app_single_candidate',
	components: { app_result_registration },
	data: () => {
		return {
			data: {
				status: false
			}
		}
	},
	async asyncData({ route, error }) {
		const request = new DAL_Builder()
		const response = await request
			.postType('candidate')
			.url(route.params.id)
			.get()
		const body = response.data.body
		const data = { body }
		if (response.data.confirm === 'error') data.status = false
		else data.status = true
		return { data }
	},
	head() {
		return {
			title: 'Подтверждение регистрации',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Подтверждение регистрации'
				}
			]
			/*
                link: [
                    { rel: 'canonical', href: this.data.body.currentUrl}
                ]
                 */
		}
	}
}
</script>

<style scoped>
.candidate_single h1 {
	color: var(--theme-cr-txt-alt);
	text-align: center;
}
</style>
