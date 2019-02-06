<template>
  <Modal>
    <div slot="header">
      <h2>
        Photo Preview
        <a href="" class="modal-default-button" @click.prevent="onClose">&times;</a>
      </h2>
    </div>
    <div slot="body">
      <img style="height: 500px; width: 450px;" v-bind:src="photo.img_url" />
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal'
import MockAlbums from "../data/MockAlbums"

export default {
  data() {
    return {
      photo: {}
    }
  },
  created() {
    const albumId = this.$route.params.albumId
    const photoId = this.$route.params.photoId
    this.getPhoto(albumId, photoId)
  },
  components: {
    Modal
  },
  methods: {
    onClose() {
      this.$router.push(`/album/${this.photo.album_id}`)
    },
    getPhoto(albumId, photoId) {
      MockAlbums.photo(albumId, photoId)
        .then(data => {
          this.photo = data
        })
    }
  }
}
</script>

<style scoped>

</style>
