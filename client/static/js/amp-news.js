{
    const btn = document.querySelector('.loadMoreBtn')
    if(btn) {
         let posts = []
         let counter = 0
         const loadContainer = document.querySelector('.loadContainer')
 
         const dataSetApiUrl = btn.attributes.filter((item) => item.name === 'data-apiurl')
         const apiUrl = dataSetApiUrl.length ? dataSetApiUrl[0].value : ''
         
         const dataSetPostsOnQuery = btn.attributes.filter((item) => item.name === 'data-postsonquery')
         const postsOnQuery = dataSetPostsOnQuery.length ? dataSetPostsOnQuery[0].value : 20
         
         const dataSetAmpPrefix = btn.attributes.filter((item) => item.name === 'data-ampprefix')
         const ampPrefix = dataSetAmpPrefix.length ? dataSetAmpPrefix[0].value : '/amp'
         
         const dataSetPostType = btn.attributes.filter((item) => item.name === 'data-post-type')
         const postType = dataSetPostType.length ? dataSetPostType[0].value : 'page'
         
         const dataSetPostUrl = btn.attributes.filter((item) => item.name === 'data-post-url')
         const postUrl = dataSetPostUrl.length ? dataSetPostUrl[0].value : '/'

         function renderTemplate(posts, counter) {
                 const length = ((counter+1) * postsOnQuery) > posts.length ? posts.length : (counter+1) * postsOnQuery
                 let html = ''
                 for(let i = counter * postsOnQuery; i<length; i++) {
                    html += `<a href="${ampPrefix}${posts[i].permalink}" class="news-item">
                                <div class="news-item__img">
                                    <amp-img src="${posts[i].thumbnail}" alt="${posts[i].title}" class="news_thumbnail" width="200" height="113" />
                                </div>
                                <div class="news-item__txt">
                                    <span class="news-item__date">${posts[i].create_at}</span>
                                    <strong class="news-item__ttl">${posts[i].title}</strong>
                                    <p>${posts[i].short_desc}</p>
                                </div>
                            </a>`
                }
                loadContainer.innerHTML += html
             }
         function isShowBtn(posts, counter) {
                 return ((counter+1) * postsOnQuery) < posts.length
             }
         btn.addEventListener('click', () => {
             if(counter === 0) {
                 btn.disabled = true
                 fetch(apiUrl, {
                     headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
                     },
                     method: "POST",
                     body: JSON.stringify({postType, postUrl})
                 })
                 .then(response => response.json())
                 .then(data => {
                     btn.disabled = false
                     counter++
                     posts = data.body.posts
                     renderTemplate(posts, counter)
                     if(!isShowBtn(posts, counter)) btn.remove()
                 })
             } else {
                 counter++
                 renderTemplate(posts, counter)
                 if(!isShowBtn(posts, counter)) btn.remove()
             }
         })
    }
 }
 /*
    pages: ['news']
 */