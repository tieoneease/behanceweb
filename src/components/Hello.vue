<template>
  <div class="container">
    <div class="left-panel">
      <h1>Ashley Chen</h1>
      <h2>UI / UX Designer </h2>
    </div>
    <div class="right-panel">
      <scroll>
        <div class="column">
          <fade-group :duration="2000">
          <project-bubble v-for="project in projectsFirstHalf" :project="project" :key="project.id"></project-bubble>
          </fade-group>
        </div>
      </scroll>
      <div class="column">
        <fade-group :duration="1500" :delay="400">
          <project-bubble v-for="project in projectsSecondHalf" :project="project" :key="project.id"></project-bubble>
        </fade-group>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectBubble from './ProjectBubble'
import FadeGroup from './FadeGroup'
import Fade from './Fade'
import Scroll from './ScrollAnimation'
import Velocity from 'velocity-animate'
export default {
  name: 'hello',
  data () {
    return {
      projectsFirstHalf: [],
      projectsSecondHalf: [],
      modalActive: false
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
    },
  },
  components: {
    'project-bubble': ProjectBubble,
    'fade': Fade,
    'fade-group': FadeGroup,
    'scroll': Scroll
  }
}
</script>

<style>

body {
  margin: 0;
  font-family: 'Lato', sans-serif;
}

::-webkit-scrollbar {
  display: none;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
}

.left-panel {
  width: 50%;
}


.right-panel {
  width: 50%;
  height: 100vh;
  display: flex;
}

.column {
  height: 100%;
  flex-grow: 1;
  box-sizing: border-box;
}
</style>
