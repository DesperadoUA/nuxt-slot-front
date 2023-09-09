<template>
	<section
		class="faq"
		itemscope
		itemtype="https://schema.org/FAQPage"
		v-if="value.length !== 0"
	>
		<div class="container">
			<h2 class="faq_title">{{ title }}</h2>
		</div>
		<div class="container faq_wrapper">
			<amp-accordion id="faq" disable-session-states>
				<section
					class="faq_row"
					itemscope
					itemprop="mainEntity"
					itemtype="https://schema.org/Question"
					v-for="(item, index) in value"
					:key="index"
				>
					<header class="faq_question">
						<span itemprop="name">{{ item.value_1 }}</span>
					</header>
					<div
						class="faq_answer"
						itemscope
						itemprop="acceptedAnswer"
						itemtype="https://schema.org/Answer"
					>
						<span itemprop="text" v-html="item.value_2"></span>
					</div>
				</section>
			</amp-accordion>
		</div>
	</section>
</template>

<script>
export default {
	name: 'app_faq',
	props: {
		value: Array,
		title: String
	},
	data() {
		return {}
	}
}
</script>
