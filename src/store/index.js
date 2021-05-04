import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		posts: [],
		post: {},
		comentarios: [],
		comentario: {},
		usuarios: [],
		usuario: {},
		todo: [],
		stado: false,
	},
	mutations: {
		SET_POSTS(state, payload) {
			state.posts = payload;
			state.stado = true;
		},
		SET_POST(state, payload) {
			const postSelect = state.posts.filter((post) => {
				return post.id == payload;
			});

			state.post = postSelect[0];
		},
		SET_COMENTARIO(state, payload) {
			state.comentario = payload;
		},
		SET_COMENTARIOS(state, payload) {
			state.comentarios = payload;
		},
		SET_USUARIOS(state, payload) {
			// console.log('usuario: ', payload);
			state.usuarios = payload;
		},
		SET_TODO(state, payload) {
			const probando = state.posts.map((item, index) => {
				for (let i = 0; i < state.usuarios.length; i++) {
					if (item.userId == state.usuarios[i].id) {
						item.userId = state.usuarios[i].username;
					}
				}
				return item;
			});
			state.todo = probando;
			state.stado = true;
		},
	},
	actions: {
		async cargarPosts({ commit }) {
			const posts = await axios
				.get(`https://jsonplaceholder.typicode.com/posts`)
				.then((res) => {
					return res.data;
				})
				.catch((e) => {
					console.log(e);
				});
			commit('SET_POSTS', posts);
		},
		cargarComentario({ commit }, payload) {
			axios
				.get(`https://jsonplaceholder.typicode.com/posts/${payload}/comments`)
				.then((res) => {
					// console.log(res.data);
					commit('SET_COMENTARIO', res.data);
				})
				.catch((e) => {
					console.log(e);
				});
		},
		cargarComentarios({ commit }) {
			axios
				.get(`https://jsonplaceholder.typicode.com/comments`)
				.then((res) => {
					// console.log(res.data);
					commit('SET_COMENTARIOS', res.data);
				})
				.catch((e) => {
					console.log(e);
				});
		},
		cargarPost({ commit }, payload) {
			commit('SET_POST', payload);
		},
		cargarUsuarios({ commit }) {
			axios
				.get(`https://jsonplaceholder.typicode.com/users`)
				.then((res) => {
					// console.log(res.data);
					commit('SET_USUARIOS', res.data);
				})
				.catch((e) => {
					console.log(e);
				});
		},
		loading({ commit }) {
			commit('LOADING', payload);
		},
		todoElContenido({ commit }) {
			commit('SET_TODO');
		},
	},
	modules: {},
});
