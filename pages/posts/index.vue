<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>

    <section class="featured-posts">
      <PostPreview
        v-for="post of previewPosts"
        :key="post.id"
        :id="post.id"
        :thumbnail="post.thumbnail"
        :title="post.title"
        :previewText="post.previewText"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from "~/components/Posts/PostPreview.vue";

export default {
  components: {
    PostPreview
  },
  fetch(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          previewPosts: [
            {
              id: 1,
              title: "Post One",
              previewText: "Text constent",
              thumbnail: "https://webfrontier.ru/images/slide1.jpg"
            },
            {
              id: 2,
              title: "Post two",
              previewText: "Text constent number tow",
              thumbnail: "https://webfrontier.ru/images/slide2.jpg"
            },
            {
              id: 3,
              title: "Post three",
              previewText: "Text constent threee",
              thumbnail: "https://webfrontier.ru/images/slide3.jpg"
            },
            {
              id: 3,
              title: "Post four",
              previewText: "Text constent threee",
              thumbnail: "https://webfrontier.ru/images/slide3.jpg"
            }
          ]
        });
      }, 2000);
    })
      .then(data => {
        context.store.commit('setPosts', data.previewPosts);
      })
      .catch(error => {
        context.error(new Error());
      });
  },
  computed: {
      previewPosts() {
          return this.$store.getters.loadedPosts;
    }
  }
};
</script>

<style>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  background-image: url("~assets/images/main-page-background.jpg");
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

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
