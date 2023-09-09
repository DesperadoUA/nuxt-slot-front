<template>
	<select
		@change="selectCurrentCasino"
		v-model="currentCasino"
		class="form_select"
	>
		<option v-for="(item, index) in value" :key="index">
			{{ item.title }}
		</option>
	</select>
</template>

<script>
export default {
	name: 'app_list_casino',
	props: {
		value: Array
	},
	data: () => {
		return {
			currentCasino: ''
		}
	},
	methods: {
		selectCurrentCasino() {
			this.$store.dispatch('tickets/setCurrentCasino', this.currentCasino)
		}
	}
}
</script>

<style scoped lang="scss">
.form_select {
	height: 50px;
	background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 0.1),
		rgba(255, 255, 255, 0.1)
	);
	border: 1px solid rgba(255, 255, 255, 0.2);
	box-sizing: border-box;
	backdrop-filter: blur(20px);
	width: 100%;
	border-radius: 10px;
	color: white;
}
.form_select option {
	background: #281c4b;
	color: #fff;
	//text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
}
</style>
