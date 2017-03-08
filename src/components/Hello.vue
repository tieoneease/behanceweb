<template>
  <div class="container">
    <div class="left-panel"></div>
    <div class="right-panel">
      <div class="column">
        <project-bubble v-for="project in projectsFirstHalf" :project="project" :key="project.id"></project-bubble>
      </div>
      <div class="column">
        <project-bubble v-for="project in projectsSecondHalf" :project="project" :key="project.id"></project-bubble>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectBubble from './ProjectBubble.vue'
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
          console.log(this.projectsFirstHalf[0])
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  components: {
    'project-bubble': ProjectBubble
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
</style>
