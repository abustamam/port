<template>
  <section class="container">
    <h1 class="title">
      Camper
    </h1>
    <div class="app">
      <div class="loading" v-if="loading">Loading...</div>
      <div class="col">

      </div>
      <div class="col">

      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  computed: {
    loading() { 
      console.log('LOADED')
      return this.$store.state.camper.loading
    },
    users() {
      return this.$store.state.camper.users
    }
  },
  fetch({store}) {
    console.log('FETCHING')
    store.dispatch('camper/fetchUsers')
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
