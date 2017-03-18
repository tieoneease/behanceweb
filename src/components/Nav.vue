<template>
    <div class="nav">
      <div class="badge">
        <h1 class="header">Ashley Chen</h1>
      </div>
      <div class="links-container">
        <div class="links">
          <router-link :to="{ path: '/about' }">About</router-link>
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

.header {
  height: 100%;
}

.nav {
  width: 100%;
  height: 90px !important;
  background-color: #111;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 2em 6em;
}

.links-container {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
}

.links {
  margin-right: 2em;
  box-sizing: border-box;
}

.links > * {
  margin-left: 2em;
  height: 100%;
  box-sizing: border-box;
}

a {
  font-size: 20px;
  text-decoration:  none;
  color: white;
}

.links:active {
  margin-left: 2em;
  padding: 0;
  box-sizing: border-box;
}

.icons > * {
  margin: 0;
  margin-left: .5em;
  box-sizing: border-box;
}

.badge {
  display: flex;
  height: 100%;
  box-sizing: border-box;
  justify-content: center;
}

.badge > h1 {
  font-weight: 200;
  height: 100%;
  margin: 0;
  margin-left: 1em;
  box-sizing: border-box;
}

.logobox {
  height: .1em;
  box-sizing: border-box;
}

.logo {
  height: 100%;
  box-sizing: border-box;
}
</style>
