<template>
  <div class="wrapper-filter">
    <form @submit.prevent="changeFilter">
      <input type="text" placeholder="Izvođač" v-model="filterArtist"/>
      <input type="text" placeholder="Naziv" v-model="filterTitle"/>
      <input type="submit" value="Filtriraj" />
    </form>
  </div>
</template>

<script>
export default {
  emits: ["songFilterChange"],
  data(){return {
      filterTitle: "",
      filterArtist: ""
  }},
  methods: {
    changeFilter() {
      this.$emit("songFilterChange", {
        songFilter: this.filterTitle,
        artistFilter: this.filterArtist,
      });
    },
  },
};
</script>

<style scoped>
.wrapper-filter {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

form {
  display: flex;
  flex-wrap: wrap;
}

form > input {
  flex: 2 1 10ch;
  margin: 0.5rem;
}

form > input[type="email"] {
  flex: 2 1 30ch;
}

input {
  border: none;
  background: hsl(0, 0%, 93%);
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
}

input[type="submit"] {
  background: hotpink;
  color: white;
  box-shadow: 0 0.75rem 0.5rem -0.5rem hsl(0, 50%, 80%);
}
</style>
