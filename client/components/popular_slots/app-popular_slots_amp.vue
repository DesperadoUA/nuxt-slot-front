<template>
	<div class="slots">
		<div class="container">
			<div class="slots__heading">
				<h2 class="slots__ttl">{{ translates.POPULAR_SLOTS[config.LANG] }}</h2>
				<NuxtLink
					no-prefetch
					:to="`${config.AMP_PREFIX}/slots`"
					class="link-primary"
				>
					{{ translates.ALL_SLOTS[config.LANG] }}
				</NuxtLink>
			</div>

			<div class="slots__container">
				<NuxtLink
					class="slot-item"
					no-prefetch
					:to="`${config.AMP_PREFIX}${item.permalink}`"
					v-for="(item, index) in value"
					:key="index"
				>
					<div class="slot-item__logo">
						<amp-img :src="item.thumbnail" width="270" height="153" alt="" />
					</div>
					<div class="slot-item__content">
						<div class="slot-item__name">{{ item.title }}</div>
						<div class="slot-item__stats">
							{{ translates.RATING[config.LANG] }}
							<strong class="slot-item__stats-val">{{ item.rating }}</strong>
							<span class="slot-item__divider"></span>
							RTP <strong class="slot-item__stats-val">{{ item.rtp }}</strong>
						</div>
					</div>

					<div class="slot-item__btns">
						<button class="slot-item__btn --blue">
							{{ translates.PLAY[config.LANG] }}
						</button>
					</div>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script>
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_popular_slots',
	props: {
		value: {
			type: Array,
			default: []
		}
	},
	mixins: [translateMixin],
	data() {
		return {}
	}
}
</script>
