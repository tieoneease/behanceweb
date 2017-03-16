<template>
    <div class="nav">
      <div class="badge">
        <img class="logo" src="../assets/ass2.svg">
        <h1>Ashley Chen</h1>
      </div>
      <div class="links-container">
        <div class="links">
          <router-link to="/about">About</router-link>
          <router-link :to="{ path: '/', query: { animated: true }}">Works</router-link>
        </div>
        <div class="icons">
          <a href="https://www.linkedin.com/in/aschen/" target="_blank"><i class="fa fa-linkedin-square fa-2x bubble-icon"></i></a>
          <a href="https://www.behance.net/achen041bd2" target="_blank"><i class="fa fa-behance-square fa-2x bubble-icon"></i></a>
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

.links:active  {
  font-weight:      bold;
}

.icons > * {
  margin-left: .5em;
}

.badge {
  display: flex;
}

.badge > h1 {
  font-weight: 200;
  margin-left: 1em;
}

.logo {
  height: 8em;
  margin-bottom: -3.5em;
}
</style>
