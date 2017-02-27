<template>
  <section class="container">
    <h1 class="title">
      Camper
    </h1>
    <div class="app">
      <div class="loading" v-if="loading">Loading...</div>
      <div>
        <span>Display...</span>
        <div>All</div>
        <div>Recent</div>
      </div>
      <div class="table table-header">
        <div class="table-cell username">Username</div>
        <div class="table-cell points">All-time Points</div>
        <div class="table-cell points">Recent Points</div>
        <div class="table-cell update">Last updated</div>
      </div>
      <div class="table table-row" v-for="user in users">
        <div class="table-cell username">{{user.username}}</div>
        <div class="table-cell points">{{user.alltime}}</div>
        <div class="table-cell points">{{user.recent}}</div>
        <div class="table-cell update">{{user.lastUpdate}}</div>
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
@import 'assets/css/colors'
$margin-left: 50px

.title
  margin: $margin-left 0

.app
  display: flex
  flex-direction: column
  flex: 1

.table 
  flex: 1
  display: flex

  &-header
    font-weight: bolder

  &-cell
    display: flex
    padding: 15px
    border: solid 1px $active-link-color

.username
  // width: 100px
  flex: 2

.points
  // width: 50px
  flex: 1

.update
  // width: 150px
  flex: 3

.textarea
  width: 100%
  height: 100%
</style>
