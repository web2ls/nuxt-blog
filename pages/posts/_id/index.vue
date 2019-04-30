<template>
  <div class="single-post-page">
    <section class="post">
      <h1>Title of the post</h1>
      <div class="post-details">
        <div>Last updated DATE</div>
        <div>Written by NAME</div>
      </div>

      <div class="content">
        Post content
      </div>

      <div class="post-feedback">
        <p>field for feedback</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}

</style>
