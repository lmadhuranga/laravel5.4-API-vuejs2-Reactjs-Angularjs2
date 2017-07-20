<template>
   <div>
     <h1>Post list</h1>
     <ul v-if="posts && posts.length">
       <li v-for="post of posts">
         <p><strong>{{post.title}}</strong></p>
         <p>{{post.author}}</p>
       </li>
     </ul>

     <ul v-if="errors && errors.length">
       <li v-for="error of errors">
         {{error.message}}
       </li>
     </ul>
   </div>
</template>

<script>

  import axios from 'axios';

  export default {
    data: () => ({
      posts: [],
      errors: []
    }),

    // Fetches posts when the component is created.
    created() {


      axios.get(`http://localhost:3000/posts`)
              .then(response => {
                // JSON responses are automatically parsed.
                this.posts = response.data
                console.log('madd__msg_  this post',this.posts)
              })
              .catch(e => {
                  this.errors.push(e)
              })
    }
  }



</script>