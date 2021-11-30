<template>
  <div class = "home">
    <div class="container">
      <div class="row">
        <div class="row mt-5">
          test1
        </div>
        <div class="col-md-7">
          test2
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
    name: "News",

    data(){
      return {
        news: []
      }
    },

  created() {
    axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-10-19&sortBy=publishedAt&apiKey=d547e4173b4a4a838565cf33fa069dd8')
    .then(res => this.news = res.data)
    .catch(err => console.log(err));

    console.log(this.news)

  }


}


</script>

<style>

</style>