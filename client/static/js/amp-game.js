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

		const dataSetPlay = btn.attributes.filter(
			item => item.name === 'data-translate-play'
		)
		const play = dataSetPlay.length ? dataSetPlay[0].value : ''

		const dataSetRating = btn.attributes.filter(
			item => item.name === 'data-translate-rating'
		)
		const rating = dataSetRating.length ? dataSetRating[0].value : ''

		const dataSetNumberRows = btn.attributes.filter(
			item => item.name === 'data-translate-number-rows'
		)
		const numberRows = dataSetNumberRows.length
			? dataSetNumberRows[0].value
			: ''

		const dataSetMinBet = btn.attributes.filter(
			item => item.name === 'data-translate-min-bet'
		)
		const minBet = dataSetMinBet.length ? dataSetMinBet[0].value : ''

		const dataSetPayLines = btn.attributes.filter(
			item => item.name === 'data-translate-pay-lines'
		)
		const payLines = dataSetPayLines.length ? dataSetPayLines[0].value : ''

		const dataSetWheels = btn.attributes.filter(
			item => item.name === 'data-translate-wheels'
		)
		const wheels = dataSetWheels.length ? dataSetWheels[0].value : ''

		const dataSetVolatility = btn.attributes.filter(
			item => item.name === 'data-translate-volatility'
		)
		const volatility = dataSetVolatility.length
			? dataSetVolatility[0].value
			: ''

		const dataSetReview = btn.attributes.filter(
			item => item.name === 'data-translate-review'
		)
		const review = dataSetReview.length ? dataSetReview[0].value : ''

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
				html += `<div class="casino-card">
                                    <div class="casino-card__logo">
                                        <amp-img src="${
																					posts[i].thumbnail
																				}" alt="${
					posts[i].title
				}" width="284" height="162" />
                                    </div>
                        
                                    <div class="casino-card__rating">
                                        <div class="circle-rating">
                                            <svg viewBox="0 0 36 36" class="circle-rating__chart amp_rating_circle ${classRating(
																							posts[i]
																						)}">
                                                <path class="circle-rating__circle-bg" 
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                />
                                                <path class="circle-rating__circle" 
                                                    stroke-dasharray="${
																											posts[i].rating
																										}, 100" 
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                />
                                            </svg>
                                            <div class="circle-rating__percentage">${
																							posts[i].rating
																						}</div>
                                        </div>
                                        <span class="casinos-rating__txt">${rating}</span>
                                    </div>
                        
                                    <div class="casino-card-param">
                                        <div class="casino-card-param__item">
                                            <span class="casino-card-param__value">${
																							posts[i].number_rows
																						}</span>
                                            <span class="casino-card-param__txt">${numberRows}</span>
                                        </div>
                        
                                        <div class="casino-card-param__item">
                                            <span class="casino-card-param__value">${
																							posts[i].min_bet
																						}</span>
                                            <span class="casino-card-param__txt">${minBet}</span>
                                        </div>
                        
                                        <div class="casino-card-param__item">
                                            <span class="casino-card-param__value">${
																							posts[i].pay_lines
																						}</span>
                                            <span class="casino-card-param__txt">${payLines}</span>
                                        </div>
                        
                                        <div class="casino-card-param__item">
                                            <span class="casino-card-param__value">${
																							posts[i].reels
																						}</span>
                                            <span class="casino-card-param__txt">${wheels}</span>
                                        </div>
                                    </div>
                        
                                    <div class="casino-card-bonus">
                                        <span class="casino-card-bonus__value colorffe600">${
																					posts[i].volatility
																				}</span>
                                        <div class="casino-card-bonus__wager">${volatility}</div>
                                    </div>
                        
                                    <div class="casino-card-bonus">
                                        <span class="casino-card-bonus__value color12d4ff">${
																					posts[i].rtp
																				}</span>
                                        <div class="casino-card-bonus__wager">RTP</div>
                                    </div>
                                    <div class="casino-card__cta">
                                        <a href="${ampPrefix}${
					posts[i].permalink
				}"
                                            class="casino-card__cta btn-tertiary --green">${review}
                                        </a>
                                        <a class="casino-card__cta btn-tertiary" href="${getRef(
																					posts[i]
																				)}">
                                            ${play}
                                        </a>
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
    pages: ['slots']
    postTypes: ['vendor'] 
    category: ['new-slots', 'best-for-payout', 'bonus-pay', 'progressive', 'megaways']
 */
