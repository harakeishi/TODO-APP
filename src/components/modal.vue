<!---->
<template>
  <div class="">
    <modal name="edit-task">
      <p>{{title}}</p>
      <p>{{text}}</p>
      <button v-on:click="hide">hide</button>
    </modal>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        title: null
      }
    },
    props: ['title'],
    methods: {
      hide () {
        console.log(1)
        console.log(this.title)
        this.$modal.hide('edit-task')
      }
    }
  }
</script>
