<template>
  <div class="min-h-screen w-11/12 mx-auto">
    <div class="pt-10">
      <h1 class="text-center text-2xl">Ruta con parametros</h1>
      <p class="text-center text-xl">Parametro: {{ $route.params.id }}</p>
      <div class="mt-5 rounded-lg border-white border-2 py-5 px-5">
        <h2 class="mb-2">Titulo: {{ post.title }}</h2>
        <p class="border-white border-t-2 pt-2">Publicacion:</p>
        <p>{{ post.body }}</p>
      </div>
      <div class="py-5">
        <h2 class="mb-3 pl-3">Comentarios:</h2>
        <div
          class="mb-2 rounded-lg border-white border-2"
          v-for="(item, index) in comentario"
          :key="index"
        >
          <div class="py-2 px-3">
            <h3>Nombre: {{ item.name }}</h3>
            <p class="">Correo: {{ item.email }}</p>
          </div>
          <p class="border-t-2 border-white py-10 px-3">
            Mensaje: {{ item.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Titulo from "../components/Titulo";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Titulo,
  },
  methods: {
    ...mapActions(["cargarPost", "cargarComentario"]),
  },
  computed: {
    ...mapState(["post", "comentario"]),
  },
  created() {
    this.cargarPost(this.$route.params.id);
    this.cargarComentario(this.$route.params.id);
  },
};
</script>

<style>
</style>