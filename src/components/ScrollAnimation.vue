<template>
<transition name="fade"
 mode="out-in"
 v-on:before-enter="beforeEnter"
 v-on:enter="enter"
 v-on:before-leave="beforeLeave"
 v-on:leave="leave">
  <slot></slot>
</transition>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  props: {
    duration: {
      default: false
    }
  },
  methods: {
    beforeEnter (el) {
      el.style.opacity = 0
    },
    enter (el, done) {
      var vm = this
      Velocity(el,
        { opacity: 1 },
        {
          duration: vm.duration ? vm.duration : 500,
          easing: [ 0.39, 0.67, 0.04, 0.98 ],
          complete: function () { done() } 
        }
      )
    },
    beforeLeave (el) {
      el.style.opacity = 1
    },
    leave (el, done) {
      var vm = this
      Velocity(el,
        { opacity: 0 },
        {
          duration: vm.duration ? vm.duration : 500,
          easing: [ 0.39, 0.67, 0.04, 0.98 ],
          complete: function () { done() }
        }
      )
    }
  }
}
</script>
