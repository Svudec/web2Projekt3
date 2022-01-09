import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import SongCard from './components/SongCard.vue';
import store from "./store";

createApp(App).use(router).use(store)
.component('song-card', SongCard)
.mount("#app");
