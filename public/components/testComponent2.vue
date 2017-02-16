<template lang="pug">
  div.well
    h2 Component2
    p
      | This is a second Vue component.
      br
      | {{ msg }}
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello world again!'
      }
    }
  }
</script>

<style scoped>
  p {
    color: blue;
  }
</style>