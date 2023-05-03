<template>
    <section class="authorLinkSection" :class="variant">
        <div class="container">
            <div :class="align">
                <AuthorLink 
                    :link="link"
                    :text="text"
                    :dataTime="dataTime"
                    :name="name"
                />
            </div>
        </div> 
    </section>   
</template>
<script>
    import AuthorLink from '~/components/author/app-author-link'
    export default {
        name: "app_author_link-container",
        components: {AuthorLink},
        props: {
           ...AuthorLink.props,
           variant: {
            type: String,
            default: ''
           },
           align: {
            type: String,
            default: ''
           }
        }
    }
</script>
<style scoped>
.authorLinkSection {
    background: var(--theme-bg-1);
}
.authorLinkSection.transparent {
    background: transparent;
}
.transparent::v-deep .leftPart {
    color: white
}
.transparent::v-deep .rightPart {
    color: white
}
.transparent::v-deep .leftPart a {
    color: white
}
.contentEnd {
    justify-content: flex-end;
    display: flex;
}
</style>
