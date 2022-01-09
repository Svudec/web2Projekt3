<template>
  <h2>Muzika</h2>
  <h5>Uspješno obrisana pjesma {{lastSong.title}} od {{lastSong.artist}}</h5>
  <div class="container">
    <!-- <ul>
      <li v-for="song in songs" :key="song.id">{{ song.title }}</li>
    </ul> -->
    <song-card
      v-for="song in songs"
      :key="song.id"
      v-bind:song="song"
      @song-deleted="recipeUpdated"
    ></song-card>
  </div>
</template>

<script>
export default {
    data(){ return {
        lastSong: null
    }
    },
  methods: {
    songDeleted(song) {
      this.lastSong = song;
    },
  },
  computed: {
    songs() { 
      return this.$store.getters.getSongs;
    }
  },
  mounted() {
    if(this.songs.length === 0){
        this.$store.dispatch("getSongsFromDb");
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
}
</style>
