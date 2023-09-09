<template>
	<section class="ticket_list">
		<div class="container">
			<div class="ticket_list_ttl">Ваши жалобы</div>
			<div class="ticket_list_wrapper">
				<div
					:class="item.status_accordeon | accordeonState"
					v-for="item in currentPosts"
					:key="item.id"
					@click="activate(item)"
				>
					<div class="ticket_list_row">
						<div class="ticket_list_thumbnail">
							<img :src="item.thumbnail" />
						</div>
						<div class="ticket_list_ttl">
							{{ item.title }}
						</div>
						<div class="ticket_list_status">
							Статус: <span class="color_green">{{ item.status }}</span>
						</div>
					</div>
					<div class="ticket_list_description">
						<div
							class="ticket_list_description_text"
							v-html="item.content"
						></div>
						<div
							class="ticket_list_description_comment"
							v-if="item.admin_comment.length !== 0"
						>
							<span class="color_blue">Admin</span>: {{ item.admin_comment }}
						</div>
					</div>
				</div>
			</div>
			<div class="items-more casino-card__more">
				<button
					no-prefetch
					v-if="value.length > numberPostOnQuery * postCurrentPage"
					class="ticket_list_btn"
					@click="postShowMore"
				>
					{{ showMore }}
				</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'app_list_tickets',
	props: {
		value: Array
	},
	data: () => {
		return {
			numberPostOnQuery: 12,
			postCurrentPage: 1,
			showMore: 'Показати більше'
		}
	},
	mounted() {},
	methods: {
		activate(item) {
			this.$store.dispatch('tickets/changeStatusAccordeon', item)
		},
		postShowMore() {
			this.postCurrentPage += 1
		}
	},
	filters: {
		accordeonState(status) {
			const str =
				status === 'close' ? 'ticket_list_item' : 'ticket_list_item active'
			return str
		}
	},
	computed: {
		currentPosts() {
			console.log('posts Update')
			return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
		}
	}
}
</script>

<style scoped lang="scss">
.ticket_list {
	padding-top: 45px;
	padding-bottom: 45px;
}
.ticket_list_ttl {
	font-family: Open Sans;
	font-style: normal;
	font-weight: bold;
	font-size: 28px;
	line-height: 38px;
	color: #281c4b;
	margin-bottom: 25px;
}
.ticket_list_item {
	display: flex;
	flex-wrap: wrap;
	background: rgba(11, 0, 56, 0.7);
	border: 1px solid rgba(255, 255, 255, 0.1);
	box-sizing: border-box;
	border-radius: 10px;
	padding: 5px;
	margin-bottom: 10px;
	position: relative;
}
.ticket_list_item::before {
	content: '>';
	position: absolute;
	width: 10px;
	height: 23px;
	right: 20px;
	top: 35px;
	font-weight: bold;
	color: white;
	transition: 0.7s;
}
.ticket_list_row {
	cursor: pointer;
}
.active::before {
	transform: rotate(90deg);
}
.ticket_list_description {
	width: 100%;
}
.ticket_list_row {
	display: flex;
	width: 100%;
}
.ticket_list_thumbnail {
	width: 15%;
	min-width: 150px;
}
.ticket_list_thumbnail img {
	width: 130px;
	height: 75px;
	margin-bottom: -6px;
	border-radius: 6px;
}
.ticket_list_description {
	display: none;
}
.active .ticket_list_description {
	display: block;
	background: rgba(0, 0, 0, 0.2);
	border-radius: 0px 0px 10px 10px;
	color: white;
	padding: 10px;
}
.ticket_list_description_comment {
	margin-top: 10px;
	padding: 10px;
	margin-left: 15px;
	border-left: 2px solid #12d4ff;
}
.ticket_list_item .ticket_list_ttl {
	width: 60%;
	height: 100%;
	display: flex;
	align-items: center;
	color: white;
	font-size: 18px;
}
.ticket_list_status {
	width: 20%;
	height: 100%;
	display: flex;
	align-items: center;
	color: white;
	font-size: 18px;
}
.ticket_list_status span {
	margin-left: 10px;
}
.ticket_list_btn {
	width: 269px;
	height: 50px;
	font-family: Open Sans;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	color: #281c4b;
	cursor: pointer;
	border: none;
	margin-top: 20px;
	background: rgba(255, 255, 255, 0.1);
	border: 1px solid #0194ff;
	box-sizing: border-box;
	border-radius: 10px;
}
.color_green {
	color: #01b94a;
	font-weight: bold;
}
.color_gold {
	color: #ffc700;
	font-weight: bold;
}
.color_blue {
	color: #12d4ff;
	font-weight: bold;
}
</style>
