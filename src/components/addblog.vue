<template>
  <div id='add-blog'>
    <h2> Add a new Blog Post</h2>
    <form v-if="!submitted">
      <label> Blog Title: </label>
      <input type='text' v-model.lazy='blog.title' required/>
      <label> Blog content </label>
      <textarea v-model.lazy='blog.content'></textarea>
      <div id = 'checkboxes'>
        <label>Blog Categories : </label>
        <label>Personal</label>
        <input type='checkbox' value='personal' v-model='blog.categories' />
        <label>Education</label>
        <input type='checkbox' value='education' v-model='blog.categories'/>
        <label>Employement</label>
        <input type='checkbox' value='office' v-model='blog.categories'/>
      </div>
      <label> Author </label>
      <select v-model='blog.author'>
        <option v-for='authors in authorlist'>{{authors}}</option>
      </select>
      <p>
        <button v-on:click="postdata">Add to Blog </button>
      </p>
    </form>
    <div v-if="submitted">
      <p> Thanks for adding your own Blog!</p>
    </div>
    <div>
    <button v-on:click=""><router-link to="/show">Show Blogs List</router-link></button>
    </div>


    <div id ='preview'>
      <h3>preview</h3>
      <p>Blog Title:{{blog.title}}</p>
      <p>Blog content:</p>
      <p> {{blog.content}} </p>
      <p>Blog categories</p>
      <ul>
        <li v-for='category in blog.categories'>
          {{category}}
        </li>
      </ul>
      <p>Blog Author : {{blog.author}}</p>
    </div>



  </div>
</template>

<script>
export default {
  computed:{
    blog(){
      return this.$store.state.bloger;
    }
  },
  data() {
    return {
      authorlist:['inPerson','group','faculty'],
      submitted:false

    }
  },
  methods: {
    postdata : function(){
      this.axios.post('https://jsonplaceholder.typicode.com/posts',{
        title:this.blog.title,
        body:this.blog.content,
        userId:1
      }).then((data)=>{
        console.log(data);
      });
      this.submitted = true;

    }

  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>
