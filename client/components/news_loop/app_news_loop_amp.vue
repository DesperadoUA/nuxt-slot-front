<template>
	<amp-script
		layout="container"
		:src="`${config.BASE_URL[config.LANG]}/js/amp-news.js`"
		class="sample"
	>
		<div class="useful-categories">
			<div class="container">
				<div class="useful-group">
					<NuxtLink
						v-for="(item, index) in currentPosts"
						:key="index"
						:to="`${config.AMP_PREFIX}${item.permalink}`"
						class="news-item"
					>
						<div class="news-item__img">
							<amp-img
								:src="item.thumbnail"
								:alt="item.title"
								class="news_thumbnail"
								layout="responsive"
								width="200"
								height="113"
							/>
						</div>
						<div class="news-item__txt">
							<span class="news-item__date">{{ item.create_at }}</span>
							<strong class="news-item__ttl" v-html="item.title" />
							<p v-html="item.short_desc"></p>
						</div>
					</NuxtLink>
					<div class="loadContainer"></div>
				</div>

				<div class="items-more casino-card__more">
					<button
						v-if="value.length > numberPostOnQuery * postCurrentPage"
						:data-apiUrl="`${config.API_URL[config.LANG]}news/search`"
						:data-postsOnQuery="numberPostOnQuery"
						:data-ampPrefix="config.AMP_PREFIX"
						:data-post-type="post_type"
						:data-post-url="post_url"
						class="btn-primary loadMoreBtn"
					>
						{{ translates.SHOW_MORE[config.LANG] }}
					</button>
				</div>
			</div>
		</div>
	</amp-script>
</template>

<script>
import { NEWS as NumberPostOnQuery } from '~/config/postLoader'
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_news_loop',
	props: {
		value: {
			type: Array,
			default: {}
		},
		post_type: {
			default: 'page',
			type: String
		},
		post_url: {
			default: 'news',
			type: String
		}
	},
	mixins: [translateMixin],
	data() {
		return {
			numberPostOnQuery: NumberPostOnQuery,
			postCurrentPage: 1
		}
	},
	computed: {
		currentPosts() {
			return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
		}
	}
}
</script>
