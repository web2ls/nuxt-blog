<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmit" />
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
    asyncData(context) {
        console.log(context.params);
        return axios.get('https://nuxt-blog-ecb77.firebaseio.com/posts/' + context.params.postId + '.json')
        .then(res => {
            console.log('Loaded Post is: ', res.data);
            return {
                loadedPost: res.data
            }
        })
        .catch(error => {
            context.error(error)
        })
    },
    methods: {
        onSubmit(payload) {
            console.log(this.$route.params);
            this.$store.dispatch('editPost', {...payload, id: this.$route.params.postId})
            .then(updatedPost => {
                this.$router.push('/admin');
            })
        }
    },
    data() {
        return {
            loadedPost: {}
        }
    }
}
</script>

<style>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
