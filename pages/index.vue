<template>
 <div class="code">
   <h1>Top</h1>
      <Items></Items>   
  </div>
</template>

<script>
  import Items from "~/components/Items.vue"
  import axios from '~/plugins/axios'

  export default {
    components: {
      Items
    },
    async fetch({store}) {
     await store.dispatch("LOAD_ITEMS","topstories.json")
    }
    // asyncData () {
    //   return axios.get('users')
    //     .then((res) => ({
    //       users: res.data
    //       // console.log(res.data)
    //     }))
    // }
  }
</script>