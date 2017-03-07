<template>
  <div>
    {{ response }}
  </div>
</template>

<script>
import axios from 'axios'
const url = 'http://www.behance.net/v2/users/achen041bd2/projects?client_id=TC4iMKLEasvhlXHID8WE4Wg7cLBNHPIH'
const url2 = 'https://api.behance.net/v2/users/achen041bd2?client_id=TC4iMKLEasvhlXHID8WE4Wg7cLBNHPIH'
const endpoint = '/users/achen041bd2/projects?client_id=TC4iMKLEasvhlXHID8WE4Wg7cLBNHPIH'
const api_key = 'TC4iMKLEasvhlXHID8WE4Wg7cLBNHPIH'

//import Behance from 'behance-api'
//const Be = new Behance(api_key)

export default {
  name: 'hello',
  data () {
    return {
      response: 'Nothing loaded'
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData() {
      /*
      this.$http.get(url2).then(response => {
        console.log('success: ', response.body)
        this.response = response.body
      }, response => {
        console.log('error: ', response)
        this.response = response
      })
*/

      /*
Be.projects({q: 'motorcycle'}, function(err, res, data) {
  if (err) { 
    throw err;
  }

  this.response =  data
})
      */
      axios.get(url2).then(response => {
        console.log('success: ', response)
        this.response = response
      }).catch(error => {
        console.log('error: ', error)
        this.response = error
      })
    }
  }
}
</script>

<style scoped>
</style>
