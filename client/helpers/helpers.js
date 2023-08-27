import config from '~/config'
import DAL_Options from '~/DAL/options'
import DAL_Settings from '~/DAL/settings'
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
    static refActivate(item){
        if(item.ref.length !== 0) {
            const min = 0
            const max = item.ref.length - 1
            const random = Math.floor(Math.random() * (max - min + 1)) + min
            window.open(item.ref[random], '_blank')
        }
    }
    static classRating(item){
        if(item.rating <= 33) return '--cr-rating: #f00'
        if(item.rating > 33 && item.rating <= 67) return '--cr-rating: #ffc700'
        if(item.rating > 67) return '--cr-rating: #0f6'
    }
    static getRef(item){
        if(item.ref.length !== 0) {
            const min = 0
            const max = item.ref.length - 1
            const random = Math.floor(Math.random() * (max - min + 1)) + min
            return item.ref[random]
        }
    }
    static headDataMixin(data, route) {
        data.body.currentUrl = route.path.startsWith(config.AMP_PREFIX) 
           ? config.BASE_URL[config.LANG] + route.path.replace(`${config.AMP_PREFIX}`, '') 
           : config.BASE_URL[config.LANG] + route.path
        data.body.index_seo = Number(data.body.index_seo) ? 'index' : 'noindex'
        data.body.follow = Number(data.body.follow) ? 'follow' : 'nofollow'
        data.body.ampUrl = config.BASE_URL[config.LANG] + config.AMP_PREFIX + route.path
        return data;
    }
    static optionsDataMixin(data, options) {
        data.body.options = {}
        options.forEach(el => data.body.options[el.key] = el.value)
        return data
    }
    static settingsDataMixin(data, settings) {
        data.body.settings = {}
        settings.forEach(el => data.body.settings[el.key] = el.value)
        return data
    }
    static async globalDataMixin(response, route) {
        const responseOptions = await DAL_Options.getOptions()
        const responseSettings = await DAL_Settings.getSettings()
        let data = this.headDataMixin(response.data, route)
        data = this.optionsDataMixin(data, responseOptions.data.body)
        data = this.settingsDataMixin(data, responseSettings.data.body)
        return data
    }
}