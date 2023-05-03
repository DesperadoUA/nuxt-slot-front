import config from '~/config'
import TRANSLATE from '~/helpers/translate.json'
import app_author_link from '~/components/author/app-author-link'
export default {
    components: {app_author_link},
    created() {
        this.$options.authorPageLink = config.AUTHOR_PAGE_LINK
        this.$options.reviewAuthor = TRANSLATE.REVIEW_AUTHOR[config.LANG]
    }
}