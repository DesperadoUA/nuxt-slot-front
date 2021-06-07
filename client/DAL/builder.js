import axios from 'axios'
import config from './config'

export default class JsonRequest {
    #options = {
        URL_API: config.API_URL,
        POST_TYPE: 'casino',
        URL: ''
    }
    postType(postType) {
        this.#options.POST_TYPE = postType
        return this
    }
    url(data){
        this.#options.URL = data
        return this
    }
    get(){
        return axios.get(this.#options.URL_API + this.#options.POST_TYPE+'/' + this.#options.URL)
    }
}