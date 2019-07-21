<template>
  <div class="task" v-bind:class="{g: (bcolor == 'g'), y: (bcolor == 'y'), b: (bcolor == 'b')}">
    <table>
      <tr>
        <th><p class="title">{{name}}</p></th>
        <th><span class="button" @click="addTask()"><p class="add">+</p></span></th>
      </tr>
      <tr v-for="(task, index) in list">
        <td colspan="2" v-on:click="show(task)" v-if="task.status == status">
          <label >{{index}}{{ task.title }}</label>
        </td>
      </tr>
    </table>
    {{ test }}
    <div id="modal" class="modal">
      <div class="modal-content">
        <div class="modal-body">
          <h1>{{shown.title}}</h1>
          <p>{{name}}</p>
          <input type="button" @click="hide">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'task',
    data: function () {
      return {
        list: [],
        test: null,
        status: null,
        shown: {
          title: null,
          text: null
        }
      }
    },
    props: {
      bcolor: String,
      name: String
    },
    mounted(){
      this.list = this.$store.state.task
      switch (this.name) {
        case '未着手':
          this.status = 'stock'
          break;
        case '実行中':
          this.status = 'running'
          break;
        case '完了':
          this.status = 'completion'
          break;
      }
    },
    methods: {
      show (task) {
        console.log(task.title)
        this.shown.title = task.title
        console.log('---------------')
        console.log(this.shown.title)
        var modal = document.getElementById('modal')
        modal.style.display = 'block'
      },
      hide () {
        var modal = document.getElementById('modal')
        this.shown.title = null
        modal.style.display = 'none'
      },
      addTask () {
        alert(this.name)
        console.log(this.list)
      },
      changeshow (task) {
        this.show[0].title = task.title
        this.show[0].text = task.info
        console.log(this.show)
      }
    }
  }
</script>
<style scoped>
  .task{
    width: 30%;
    height: 80%;
    display: inline-block;
    border-radius: 20px;
    margin: 0 10px;
  }
  .g{
    background-color: rgb(110, 221, 92);
  }
  .y{
    background-color: rgb(214, 221, 92);
  }
  .b{
    background-color: rgb(92, 163, 221);
  }
  .title{
    width: 80%;
    border-radius: 10px;
    text-align: left;
    font-size: 20px;
    background-color: rgb(255, 255, 255);
    float: left;
  }
  .button{
    cursor: pointer;
  }
  .add{
    width: 20%;
    float: right;
    font-size: 30px;
    margin: 10px 10px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    background-color: rgb(144, 144, 144);
    border-radius: 5px;
  }
  table{
    width: 95%;
    margin: 5% 2%;
    margin-top: 0;
  }
  td{
    width: 80%;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
  }

  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
  }

  .modal-content{
    background-color: white;
    width: 500px;
    margin: 40% auto;
  }
</style>
