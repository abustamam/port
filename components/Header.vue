<template>
  <header>
    <nav>
      <ul>
        <nuxt-link tag="li" to="/" exact>
          <a>Home</a>
        </nuxt-link>
        <nuxt-link tag="li" to="/markdown">
          <a>Markdown</a>
        </nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<style lang="sass">
@import 'assets/css/colors'

header
  border-bottom: 1px solid $border-color
  padding: 0 20px

nav
 // background-color: #333
 margin: 0
 overflow: hidden

 ul
  margin: 0
  padding: 0

  li
    list-style-type: none
    display: inline-block

    a
      // color: #aaa
      display: block
      line-height: 2em
      padding: 0.5em 0.5em
      text-decoration: none

</style>