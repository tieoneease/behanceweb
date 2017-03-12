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
          <div id="project-content">
            proj
          </div>
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
    openModal(event) {
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
  background-color: #def;
  opacity: 1;
  height: 95vh;
  width: 90vw;
  margin: 2.5vh auto;
  border-radius: 8px;
}

#project-content {
  max-width: 100%;
  background-color: blue;
  overflow: scroll;
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
