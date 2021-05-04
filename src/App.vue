<template>
  <div id="app" class="fondo">
    <div class="max-w-5xl mx-auto text-white">
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["cargarPosts", "cargarUsuarios", "cargarComentarios"]),
  },
  created() {
    this.cargarPosts();
    this.cargarUsuarios();
    this.cargarComentarios();
  },
};
</script>
