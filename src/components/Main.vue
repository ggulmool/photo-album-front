<template>
  <div>
  <div class="title-container">
    <div>
      <h3 class="title">
        My PhotoAlbum
      </h3>
    </div>
  </div>
  <transition-group class="projects" name="projects" >
    <div class="project" v-bind:key="album.id" v-for="album in albums">
      <router-link :to="`/album/${album.id}`">
      <div class="project-image-wrapper">
        <img class="project-image" v-bind:src="album.cover_img">
        <div class="project-details">
          <span class="project-title">{{album.title}}</span>
          <br/>
          <span>{{album.description}}</span>
        </div>
      </div>
      </router-link>
    </div>
  </transition-group>
</div>
</template>
<script>
import MockAlbums from '../data/MockAlbums'

export default {
  data() {
    return {
      albums: []
    }
  },
  created() {
    this.getAlbums()
  },
  methods: {
    getAlbums() {
      MockAlbums.albums().then(data => {
        this.albums = data
      })
    }
  }
}
</script>

<style scoped>
</style>
