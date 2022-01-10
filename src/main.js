import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from './router';
import store from "./store";
import Filter from './components/Filter.vue';

const SongCard = defineAsyncComponent(() => import('./components/SongCard.vue'));

createApp(App).use(router).use(store)
    .component('song-card', SongCard)
    .component('song-filter', Filter)
    .mount("#app");
