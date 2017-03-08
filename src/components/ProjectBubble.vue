<template>
<div class="bubble" v-bind:style="backgroundStyleObject">
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
  created () {
  },
  methods: {
  }
}
</script>

<style scoped>

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

.bubble:hover {

}

.bubble img {
  height: 100%;
}

</style>
