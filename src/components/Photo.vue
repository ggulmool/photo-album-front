<template>
  <div>
    <router-link :to="`/album/${photo.album_id}/photo/${photo.id}`">
    <div class="project-image-wrapper">
      <img class="project-image" v-bind:src="photo.img_url">
      <div class="project-details">
        <span class="project-title">{{photo.title}}</span>
        <br/><br/>
        <span>{{photo.description}}</span>
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['photo']
}
</script>

<style scoped>
</style>
