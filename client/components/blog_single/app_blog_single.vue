<template>
      <article class="blog-article">
        <h1 class="blog-article__ttl">{{value.h1}}</h1>
        <div class="article-media">
          <img :src="value.thumbnail" :alt="value.title" class="article-media__img">
        </div>

        <div class="blog-meta">
          <ul class="social-share">
            <li>
              <a :href="value.sharedFB">
                <svg class="social-share__icon" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle" cx="20" cy="20" r="19.5"/>
                  <path class="ico" d="M21.789 31.9999V21.5085H25.3269L25.8566 17.4198H21.789V14.8093C21.789 13.6256 22.1192 12.8188 23.8248 12.8188L26 12.8178V9.16093C25.6236 9.11129 24.3325 9 22.8304 9C19.6942 9 17.5471 10.9053 17.5471 14.4046V17.4199H14V21.5086H17.547V32L21.789 31.9999Z" />
                </svg>
              </a>
            </li>
<!--
            <li>
              <a href="">
                <svg class="social-share__icon" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle" cx="20" cy="20" r="19.5" />
                  <path class="ico" d="M8.28747 20.4035C8.28747 20.4035 17.5753 16.6717 20.7964 15.3577C22.0313 14.8321 26.2188 13.1501 26.2188 13.1501C26.2188 13.1501 28.1516 12.4143 27.9905 14.2013C27.9367 14.9372 27.5073 17.5127 27.0778 20.2984C26.4335 24.2405 25.7356 28.5505 25.7356 28.5505C25.7356 28.5505 25.6282 29.7595 24.7156 29.9697C23.8029 30.18 22.2996 29.2339 22.0313 29.0236C21.8165 28.866 18.0047 26.5007 16.6089 25.3443C16.2331 25.029 15.8036 24.3983 16.6625 23.6624C18.5953 21.9278 20.9038 19.7728 22.2996 18.4063C22.9439 17.7755 23.5881 16.3038 20.9038 18.0908C17.0921 20.6664 13.334 23.0842 13.334 23.0842C13.334 23.0842 12.475 23.6098 10.8644 23.1367C9.25378 22.6637 7.37474 22.033 7.37474 22.033C7.37474 22.033 6.08634 21.2445 8.28747 20.4035Z" />
                </svg>

              </a>
            </li>
-->
            <li>
              <a :href="value.sharedTwitter">
                <svg class="social-share__icon" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle" cx="20" cy="20" r="19.5" fill="white" stroke="#0194FF"/>
                  <path class="ico" d="M16.9753 29C24.1455 29 28.0666 22.4603 28.0666 16.7892C28.0666 16.6035 28.0631 16.4186 28.0555 16.2345C28.8185 15.6267 29.4769 14.8742 30 14.0122C29.3015 14.3541 28.5499 14.5842 27.7614 14.6879C28.5662 14.1566 29.1841 13.3161 29.4756 12.3142C28.7104 12.814 27.8732 13.1663 27.0003 13.3559C26.2889 12.5217 25.2762 12 24.1548 12C22.0021 12 20.2564 13.9219 20.2564 16.291C20.2564 16.6278 20.2907 16.9553 20.3576 17.2696C17.1177 17.0901 14.2449 15.3824 12.3222 12.7857C11.9759 13.4406 11.7938 14.1849 11.7944 14.9427C11.7944 16.4316 12.4825 17.746 13.5291 18.515C12.91 18.4942 12.3046 18.3101 11.7636 17.9783C11.7631 17.9963 11.7631 18.0138 11.7631 18.0331C11.7631 20.1115 13.1067 21.8468 14.8904 22.24C14.5554 22.3404 14.2097 22.3912 13.8625 22.391C13.6118 22.391 13.3674 22.3638 13.1299 22.3136C13.6262 24.0188 15.0652 25.2597 16.7714 25.2944C15.4372 26.4457 13.7565 27.1314 11.9298 27.1314C11.6191 27.1317 11.3086 27.1118 11 27.0719C12.7252 28.2894 14.7737 28.9997 16.9755 28.9997" />
                </svg>
              </a>
            </li>
          </ul>

          <span class="blog-meta__date">{{value.create_at | sliceData}}</span>
        </div>
        <app_content :value="value.content" />
      </article>
</template>

<script>
    import app_content from '~/components/content/app-content'
    export default {
        name: "app_blog_single",
        props: {
          'value': Object,
          default: {}
        },
        components: {app_content},
        filters:{
            sliceData(str) {
                return str.slice(0, 10)
            }
        }
    }
</script>

<style scoped lang="scss">


  .blog-article {
    padding: 40px 15px 20px 0;

  @media (min-width: 992px) {
    flex-shrink: 0;
    max-width: calc(100% - var(--last-article-width));
    flex-basis: calc(100% - var(--last-article-width));
    padding: 60px 7.322% 40px 0;
  }
  }

  .blog-article__ttl {
    font-size: 36px;
    line-height: 120%;
    margin-bottom: 24px;
  }

  .article-media {
    margin-bottom: 24px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

  img {
    border-radius: 10px;
  }
  }

  .blog-meta {
    margin-bottom: 24px;

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  }

  .blog-meta__date {
    color: var(--theme-cr-4);
    font-size: 15px;
    line-height: 1.8;
    margin-left: 15px;
  }
//------------------//
  .social-share {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;

  li {
  &:not(:first-child) {
     margin-left: 16px;
   }
  }
  }

  .social-share__icon {
    fill: none;
    display: block;

  .circle {
    transition: var(--transition-default);
    stroke: #00281c;
    opacity: .2;
  }

  .ico {
    transition: var(--transition-default);
    fill: var(--theme-cr-4);
  }

  @media (min-width: 992px) {
  &:hover {
    .circle {
      opacity: 1;
      fill: #fff;
      stroke: var(--btn-primary);
    }

    .ico {
      fill: var(--btn-primary);
    }
  }
  }
  }

  //------------------//
  .last-articles {
    background-color: #fff;
    padding: 40px 15px 20px;

  @media (min-width: 992px) {
    padding: 60px 28px 40px;
    flex-shrink: 0;
    flex-basis: var(--last-article-width);
    max-width: var(--last-article-width);
  }
  }

  .last-articles__ttl {
    font-size: 18px;
    line-height: 1.389;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  .articles-list {
    margin: 0;
    padding: 0;
    list-style: none;

  .date {
    color: var(--theme-cr-4);
    font-size: 14px;
    line-height: 1.8;
    opacity: .75;
    margin-bottom: 1px;
  }
  }

  .articles-list__item {
    font-size: 14px;
    line-height: 118.7%;
    display: flex;
    flex-direction: column;
    color: var(--theme-cr-4);
    text-decoration: none;
    padding-top: 4px;
    padding-bottom: 13px;
    border-bottom: 1px solid #281c4b19;

  @media (min-width: 992px) {
  &:hover {
    color: var(--btn-primary);
  }
  }
  }
  .article-media__img  {
    width:100%;
  }
</style>