<template>
<div class="bubble" @click="clicked" v-bind:style="backgroundStyleObject">
  <div class="overlay">
    <div class="project-info">
      <h1 class="project-name">{{project.name}}</h1>
      <h2 class="fields">{{fieldsString}}</h2>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'project-bubble',
  props: ['project'],
  data: function () {
    return {
      backgroundStyleObject: { backgroundImage: 'url(' + this.project.covers['404'] + ')'}
    }
  },
  computed: {
    fieldsString: function () {
      return this.project.fields.join(' // ')
    }
  },
  created () {
  },
  methods: {
    clicked: function() {
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped>

.bubble {
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 20vw;
  height: 20vw;
  box-shadow: -2px 2px 12px 0px rgba(100,100,100,0.71);
  margin: 20px 16px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  z-index: 10
}

.bubble:hover .project-info {
  opacity: 1;
}

.bubble:hover .overlay {
  opacity: .9;
}

.overlay {
  transition: opacity .4s ease-in-out;
  opacity: 0;
  background-color: #000;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.project-info {
  transition: opacity .5s ease-in-out;
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 8%;
  box-sizing: border-box;
}

.project-name, .fields {
  margin: 0;
  padding: 0;
}

.project-name {
  margin-bottom: .5em;
  font-weight: 500;
  font-size: 24px;
}

.fields {
  font-weight: 300;
  font-size: 16px;
}

.bubble img {
  height: 100%;
}

</style>
