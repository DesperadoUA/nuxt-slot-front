<template>
	<section class="slick_button">
		<div class="slick_button_part_left" @click="goHome()"></div>
		<div class="slick_button_part_right" @click="refActivate()"></div>
		<div class="container slick_button_container">
			<div class="slick_button_left">
				<img
					src="/img/arrow.png"
					class="slick_button_arrow left_arrow"
					loading="lazy"
					width="8"
					height="12"
				/>
				<NuxtLink no-prefetch :to="'/casino'">
					{{ translates.CASINO_REVIEWS[config.LANG] }}
				</NuxtLink>
			</div>
			<div class="slick_button_right">
				{{ translates.GO_CASINO_SITE[config.LANG] }}
				<img
					src="/img/arrow.png"
					class="slick_button_arrow right_arrow"
					loading="lazy"
					width="8"
					height="12"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import translate from '~/mixins/translate'
export default {
	name: 'app_slick_button',
	props: ['referal'],
	mixins: [translate],
	data() {
		return {}
	},
	filters: {
		refValidate(value) {
			return value === '' ? '/' : value
		}
	},
	methods: {
		refActivate() {
			if (this.referal.length !== 0) {
				const min = 0
				const max = this.referal.length - 1
				const random = Math.floor(Math.random() * (max - min + 1)) + min
				window.open(this.referal[random], '_blank')
			}
		},
		goHome() {
			this.$router.push('/')
		}
	},
	mounted() {
		console.log(this.referal)
	}
}
</script>

<style>
.slick_button_part_left {
	width: 50%;
	height: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
	z-index: 2;
}
.slick_button_part_right {
	width: 50%;
	height: 100%;
	position: absolute;
	top: 0px;
	right: 0px;
	z-index: 2;
}
.slick_button {
	height: 70px;
	z-index: 10;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background: linear-gradient(
		to right,
		var(--btn-primary) 50%,
		var(--btn-secondary) 50%
	);
	cursor: pointer;
}
.slick_button a,
.slick_button {
	color: var(--disabled-bg);
	text-decoration: none;
	font-family: var(--font);
	font-weight: bold;
}
.slick_button_container {
	display: flex;
	align-items: center;
	height: 100%;
}
.slick_button_left {
	width: 50%;
}
.slick_button_right {
	width: 50%;
	text-align: right;
	cursor: pointer;
}
.left_arrow {
	margin-right: 10px;
	margin-top: 5px;
}
.right_arrow {
	margin-top: 5px;
	margin-left: 10px;
	transform: rotate(180deg);
}
@media (min-width: 320px) and (max-width: 767px) {
	.slick_button_part_left {
		width: 100%;
		height: 50%;
	}
	.slick_button_part_right {
		width: 100%;
		height: 50%;
		top: 50%;
	}
	.slick_button {
		box-sizing: border-box;
		background: transparent;
		height: 80px;
	}
	.slick_button_container {
		flex-wrap: wrap;
		max-width: 100%;
		padding-left: 0px;
		padding-right: 0px;
	}
	.slick_button_left,
	.slick_button_right {
		width: 100%;
		text-align: center;
	}
	.slick_button_left {
		background: var(--btn-primary);
		cursor: pointer;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.slick_button_right {
		background: var(--btn-secondary);
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.right_arrow,
	.left_arrow {
		margin-top: 2px;
	}
}
</style>
