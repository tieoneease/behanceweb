<template>
    <div class="nav">
      <div class="badge">
        <h1>Ashley Chen</h1>
      </div>
      <div class="links-container">
        <div class="links">
          <router-link to="about">About</router-link>
          <router-link to="/">Works</router-link>
        </div>
        <div class="icons">
          <a href="#"><i class="fa fa-linkedin-square fa-2x bubble-icon"></i></a>
          <a href="#"><i class="fa fa-behance-square fa-2x bubble-icon"></i></a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'navbar',
}
</script>

<style>
.nav {
  width: 100%;
  height: 6em;
  background-color: #111;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 6em;
  box-sizing: border-box;
}

.links-container {
  display: flex;
  align-items: center;
}

.links {
  margin-right: 2em;
}

.links > * {
  margin-left: 2em;
}

.icons > * {
  margin-left: .5em;
}

.badge > h1 {
  font-weight: 200;
}
</style>
