<template>
  <section class="container">
    <h1 class="title">
      Markdown
    </h1>
    <div class="app">
      <div class="col">
        <textarea class="textarea" v-model="text" @input="changeText"></textarea>
      </div>
      <div class="col">
        <div v-html="markedText"></div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapMutations} from 'vuex'
import marked from 'marked'

export default {
  data(context) {
    return {text: ''}
  },
  computed: {
    markedText() {return marked(this.$store.state.markdown.text)}
  },
  methods: {
    changeText(e) {this.$store.commit('markdown/changeText', e.target.value)}
  }
}
</script>

<style scoped lang="sass">
$margin-left: 50px

.title
  margin: $margin-left 0

.app
  display: flex
  flex: 1

.col 
  flex: 1

.textarea
  width: 100%
  height: 100%
</style>
