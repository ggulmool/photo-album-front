<template>
  <div>
    <div class="title-container">
      <div v-if="isLoading" >
        <h4 class="title">
          {{album.title}}
        </h4>
      </div>
    </div>
    <transition-group class="projects" name="projects" >
      <div class="project" v-bind:key="photo.id" v-for="photo in album.photos">
        <Photo :photo="photo"></Photo>
      </div>
    </transition-group>
    <router-view></router-view>
  </div>
</template>

<script>
import MockAlbums from "../data/MockAlbums"
import Photo from "./Photo"

export default {
  components: {
    Photo
  },
  data() {
    return {
      album: {},
      isLoading: false
    }
  },
  created() {
    this.getPhotos()
  },
  methods: {
    getPhotos() {
      MockAlbums.photos(this.$route.params.albumId)
        .then(data => {
          this.album = data
          this.isLoading = true
        })
    }
  }
}
</script>

<style scoped>
</style>
