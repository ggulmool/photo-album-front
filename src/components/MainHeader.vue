<template>
  <nav class="header">
    <div class="header-logo">
      <router-link to="/">HOME</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainHeader"
}
</script>

<style scoped>
.header {
  flex: none;
  background-color: rgba(230, 232, 215, 0.26);
  height: 32px;
  padding: 4px;
}
.header a {
  display: block;
  height: 30px;
  line-height: 30px;
  text-decoration: none;
  color: rgba(54, 92, 220, 0.5);
}
</style>
