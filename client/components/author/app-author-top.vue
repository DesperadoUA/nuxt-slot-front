<template>
  <div class="container">
    <div class="author_top">
      <div class="left_part">
        <div class="img_wrapper">
          <img :src='img' />
        </div>
      </div>
      <div class="right_part">
        <h1 class="name">{{ name }}</h1>
        <div class="specialty">{{ specialty }} </div>
        <div class="linksWrapper">
          <div class="imgItem" v-for="(item, index) in socialLinks"  :key="index">
            <a :href="item.value_1">
              <img :src='item.src' width="40px" />
            </a>
          </div>
        </div>
        <div class="shortDesc">
          {{ shortDesc }} 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "app_author_top",
        props: {
            img: {
              type: String,
              default: ''
            },
            name: {
              type: String,
              default: ''
            },
            link: {
              type: String,
              default: ''
            },
            shortDesc: {
              type: String,
              default: ''
            },
            specialty: {
              type: String,
              default: ''
            },
            socialLinks: {
              type: Array,
              default: []
            }
        }
    }
</script>
<style scoped>
.author_top {
  display: flex;
}
.left_part {
  padding: 15px;
  box-sizing: border-box;
}
.img_wrapper {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  max-width: 250px;
  max-height: 250px;
}
.left_part img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.right_part {
  flex-grow: 1;
  padding: 15px 35px;
}
.name, .specialty {
    font-family: var(--base-font-family);
    line-height: var(--base-line-height);
    color: var(--theme-cr-txt-alt);
    box-sizing: border-box;
    font-size: 24px;
    font-weight: bold;
}
.specialty {
  color: var(--btn-secondary);
}
.shortDesc {
    padding: 15px 0px;
    font-family: var(--base-font-family);
    color: var(--theme-cr-txt-alt);
    font-weight: 500;
    font-size: 16px;
    font-style: italic;
    line-height: 170%;
}
@media (max-width: 767px) {
  .author_top {
    flex-wrap: wrap;
  }
  .left_part, .right_part {
    width: 100%;
  }
  .right_part { 
    padding-left: 0px;
    padding-right: 0px;
  }
  .img_wrapper {
    margin: 0 auto;
  }
}
.linksWrapper {
  display: flex;
}
.imgItem {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
