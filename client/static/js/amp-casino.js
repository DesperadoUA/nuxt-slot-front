{
	const btn = document.querySelector('.loadMoreBtn')
	if (btn) {
		let posts = []
		let counter = 0
		const loadContainer = document.querySelector('.loadContainer')

		const dataSetApiUrl = btn.attributes.filter(
			item => item.name === 'data-apiurl'
		)
		const apiUrl = dataSetApiUrl.length ? dataSetApiUrl[0].value : ''

		const dataSetPostsOnQuery = btn.attributes.filter(
			item => item.name === 'data-postsonquery'
		)
		const postsOnQuery = dataSetPostsOnQuery.length
			? dataSetPostsOnQuery[0].value
			: 20

		const dataSetAmpPrefix = btn.attributes.filter(
			item => item.name === 'data-ampprefix'
		)
		const ampPrefix = dataSetAmpPrefix.length
			? dataSetAmpPrefix[0].value
			: '/amp'

		const dataSetPostType = btn.attributes.filter(
			item => item.name === 'data-post-type'
		)
		const postType = dataSetPostType.length ? dataSetPostType[0].value : 'page'

		const dataSetPostUrl = btn.attributes.filter(
			item => item.name === 'data-post-url'
		)
		const postUrl = dataSetPostUrl.length ? dataSetPostUrl[0].value : '/'

		const dataSetRating = btn.attributes.filter(
			item => item.name === 'data-translate-rating'
		)
		const rating = dataSetRating.length ? dataSetRating[0].value : ''

		const dataSetClosed = btn.attributes.filter(
			item => item.name === 'data-translate-closed'
		)
		const closed = dataSetClosed.length ? dataSetClosed[0].value : ''

		const dataSetWelcomeBonus = btn.attributes.filter(
			item => item.name === 'data-translate-welcome-bonus'
		)
		const welcomeBonus = dataSetWelcomeBonus.length
			? dataSetWelcomeBonus[0].value
			: ''

		const dataSetFreeSpins = btn.attributes.filter(
			item => item.name === 'data-translate-free-spins'
		)
		const freeSpins = dataSetFreeSpins.length ? dataSetFreeSpins[0].value : ''

		const dataSetCasinoReview = btn.attributes.filter(
			item => item.name === 'data-translate-casino-review'
		)
		const casinoReview = dataSetCasinoReview.length
			? dataSetCasinoReview[0].value
			: ''

		const dataSetGoTo = btn.attributes.filter(
			item => item.name === 'data-translate-go-to'
		)
		const goTo = dataSetGoTo.length ? dataSetGoTo[0].value : ''

		function classRating(item) {
			if (item.rating <= 33) return 'ratingf00'
			if (item.rating > 33 && item.rating <= 67) return 'ratingffc700'
			if (item.rating > 67) return 'rating0f6'
		}

		function renderTemplate(posts, counter) {
			const length =
				(counter + 1) * postsOnQuery > posts.length
					? posts.length
					: (counter + 1) * postsOnQuery
			let html = ''
			for (let i = counter * postsOnQuery; i < length; i++) {
				html += `<div class="casino-item">
                                <div class="casino-item__top">
                                    <div class="casino-item__logo">
                                        <a href="${ampPrefix}${
					posts[i].permalink
				}">
                                            <amp-img src="${
																							posts[i].thumbnail
																						}" alt="" width="245" height="140" />
                                        </a>
                                    </div>
                                    <div class="casino-item__rating">
                                        <div class="circle-rating">
                                            <svg viewBox="0 0 36 36" width="76" height="76" class="circle-rating__chart amp_rating_circle ${classRating(
																							posts[i]
																						)}">
                                                <path class="circle-rating__circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                                <path class="circle-rating__circle"
                                                    stroke-dasharray="${
																											posts[i].rating
																										}, 100"
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                            </svg>
                                            <div class="circle-rating__percentage">${
																							posts[i].rating
																						}</div>
                                        </div>
                                        <span class="casinos-rating__txt">${rating}</span>
                                    </div>
                                </div>
                                <div class="casino-item__content">`

				if (posts[i].close !== 1) {
					html += `<div class="casino-param">
                                    <div class="${
																			posts[i].regular_offers == 1
																				? 'casino-param__item'
																				: 'casino-param__item disabled'
																		}">
                                        <amp-img class="casino-param__img" src="/img/fire.svg" width="17" height="17" alt="" />
                                        <span class="casino-param__txt">Regular Offers</span>
                                    </div>

                                    <div class="${
																			posts[i].live_chat == 1
																				? 'casino-param__item'
																				: 'casino-param__item disabled'
																		}">
                                        <amp-img class="casino-param__img" src="/img/chat.svg" width="19" height="17" alt="" />
                                        <span class="casino-param__txt">Live Chat</span>
                                    </div>

                                    <div class="${
																			posts[i].live_casino == 1
																				? 'casino-param__item'
																				: 'casino-param__item disabled'
																		}">
                                        <amp-img class="casino-param__img" src="/img/casino.svg" width="19" height="17" alt="" />
                                        <span class="casino-param__txt">Live Casino</span>
                                    </div>

                                    <div class="${
																			posts[i].vip_program == 1
																				? 'casino-param__item'
																				: 'casino-param__item disabled'
																		}">
                                        <amp-img class="casino-param__img" src="/img/star.svg" width="17" height="17" alt="" />
                                        <span class="casino-param__txt">Vip Program</span>
                                    </div>
                                </div>`
				} else {
					html += `<div class="casino-param">
                                    <div class="casino-close">
                                        ${closed}
                                    </div>
                                </div>`
				}
				html += `<div class="casino-bonuses">
                                <div class="casino-bonus">
                                    <span class="casino-bonus__value colorffe600">${
																			posts[i].bonus
																		}</span>
                                    <span class="casino-bonus__ttl">${welcomeBonus}</span>
                                    <div class="casino-bonus__wager">${
																			posts[i].bonus_wagering
																		}</div>
                                </div>

                                <div class="casino-bonus">
                                    <span class="casino-bonus__value color12d4ff">${
																			posts[i].freespins
																		}</span>
                                    <span class="casino-bonus__ttl">${freeSpins}</span>

                                    <div class="casino-bonus__wager">${
																			posts[i].freespins_wagering
																		}</div>
                                </div>
                        </div>

                        <div class="casino-item__btns">
                            <a href="${ampPrefix}${posts[i].permalink}"
                               class="casino-item__btn --green">${casinoReview}
                            </a>
                            <a class="casino-item__btn --blue" href="${getRef(
															posts[i]
														)}">
                                ${goTo}
                            </a>
                        </div>
                    </div>
                </div>`
			}
			loadContainer.innerHTML += html
		}
		function isShowBtn(posts, counter) {
			return (counter + 1) * postsOnQuery < posts.length
		}
		function getRef(item) {
			if (item.ref.length !== 0) {
				const min = 0
				const max = item.ref.length - 1
				const random = Math.floor(Math.random() * (max - min + 1)) + min
				return item.ref[random]
			} else {
				return '#'
			}
		}
		btn.addEventListener('click', () => {
			if (counter === 0) {
				btn.disabled = true
				fetch(apiUrl, {
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					method: 'POST',
					body: JSON.stringify({ postType, postUrl })
				})
					.then(response => response.json())
					.then(data => {
						btn.disabled = false
						counter++
						posts = data.body.posts
						renderTemplate(posts, counter)
						if (!isShowBtn(posts, counter)) btn.remove()
					})
			} else {
				counter++
				renderTemplate(posts, counter)
				if (!isShowBtn(posts, counter)) btn.remove()
			}
		})
	}
}
/*
    pages: ['main'],
    category: ['popular-casino', 'licensed-casino', 'min-deposit-casino', 'max-payout-casino', 'free-bonus-casino'],
    postTypes: ['payment'] 
 */
