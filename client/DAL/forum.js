import axios from 'axios'
import config from './config'
class DAL_Forum {
    static addCandidate(data) {
        return axios.post(config.API_URL+'forum-user/add-candidate', data)
    }
    static login(data) {
        return axios.post(config.API_URL+'forum-user/login', data)
    }
    static logOut(data) {
        return axios.post(config.API_URL+'forum-user/logout', data)
    }
    static checkUser(data) {
        return axios.post(config.API_URL+'forum-user/check-user', data)
    }
}
export default DAL_Forum