<template>
  <v-dialog
    :value='showAddPostDialog'
    overlay-opacity='0.9'
    width='500'
    @input="$emit('input')"
  >
    <v-card>
      <v-card-title class='text-h5'>Add new post</v-card-title>

      <v-card-text>
        <v-form>
          <v-row>
            <v-col
              cols='12'
            >
              <v-text-field
                v-model='title'
                :rules='empty'
                label='Post title'
              ></v-text-field>
            </v-col>

            <v-col
              cols='12'
            >
              <v-textarea
                v-model='description'
                :rules='empty'
                outlined
                label='Description'
              ></v-textarea>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color='primary'
          text
          @click="$emit('input')"
        >
          Cancel
        </v-btn>
        <v-btn
          :disabled='!allFieldsFilled'
          color='warning'
          text
          @click="save"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AddPostDialog',
  model: {
    prop: 'showAddPostDialog',
    event: 'input'
  },
  props: {
    showAddPostDialog: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    title: '',
    description: '',
  }),
  computed: {
    empty: () => [
      text => !!text || 'Field is required'
    ],
    allFieldsFilled() {
      return !!this.title && !!this.description
    },
  },
  methods: {
    save() {
      const { title, description } = this;

      if (this.allFieldsFilled) {
        this.$emit('save', {
          title,
          description,
          id: Date.now(),
        })
      }
    }
  }
}
</script>
