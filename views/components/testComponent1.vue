<template lang="pug">
  div
    h2 Component1
    p
      | This is a first Vue component.
      br
      | {{ msg }}
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello world!'
      }
    }
  }
</script>

<style scoped>
  p {
    color: red;
  }
</style>