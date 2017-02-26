<template>
  <div class="app-content">
    <my-header/>
    <div class="content">
      <nuxt/>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import MyHeader from '~components/Header.vue'
import MyFooter from '~components/Footer.vue'

export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="sass">
.app-content
  display: flex
  flex-direction: column
  min-height: 100vh

.container
  margin: 0
  width: 100%
  padding: 0 50px 50px 50px
  display: flex
  flex: 1
  flex-direction: column

.content
  display: flex
  flex-direction: column
  flex: 1

.button,
.button:visited
  display: inline-block
  color: #3B8070
  letter-spacing: 1px
  background-color: #fff
  border: 2px solid #3B8070
  text-decoration: none
  text-transform: uppercase
  padding: 15px 45px

.button:hover,
.button:focus
  color: #fff
  background-color: #3B8070

.title
  color: #505153
  font-weight: 300
  font-size: 2.5em
  margin: 0
</style>
