export default class Helper {
    static sharedFB(settings){
        let link = 'https://www.facebook.com/sharer.php?s=100'
            link += '&p[url]=' + settings.url
            link += '&p[title]=' + settings.title
            link += '&p[summary]=' + settings.short_desc
            link += '&p[images][0]=' + settings.thumbnail
        return link
    }
    static sharedTwitter(settings){
        let link = 'https://twitter.com/share'
            link += '?text=' + settings.title
            link += '&related=truemisha&hashtags=' + '#casino'
            link += '&url=' + settings.url
        return link
    }
    static sharedVK(settings){
        let link = 'https://vkontakte.ru/share.php'
            link += '?url=' + settings.url
            link += '&title=' + settings.title
            link += '&description=' + settings.short_desc
            link += '&image=' + settings.url
            link += '&noparse=true'
        return link
    }
}