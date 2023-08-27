<template>
    <section class="authorLinkSection" :class="variant">
        <div class="container">
            <div :class="align">
                <AuthorLinkAmp 
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
    import AuthorLinkAmp from '~/components/author/app-author-link_amp'
    export default {
        name: "app_author_link-container_amp",
        components: {AuthorLinkAmp},
        props: {
           ...AuthorLinkAmp.props,
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
