import DAL_Forum from '~/DAL/forum'
export const state = () => ({
	tickets: {
		posts: [],
		currentCasino: '',
		content: '',
		userTickets: [],
		error: '',
		success: ''
	}
})
export const mutations = {
	setPosts(state, payload) {
		state.tickets.posts = payload
	},
	setCurrentCasino(state, payload) {
		state.tickets.currentCasino = payload
	},
	setContent(state, payload) {
		state.tickets.content = payload
	},
	setUserTickets(state, payload) {
		state.tickets.userTickets = payload
	},
	changeStatusAccordeon(state, payload) {
		const newState = []
		state.tickets.userTickets.forEach(item => {
			if (item.id === payload.id) {
				const currentItem = item
				currentItem.status_accordeon =
					currentItem.status_accordeon === 'close' ? 'open' : 'close'
				newState.push(currentItem)
			} else {
				newState.push(item)
			}
		})
		state.tickets.userTickets = newState
	},
	setError(state, payload) {
		state.tickets.error = payload
	},
	setSuccess(state, payload) {
		state.tickets.success = payload
	}
}
export const actions = {
	async setPosts({ commit }, payload) {
		const result = await DAL_Forum.listCasino(payload)
		if (result.data.confirm === 'ok') {
			commit('setPosts', result.data.body)
		}
	},
	setCurrentCasino({ commit }, payload) {
		commit('setCurrentCasino', payload)
	},
	setContent({ commit }, payload) {
		commit('setContent', payload)
	},
	changeStatusAccordeon({ commit }, payload) {
		commit('changeStatusAccordeon', payload)
	},
	async sendTicket({ commit }, payload) {
		const result = await DAL_Forum.addTicket(payload)
		if (result.data.confirm === 'ok') {
			commit('setSuccess', 'Жалоба отправлена на модерацию')
		} else {
			commit(
				'setError',
				'Превышен лимит отправки жалоб, в сутки можно отправить не более 3 жалоб'
			)
		}
	},
	async setUserTickets({ commit }, payload) {
		const result = await DAL_Forum.getUserTickets(payload)
		if (result.data.confirm === 'ok') {
			const payload = []
			result.data.body.forEach(element => {
				payload.push({
					id: element.id,
					status: element.status,
					admin_comment: element.admin_comment,
					close: element.close,
					created_at: element.created_at,
					thumbnail: element.thumbnail,
					title: element.title,
					content: element.content,
					status_accordeon: 'close'
				})
			})
			commit('setUserTickets', payload)
		}
	}
}
export const getters = {
	getPosts(state) {
		return state.tickets.posts
	},
	getCurrentCasino(state) {
		return state.tickets.currentCasino
	},
	getContent(state) {
		return state.tickets.content
	},
	getUserTickets(state) {
		return state.tickets.userTickets
	},
	getError(state) {
		return state.tickets.error
	},
	getSuccess(state) {
		return state.tickets.success
	}
}
