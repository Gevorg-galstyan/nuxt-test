export const state = () => ({
  posts: [],
})

export const mutations = {
  saveListItem(state, post) {
    state.posts.push(post)
  },
  deleteListItem(state, id) {
    state.posts = state.posts.filter(post => post.id !== id);
  }
}

export const getters = {
  posts: state => state.posts
}
