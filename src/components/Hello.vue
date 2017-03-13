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
          <project-bubble v-on:clicked="openModal" v-for="project in projectsFirstHalf" :project="project" :key="project.id"></project-bubble>
          </fade-group>
        </div>
      </scroll>
      <div class="column">
        <fade-group :duration="1500" :delay="400">
          <project-bubble v-on:clicked="openModal" v-for="project in projectsSecondHalf" :project="project" :key="project.id"></project-bubble>
        </fade-group>
      </div>
    </div>
    <fade>
      <div v-show="modalActive" @click="closeModal" class="modal-mask">
        <div class="project-modal">
          <img class="project-module" v-for="module in projectModules" v-bind:src="module.type == 'image' ? module.sizes['max_1920']: null ">
            </img>
        </div>
      </div>
    </fade>
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
      modalActive: false,
      projectModules: []
    }
  },
  computed: {
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
    openModal(projectId) {
      this.$http.get('/projects/' + projectId)
        .then(response => {
          let project = response.data.project
          this.projectModules = project.modules
          console.log(this.projectModules[0].sizes)
        })
        .catch(error => {
          console.log(error)
        })

      this.modalActive = true
    },
    closeModal(event) {
      if (this.modalActive && event.target.className == "modal-mask")
        this.modalActive = false
    }
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

.modal-mask {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, .5);
  z-index: 9998;
}

.project-modal {
  opacity: 1;
  max-height: 95vh;
  max-width: 90vw;
  margin: 2.5vh auto;
  border-radius: 8px;
  overflow: scroll;
}

#project-content {
  max-width: 100%;
  overflow: auto;
}

.project-module {
  width: 100%;
  border-radius: inherit;
}


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
  overflow: hidden;
}

.left-panel {
  width: 50%;
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
  box-sizing: border-box;
  overflow-y: scroll;
}
</style>
