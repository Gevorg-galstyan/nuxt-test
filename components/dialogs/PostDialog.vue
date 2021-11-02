<template>
  <v-dialog
    :value='selectedPost'
    width="500"
    @input="$emit('input')"
  >
    <v-card>
      <v-card-title class="text-h5">
        {{ selectedPost.title }}
      </v-card-title>

      <v-card-text>
        {{ selectedPost.description }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="$emit('input')"
        >
          close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'PostDialog',
  model: {
    prop: 'selectedPost',
    event: 'input',
  },
  props: {
    selectedPost: {
      type: Object,
      default: () => ({}),
    }
  }
}
</script>
