<template>
  <h2 class="text-centered">Muzika</h2>
  <song-filter @song-filter-change="filterChanged"></song-filter>
  <h5 v-if="lastSong" class="text-centered">
    Uspješno obrisana pjesma {{ lastSong.title }} od {{ lastSong.artist }}
  </h5>
  <div class="container">
    <song-card
      v-for="song in songs"
      :key="song.id"
      v-bind:song="song"
      @song-delete="songDeleted"
    ></song-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastSong: null,
      timer: null,
      filter: {
        songFilter: "",
        artistFilter: "",
      },
    };
  },
  methods: {
    filterChanged(newFilter) {
      //postavi state filter
      this.filter = newFilter;
    },
    songDeleted(song) {
      //postavi obavijest na 5 sekundi
      this.lastSong = song;
      if (this.timer !== null) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.lastSong = null;
        this.timer = null;
      }, 5000);

      //napuni ponovno pjesme ako je ovo bila zadnja
      if (this.songs.length === 0) {
        this.$store.dispatch("getSongsFromDb");
      }
    },
  },
  computed: {
    songs() {
      let lowFilTitle = this.filter.songFilter.toLowerCase();
      let lowFilArtist = this.filter.artistFilter.toLowerCase();
      return this.$store.getters.getSongs.filter((sng) => {
        let lowTitle = sng.title.toLowerCase();
        let lowArtist = sng.artist.toLowerCase();
        return (
          (lowFilTitle === "" ? true : lowTitle.startsWith(lowFilTitle)) && (lowArtist === "" ? true : lowArtist.startsWith(lowFilArtist))
        );
      });
    },
  },
  mounted() {
    if (this.songs.length === 0) {
      this.$store.dispatch("getSongsFromDb");
    }
  },
  unmounted() {
    if (this.timer !== null) {
      clearTimeout(this.timer);
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

.text-centered {
  text-align: center;
}
</style>
