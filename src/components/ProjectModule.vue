<template>
<a target="_blank" :href="project.sizes['original']" v-if="project.type == 'image'"><img class="project-module"  v-bind:src="project.sizes['max_1920'] || project.sizes['original']">
</img></a>
<div class="project-module" v-else-if="project.type == 'text'" >
  <p class="project-text">
    {{project.text_plain}}
  </p>
</div>
<div class="project-video" v-else-if="project.type == 'video'" v-html="project.embed">
</div>
<div v-else>
</div>
</template>

<script>
export default {
  name: 'project-module',
  props: ['project'],
  data: function () {
    return {
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  }
}
</script>

<style>
.project-module {
  width: 100%;
  background-color: white;
  text-align: center;
}

.project-text {
  margin: 0 auto;
  font-size: 34px;
  padding: 5em;
  max-width: 50%;
  font-weight: 300;
}

.project-video {
  width: 100%;
  background-color: white;
  text-align: center;
  padding: 5em 0;
  box-sizing: border-box;
}
</style>
