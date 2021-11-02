<template>
  <section>
    <v-card
      class='mx-auto pt-3'
      max-width='600'
    >

      <div class='text-center mb-5'>
        <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
          @click='showAddPostDialog = true'
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>

        <v-chip
          class="ma-2"
          color="success"
          outlined
        >
          Post count - {{ posts.length }}
        </v-chip>
      </div>

      <v-divider />

      <v-list
        v-for='post in posts'
        :key='post.id'
        flat
        three-line
      >
        <v-list-item-group>
          <v-list-item>
            <v-list-item-content @click='showMore(post)'>
              <v-list-item-title class='mb-2'>{{post.title}}</v-list-item-title>

              <v-list-item-subtitle>
                {{post.description}}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                fab
                dark
                small
                color='red'
                @click.prevent='$store.commit("deleteListItem", post.id)'
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>

          <v-divider />
        </v-list-item-group>
      </v-list>
    </v-card>

    <post-dialog
      v-if='selectedPost'
      v-model='selectedPost'
      @input='selectedPost = null'
    />

    <add-post-dialog
      v-if='showAddPostDialog'
      :show-add-post-dialog='showAddPostDialog'
      @input='showAddPostDialog = false'
      @save='savePost'
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import PostDialog from '~/components/dialogs/PostDialog'
import AddPostDialog from '~/components/dialogs/AddPostDialog'

export default {
  name: "Home",
  components:{
    AddPostDialog,
    PostDialog
  },
  data: () => ({
    showDialog: false,
    showAddPostDialog: false,
    selectedPost: null,
  }),
  computed: mapGetters(['posts']),
  methods: {
    showMore(event) {
      this.selectedPost = event;
    },
    savePost(post) {
      this.$store.commit('saveListItem', post);

      this.showAddPostDialog = false
    }
  }
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
