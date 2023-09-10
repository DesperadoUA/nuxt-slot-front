<template>
	<div class="container">
		<div class="blog">
			<div class="blog__container">
				<NuxtLink
					:to="`${config.AMP_PREFIX}${item.permalink}`"
					class="blog-item"
					v-for="(item, index) in currentPosts"
					:key="index"
				>
					<span class="blog-item__media">
						<amp-img :src="item.thumbnail" alt="" width="345" height="200" layout="responsive" />
					</span>
					<span class="blog-item__caption">{{ item.title }}</span>
				</NuxtLink>
			</div>
			<div class="loadContainer blog__container"></div>
		</div>
		<div class="items-more casino-card__more">
			<button
				v-if="value.length > numberPostOnQuery * postCurrentPage"
				:data-apiUrl="`${config.API_URL[config.LANG]}blog/search`"
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
</template>

<script>
import { BLOG as NumberPostOnQuery } from '~/config/postLoader'
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_blog_downloads',
	mixins: [translateMixin],
	props: {
		value: {
			type: Array,
			default: []
		},
		post_type: {
			default: 'page',
			type: String
		},
		post_url: {
			default: 'blog',
			type: String
		}
	},
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
