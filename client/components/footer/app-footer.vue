<template>
	<footer class="footer">
		<div class="partners-logos">
			<div class="container" v-if="changeMenu !== null">
				<ul class="partners-logos__list">
					<li
						class="partners-logos__item"
						v-for="(item, index) in changeMenu"
						:key="index"
					>
						<a no-prefetch :href="item.value_1">
							<img :src="item.src" loading="lazy" />
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="footer__copyrights" v-if="changeText !== null">
			<div class="container">
				<p v-html="footer_text"></p>
			</div>
		</div>
        <GuardPopUp v-if="showGuardModal" />
	</footer>
</template>

<script>
import GuardPopUp from '~/components/guard_pop_up'
import { GUARD_MODAL_KEY, GUARD_COOKIE_STORAGE_KEY } from '@/constants.js'
import translateMixin from '~/mixins/translate.js'
export default {
	name: 'app-footer',
    mixins: [translateMixin],
	data() {
		return {
			footer_text: null,
			footer_menu: null
		}
	},
    components: { GuardPopUp },
	computed: {
		changeText() {
			const settings = this.$store.getters['settings/getSettings']
			if (settings) {
				this.footer_text = settings.filter(
					item => item.key === 'footer_text'
				)[0].value
			}
			return this.footer_text
		},
		changeMenu() {
			const settings = this.$store.getters['settings/getSettings']
			if (settings) {
				this.footer_menu = settings.filter(
					item => item.key === 'footer_menu'
				)[0].value
			}
			return this.footer_menu
		},
        showGuardModal() {
            return this.$store.getters['modal/getModals'][GUARD_MODAL_KEY]
        }
	},
    mounted() {
        const headers = this.$store.getters['common/getHeaders']
        const cookie = headers.cookie || ''
        const guardHide = !cookie.includes(GUARD_COOKIE_STORAGE_KEY) ? false : true
        if(!guardHide) {
            this.$store.dispatch('modal/setStateModal', { key: GUARD_MODAL_KEY, status: true })
        }
    }
}
</script>

<style lang="scss">
.footer {
	background-color: var(--theme-cr-1);
	color: var(--theme-cr-txt-alt);
	position: relative;
	overflow: hidden;
}

.footer__container {
}

.partners-logos {
	padding-top: 41px;
	padding-bottom: 38px;

	@media (min-width: 992px) {
	}
}

.partners-logos__list {
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-left: -25px;
	margin-right: -25px;
}

.partners-logos__item {
	margin-left: 25px;
	margin-right: 25px;
}

.footer__copyrights {
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: var(--theme-cr-2);
	font-size: 15px;
	text-align: center;

	@media (min-width: 992px) {
		padding-top: 20px;
		padding-bottom: 20px;
	}
}
</style>
