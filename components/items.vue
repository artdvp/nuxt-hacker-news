<template>
  <div class="code">
    <ul class="list pa2">
      <li v-for="item in items" :key="item.id">
        {{item.title}}
      </li>
    </ul>

  </div>
</template>

<script>
  //import axios from "~/plugins/axios"
  import { mapState } from "vuex"
  export default {
    // asyncData(){
    //   return axios.get("users")
    //   .then(res => ({
    //     users: res.data
    //   }))
    // }
    computed: mapState([
      "users",
      "ids",
      "items"
    ])
  }
</script>