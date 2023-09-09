import axios from 'axios'
import config from '../config'
class DAL_Forum {
	static addCandidate(data) {
		return axios.post(
			config.API_URL[config.LANG] + 'forum-user/add-candidate',
			data
		)
	}
	static login(data) {
		return axios.post(config.API_URL[config.LANG] + 'forum-user/login', data)
	}
	static logout(data) {
		return axios.post(config.API_URL[config.LANG] + 'forum-user/logout', data)
	}
	static checkUser(data) {
		return axios.post(
			config.API_URL[config.LANG] + 'forum-user/check-user',
			data
		)
	}
	static changePassword(data) {
		return axios.post(
			config.API_URL[config.LANG] + 'forum-user/change-password',
			data
		)
	}
	static deleteAccount(data) {
		return axios.post(
			config.API_URL[config.LANG] + 'forum-user/delete-account',
			data
		)
	}
	static addTicket(data) {
		return axios.post(config.API_URL[config.LANG] + 'tickets/store', data)
	}
	static listCasino(data) {
		return axios.post(config.API_URL[config.LANG] + 'tickets/listCasino', data)
	}
	static getUserTickets(data) {
		return axios.post(
			config.API_URL[config.LANG] + 'tickets/user-tickets',
			data
		)
	}
}
export default DAL_Forum
