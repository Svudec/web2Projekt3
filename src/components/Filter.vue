<script>
export default {
  emits: ["songFilterChange"],
  data() {
    return {
      filterTitle: "",
      filterArtist: "",
    };
  },
  methods: {
    changeFilter() {
      this.$emit("songFilterChange", {title: this.filterTitle, artist: this.filterArtist});
    },
  },
};
</script>
