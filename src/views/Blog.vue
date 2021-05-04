<template>
  <div class="min-h-screen">
    <div class="text-center py-16 text-2xl font-semibold">
      <Titulo texto="Lista de Post publicados - Con rutas dinamicas" />
    </div>
    <div class="pb-20" v-if="stado">
      <table class="xs:table-auto table-fixed">
        <thead>
          <tr>
            <th class="w-1/2 md:text-xl text-xs">Titulo</th>
            <th class="w-1/5 md:text-xl text-xs">Autor</th>
            <th class="w-1/5 md:text-xl text-xs">Comentarios</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in posts"
            :key="index"
            class="border-2 border-white"
          >
            <td class="border-r-2 pl-2 border-white hover:bg-blue-300">
              <router-link :to="`/blog/${item.id}`">
                <h2
                  class="font-normal py-3 text-xs md:text-xl hover:text-white"
                >
                  {{ item.title }}
                </h2>
              </router-link>
            </td>
            <td
              class="border-r-2 text-center text-xs md:text-base border-white py-2 px-2"
            >
              {{ item.userId }}
            </td>
            <td class="text-center">5</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>Cargando....!</div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Titulo from "../components/Titulo";
export default {
  components: {
    Titulo,
  },
  data() {
    return {
      arrayBlog: [],
    };
  },
  computed: {
    ...mapState(["posts", "comentarios", "usuarios", "todo", "stado"]),
  },
  methods: {
    ...mapActions(["todoElContenido"]),
    creandoPost() {
      const probando = this.posts.map((item, index) => {
        for (let i = 0; i < this.usuarios.length; i++) {
          if (item.userId == this.usuarios[i].id) {
            item.userId = this.usuarios[i].username;
          }
        }
        return item;
      });

      this.todoElContenido(probando);
    },
  },
  created() {},
};
</script>

<style>
</style>