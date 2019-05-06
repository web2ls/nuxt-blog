<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
        <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue';
import axios from 'axios';

export default {
    components: {
        AdminPostForm
    },
    layout: 'admin',
    methods: {
      onSubmitted(payload) {
          this.$store.dispatch('addPost', payload)
          .then(createdPost => {
            this.$router.push('/admin');
          })
      }
    }
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
