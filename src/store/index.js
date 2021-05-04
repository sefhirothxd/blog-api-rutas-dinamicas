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
			state.todo = payload;
		},
	},
	actions: {
		async cargarPosts({ commit }) {
			await axios
				.get(`https://jsonplaceholder.typicode.com/posts`)
				.then((res) => {
					commit('SET_POSTS', res.data);
				})
				.catch((e) => {
					console.log(e);
				});
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
		todoElContenido({ commit }, payload) {
			commit('SET_TODO', payload);
		},
	},
	modules: {},
});
