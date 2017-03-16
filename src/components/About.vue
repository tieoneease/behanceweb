<template>
  <div class="container">
    <navbar></navbar>
    <div class="wrapper">
      <div class="left-panel">
        <div class="ash-image">
        </div>
      </div>
      <div class="right-panel">
        text
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Nav'

export default {
  name: 'about',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  },
  components: {
    'navbar': Navbar
  }
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
}


.wrapper {
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.left-panel {
  width: 50%;
  background-color: #def;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-panel {
  width: 50%;
  background-color: #fdf;
}

.ash-image {
  background-image: url("../assets/picture.png")
}

</style>
