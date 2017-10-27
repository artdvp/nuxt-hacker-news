<template>
  <div class="f1 code">
    Hello Nuxt
    <ul>
      <li v-for="user in users" :key="user.id">
        {{user.login}}
      </li>
    </ul>

  </div>
</template>

<script>
  //import axios from "~/plugins/axios"
  import {mapState} from "vuex"
  export default {
    // asyncData(){
    //   return axios.get("users")
    //   .then(res => ({
    //     users: res.data
    //   }))
    // }
    computed: mapState([
      "users"
    ])
  }
</script>