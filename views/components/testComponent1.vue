<template lang="pug">
  div.well
    h2 Component1
    p
      | This is a first Vue component.
      br
      | {{ msg }}
</template>

<script>
  module.exports = {
    data: function() {
      return {
        msg: 'Hello world!'
      }
    },
    created: function() {
      window.io.emit('test', {});
      this.sendHello();

    },
    methods: {
      sendHello: function () {
        this.$http.get('/hello').then((response) => response.json()).then((json) => {
          console.log(json);
        }, (response) => {
        });
      }
    }
  }
</script>

<style scoped>
  p {
    color: red;
  }
</style>