<template>
  <div class="info">
    <h1> Info </h1>
    <h2> {{ message }} </h2>
    <input type="text" v-model='newmessage'><br>
    <input type="button" @click="updateMessage()" value="commit">
  </div>
</template>

<script>

export default {
  name: 'info',
  data () {
    return {
      message: this.$store.state.message,
      newmessage: ''
    }
  },
  methods: {
    updateMessage () {
      this.$store.dispatch('updatemessage', this.newmessage)
      this.message = this.$store.state.message
    }
  }
}
</script>
<style scoped>
  h1{
    color: rgb(8, 176, 80);
  }
</style>
