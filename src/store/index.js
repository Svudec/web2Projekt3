import { createStore } from "vuex";

export default createStore({
    state: {
        songs: [],
    },
    mutations: {
        setSongs(store, songs) {
            store.songs = songs;
        },
    },
    getters: {
        getSongs(store) {
            return store.songs || [];
        },
        getSongById: (state, getters) => (id) => {
            return getters.songs.find(song => song.id === id);
        }
    },
    actions: {
        async getSongsFromDb(context) {
                    fetch("/songs.json").then(res => {
                        res.json().then(sngs => {
                            console.log(sngs)
                            context.commit("setSongs", sngs.songs)
                        })
                        .catch(parseErr => console.log(parseErr))
                    })
                    .catch(err => console.log(err));
        },
        async deleteSong(context, { id }) {
            context.commit("setSongs", context.getters.getSongs.filter((x) => x.id !== id));
        },
    },
    modules: {},
});
