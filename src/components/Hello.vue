<template>
  <div class="container">
    <div class="left-panel"></div>
    <div class="right-panel">
      <div class="column">
        <div v-for="project in projectsFirstHalf">
          <div v-bind:style="{ backgroundImage: 'url(' + project.covers['404'] + ')'}" class="bubble">
          </div>
        </div>
      </div>
      <div class="column">
        <div v-for="project in projectsSecondHalf">
          <div v-bind:style="{ backgroundImage: 'url(' + project.covers['404'] + ')'}" class="bubble">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      projectsFirstHalf: [],
      projectsSecondHalf: []
    }
  },
  created () {
    this.fetchUserData()
  },
  methods: {
    fetchUserData() {
      this.$http.get('/user')
        .then(response => {
          let projects = response.data.projects
          const halfLength = Math.ceil(projects.length / 2)
          this.projectsFirstHalf = projects.splice(0,halfLength)
          this.projectsSecondHalf = projects
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

body {
  overflow:hidden;
}

::-webkit-scrollbar { 
  display: none; 
}

.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
}

.left-panel {
  width: 50%;
}

.middle-panel {
  width: 0%;
}

.right-panel {
  width: 50%;
  height: 100vh;
  display: flex;
  overflow: hidden;
}

.column {
  height: 100%;
  flex-grow: 1;
  overflow-y: scroll;
}

.bubble {
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 230px;
  height: 230px;
  overflow: hidden;
  box-shadow: -2px 2px 12px 0px rgba(100,100,100,0.71);
  margin: 15px auto;
}

.bubble img {
  height: 100%;
}

</style>
