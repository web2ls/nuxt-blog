<template>
    <div class="posts-page">

        <section class="post-list">
          <PostPreview id="1" :is-admin = "isAdmin" thumbnail="https://webfrontier.ru/images/slide1.jpg" title="Post Number One" previewText="dfdsfdsfdsfdsfdsfdsfdsfdsfds" />
          <PostPreview id="2" :is-admin = "isAdmin" thumbnail="https://webfrontier.ru/images/slide2.jpg" title="Post Number Three" previewText="dfddfdf" />
          <PostPreview id="3" :is-admin = "isAdmin" thumbnail="https://webfrontier.ru/images/slide3.jpg" title="Post Number Four" previewText="dfqwrertsfdsfds" />
        </section>
    </div>
</template>

<script>
import PostPreview from "~/components/Posts/PostPreview.vue";

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  background-image: url('~assets/images/main-page-background.jpg');
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
