<template>
  <div class="container">
    <div v-if="!animated" class="animation-overlay">
      <div class="title">
        <h1>Ashley Chen</h1>
        <h2>Maker | Designer</h2>
      </div>
      <div class="donut-string">
        <div class="string">
        </div>
        <img id="donut" src="../assets/ass.svg">
      </div>
    </div>
    <navbar></navbar>
    <div class="content-wrapper">
      <div class="content">
        <project v-on:clicked="openModal" v-for="project in projects" :project="project" :key="project.id"></project>
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
          <project-module v-for="module in projectModules" :project="module" :key="module.id"></project-module>
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
import Navbar from './Nav'
import {TweenLite} from 'gsap'

export default {
  name: 'hello',
  props: ['animated'],
  data () {
    return {
      projects: [],
      modalActive: false,
      projectModules: [],
      activeProject: {},
    }
  },
  created () {
    this.fetchUserData()
  },
  mounted () {
    if (!this.animated) this.animate()
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
    },
    animate() {
      let donut = document.getElementById('donut')
      let string = document.querySelector('.string')
      let title = document.querySelector('.title')
      let animationOverlay = document.querySelector('.animation-overlay')
      let startingDelay = 1
      TweenLite.to(donut, 2.4, { y: 525, delay: startingDelay, ease: Elastic.easeOut.config(1, 0.3) })
      TweenLite.to(string, 2.4, { y: 525, delay: startingDelay, ease: Elastic.easeOut.config(1, 0.3) })
      TweenLite.to(title, 5, { opacity: 1, delay: startingDelay + 1, ease: Elastic.easeOut.config(1, 0.3) })
      TweenLite.to(donut, .9, { rotationZ: 22, delay: startingDelay + .5, ease: Back.easeOut})
      TweenLite.to(donut, 1.2, { rotationZ: -10, delay: startingDelay + .6, ease: Back.easeOut.config(1.7)})
      TweenLite.to(donut, 1.2, { rotationZ: 0, delay: startingDelay + .6, ease: Back.easeOut.config(1.7)})
      TweenLite.to(donut, .5, { y: 2000 , delay: startingDelay + 2.3, ease: Sine.easeIn})
      TweenLite.to(string, .5, { y: 2000 , delay: startingDelay + 2.3, ease: Sine.easeIn})
      TweenLite.to(string, .5, { y: 2000 , delay: startingDelay + 2.3, ease: Sine.easeIn})
      TweenLite.to(animationOverlay, .5, { y: 2000 , delay: startingDelay + 2.3, ease: Sine.easeIn})
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
.animation-overlay {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 9999;
  display: flex;
}

.invisible {
  display: none;
}

.title {
  width: 30vw;
  height: 12vh;
  position: absolute;
  left: 15vw;
  top: 36vh;
  text-align: center;
  opacity: 0;
}

#donut {
  position: absolute;
  width: 200px;
  height: 200px;
  z-index: 10000;
  margin: 0 auto;
  transform: translateX(-100px);
}

.donut-string {
  margin: 0 auto;
  margin-top: -1200px;
}

.string {
  margin: 0 auto;
  border-left: medium black solid;
  height: 1000px;
  margin-bottom: -2px;
}

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
</style>
