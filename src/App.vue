<template>
  <div id="app">
    <main-header></main-header>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";

export default {
  components: {
    'MainHeader': MainHeader,
    'MainFooter': MainFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style>
html,body {
  margin:0;
  font-family: 'Dawning of a New Day', cursive;
}

.title-container {
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

.title {
  font-family: 'Dawning of a New Day', cursive;
  font-size:30pt;
  font-weight:normal;
}

.project-title {
  font-size:16pt;
  text-decoration: none;
  cursor: pointer;
}

.projects {
  margin-bottom:50px;
  margin-top:25px;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
}

.projects-enter {
  transform: scale(0.5) translatey(-80px);
  opacity:0;
}

.projects-leave-to{
  transform: translatey(30px);
  opacity:0;
}

.projects-leave-active {
  position: absolute;
  z-index:-1;
}

.project-details {
  text-align:center;
}

.project {
  transition: all .35s ease-in-out;
  margin:10px;
  box-shadow:0px 2px 8px lightgrey;
  border-radius:3px;
  width:180px;
  height:300px;
  display:flex;
  flex-direction:column;
  align-items:center;
}

.project-image-wrapper {
  position:relative;
}

.project-image {
  width:100%;
  height:150px;
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
}
</style>
