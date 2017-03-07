<template>
  <div>
    {{ response }}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      response: 'Nothing loaded'
    }
  },
  created () {
    this.fetchUserData()
  },
  methods: {
    fetchUserData() {
      this.$http.get('/user')
        .then(response => { this.response = response.data })
        .catch(error => { this.response = error })
    }
  }
}
</script>

<style scoped>
</style>
