<template>
  <div class="music-card">
    <div class="image">
      <img src="@/assets/music.jpg" />
    </div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="info">
      <h2 class="title">{{song.title}}</h2>
      <h3 class="artist">{{song.artist}}</h3>
      <button @click="deleteSong">Izbriši</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["songDelete"],
  props: ["song"],
  methods: {
    async deleteSong() {
      await this.$store.dispatch("deleteSong", { id: this.song.id });
      this.$emit("songDelete", this.song);
    },
  },
};
</script>

<style scoped>
@-webkit-keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
body {
  background: #fafafa;
}

.music-card {
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  position: relative;
  width: 280px;
  height: 400px;
  margin-bottom: 3rem;
}
.music-card > .image img {
  position: absolute;
  z-index: 1;
  opacity: 0.3;
  height: 210px;
  width: 280px;
}
.music-card > .image:after {
  height: 80px;
  content: "";
  top: 200px;
  position: absolute;
  width: 100%;
  z-index: 1;
  background: linear-gradient(rgba(221, 65, 127, 0), #dd417f);
}
.music-card > .wave {
  position: absolute;
  height: 640px;
  width: 640px;
  opacity: 0.6;
  left: 0;
  top: 0;
  margin-left: -70%;
  margin-top: -130%;
  border-radius: 40%;
  background: radial-gradient(#b01de8, #f34235);
  -webkit-animation: spin 3000ms infinite linear;
  animation: spin 3000ms infinite linear;
}
.music-card > .wave:nth-child(2) {
  top: 10px;
  -webkit-animation: spin 4000ms infinite linear;
  animation: spin 4000ms infinite linear;
}
.music-card > .wave:nth-child(3) {
  top: 10px;
  -webkit-animation: spin 5000ms infinite linear;
  animation: spin 5000ms infinite linear;
}
.music-card > .info {
  position: absolute;
  bottom: 7px;
  left: 0;
  right: 0;
  text-align: center;
}
.music-card > .info > .title {
  font-size: 1.3em;
  font-weight: 400;
  font-family: "Playfair display";
  color: #333;
  margin-bottom: 8px;
}
.music-card > .info > .artist {
  font-family: "Source sans pro";
  color: #cfcfcf;
  font-size: 0.8em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
</style>
