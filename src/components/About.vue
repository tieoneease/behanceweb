<template>
  <div class="container">
    <navbar></navbar>
    <div class="wrapper">
      <div class="left-panel">
        <img class="ash-image" src="../assets/picture.png"></img>
      </div>
      <div class="right-panel">
        <div class="blurb">
          <p class="blurbtext">
          Hi, I’m Ashley Chen, but you can call me Ash. I’m a multi-disciplined designer who studies Industrial design and is graduating Rhode Island School of Design in 2017.</p>

          <p class="blurbtext">As a designer, I enjoy user-centric problem solving and conceptual thinking. Along with the implementation of hands-on approaches to problem-solving to find a harmonious balance between functionality and aesthetics.
          </p>
        </div>

        <div class="info">
          <div class="contact">
            <h1>Contact:</h1>
            <p>Ashley Chen</p>
            <p>Please feel free to e-mail me and say hi!</p>
            <p>achen04@risd.edu</p>
            <p>My Resume can be found <a class="resumelink" href="static/AshResume.pdf" target="_blank">here</a></p>
          </div>
          <div class="more">
            <h1>More Info:</h1>
            <p>I specialize in both UI/UX front-end design, along with product design. </p>
            <p>Previously, I have worked for companies such as Sharme Design and USAA as their front end research/ designer, along with organizations such as Partnership for Future Greater Providence. </p>
          </div>
        </div>
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
      pdfUrl: '../assets/resume.pdf'
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

<style>


.resumelink {
  color: black;
  text-decoration: underline;
}
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
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-panel {
  height: 100%;
  width: 55%;
}

.ash-image {
  height: 30vw;
}

.blurb {
  height: 55%;
  width: 100%;
  box-sizing: border-box;
  padding-top: 10em;
  padding-right: 6em;
}

.blurbtext {
  margin-top: 0;
  margin-bottom: 1em;
  font-size: 18px;
  box-sizing:border-box;
}

.info {
  height: 45%;
  width: 100%;
  display: flex;
}

.info p {
  font-size: 16px;
}

.contact {
  height: 100%;
  width: 50%;
}

.more {
  height: 100%;
  width: 50%;
  padding-right: 6em;
  box-sizing: border-box;
}

</style>
