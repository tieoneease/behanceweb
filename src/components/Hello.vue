<template>
  <div class="container">
    <navbar></navbar>
    <div class="content-wrapper">
      <div class="content">
        <project v-on:clicked="openModal" v-for="project in projects" :project="project" :key="project.id">
        </project>
      </div>
    </div>
    <fade>
      <div v-show="modalActive" @click="closeModal" class="modal-mask">
        <div class="project-modal">
          <div class="project-leader">
            <p class="project-header">{{activeProject.name}}</p>
          </div>
          <div class="project-description">
            <p class="project-text">{{activeProject.description}}</p>
          </div>
          <project-module v-for="module in projectModules" :project="module" :key="module.id">
          </project-module>
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
import ProjectModule from './ProjectModule'
import Velocity from 'velocity-animate'
import Navbar from './Nav'

export default {
  name: 'hello',
  data () {
    return {
      projects: [],
      modalActive: false,
      projectModules: [],
      activeProject: {}
    }
  },
  created () {
    this.fetchUserData()
  },
  methods: {
    fetchUserData() {
      this.$http.get('/user')
        .then(response => { this.projects = response.data.projects})
        .catch(error => { console.log(error) })
    },
    openModal(projectId) {
      this.$http.get('/projects/' + projectId)
        .then(response => {
          this.activeProject = response.data.project
          this.projectModules = this.activeProject.modules
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
    'project': ProjectBubble,
    'fade': Fade,
    'fade-group': FadeGroup,
    'scroll': Scroll,
    'project-module': ProjectModule,
    'navbar': Navbar
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
  max-width: 75vw;
  margin: 2.5vh auto;
  border-radius: 8px;
  overflow: scroll;
  transition: opacity 2s ease-in;
}

.project-header {
  font-weight: 800;
  font-size: 50px;
  margin: 0;
  padding-top: 2.5em;
}

.project-description {
  background-color: white;
  text-align: center;
  width: 100%;
}

.project-leader {
  background-color: white;
  text-align: center;
  width: 100%;
}

.project-text {
  margin: 0 auto;
  font-size: 34px;
  padding: 2em;
  max-width: 50%;
  font-weight: 300;
}

body {
  margin: 0;
  font-family: 'Lato', sans-serif;
}

a {
  font-size: 20px;
  text-decoration:  none;
  color: white;
}

a:active  {
  text-decoration:  underline;
  font-weight:      bold;
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
  flex-direction: column;
}


.content-wrapper {
  width: 100%;
  height: 100%;
  padding: 5em 0;
  overflow: scroll;
}


.content {
  margin: 0 auto;
  width: 75vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.bubble-icon {
}

.column {
  height: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  overflow-y: scroll;
}
</style>
