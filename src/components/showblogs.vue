<template>
  <div id="show-blogs">
    <h1>List of All the Added Blogs </h1>
    <button v:onclick=''><router-link to ='/'>Add New Blog</router-link></button>
    <div v-for="blog in blogs" class="single-blog">
      <h1>{{blog.title}}</h1>
      <h2>{{blog.body}}</h2>
    </div>
  </div>
</template>

<script>

export default {

  data(){
    return  {
        blogs: []
    }
  },
  methods:{

  },
  created() {
    this.axios.get('http://jsonplaceholder.typicode.com/posts').then((response)=>{
          this.blogs = response.data.slice(0,10);
        });
  }
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
