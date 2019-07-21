<template>
  <div class="home">
    <div class="taskList stock board task">
      <table>
        <tr>
          <th><p class="title">未着手</p></th>
          <th><span class="button" @click="addTask('stock')"><p class="add">+</p></span></th>
        </tr>
        <tr v-for="(task, index) in list">
          <td colspan="2" v-on:click="show(task, index)" v-if="task.status == 'stock'">
            <label >{{ task.title }}</label>
            <star-rating v-model="task.rating" :star-size="20" inline :show-rating="false" :read-only="true"> </star-rating>
          </td>
        </tr>
      </table>
    </div>
    <div class="taskList running board task">
      <table>
        <tr>
          <th><p class="title">実行中</p></th>
          <th><span class="button" @click="addTask('running')"><p class="add">+</p></span></th>
        </tr>
        <tr v-for="(task, index) in list">
          <td colspan="2" v-on:click="show(task, index)" v-if="task.status == 'running'">
            <label >{{ task.title }}</label>
            <star-rating v-model="task.rating" :star-size="20" inline :show-rating="false" :read-only="true"> </star-rating>
          </td>
        </tr>
      </table>
    </div>
    <div class="taskList completion board task">
      <table>
        <tr>
          <th><p class="title">完了</p></th>
          <th><span class="button" @click="addTask('completion')"><p class="add">+</p></span></th>
        </tr>
        <tr v-for="(task, index) in list">
          <td colspan="2" v-on:click="show(task, index)" v-if="task.status == 'completion'">
            <label >{{ task.title }}</label>
            <star-rating v-model="task.rating" :star-size="20" inline :show-rating="false" :read-only="true"> </star-rating>
          </td>
        </tr>
      </table>
    </div>
    <modal name="popup" class="showBox" :adaptive="true" :draggable="true" :width="700" :height="400">
      <div class="main">
        <input type="text" v-model="shown.title" class="shownTitle" placeholder="タイトルを入力">
        <a>状態:</a>
        <select v-model="shown.status">
          <option>stock</option>
          <option>running</option>
          <option>completion</option>
        </select>
        <a>優先度:</a>
        <star-rating v-model="shown.rating" :star-size="20" inline> </star-rating>
        <textarea v-model="shown.info" rows="8" cols="80" class="shownInfo"></textarea>
        <button type="button" name="button" @click='applyTask'>
          <span v-if="isedit">適用</span>
          <span v-else>追加</span>
        </button>
        <button type="button" name="button" @click='delTask' v-if="isedit">
          <span>削除</span>
        </button>
      </div>
    </modal>
  </div>
</template>

<script>
import VModal from 'vue-js-modal'
import StarRating from 'vue-star-rating'
export default {
  name: 'home',
  data () {
    return {
      list: [],
      shown: {
        title: null,
        status: null,
        info: null,
        rating: 0
      },
      editIndex: null,
      isedit: false
    }
  },
  components: {
    StarRating
  },
  mounted() {
    // ステートのタスクリストを持ってくる
    this.list = this.$store.state.task
  },
  methods: {
    show (task, index) {
      this.shown.title = task.title
      this.shown.status = task.status
      this.shown.info = task.info
      this.shown.rating = task.rating
      this.editIndex = index
      this.isedit = true
      this.$modal.show('popup')
    },
    hide () {
      this.shown = []
      this.$modal.hide('popup')
    },
    addTask (status) {
      this.shown.title = null
      this.shown.status = status
      this.shown.info = null
      this.shown.rating = 0
      this.isedit = false
      this.$modal.show('popup')
    },
    applyTask () {
      if (!this.shown.title) {
        alert('タイトルを入力してください!!')
        return
      }
      if (this.isedit) {
        var i = this.editIndex
        var adder = ['title','status','info','rating']
        adder.title = this.shown.title
        adder.status = this.shown.status
        adder.info = this.shown.info
        adder.rating = this.shown.rating
        this.list.splice(i, 1, adder)
      } else {
        var adder = ['title','status','info']
        adder.title = this.shown.title
        adder.status = this.shown.status
        adder.info = this.shown.info
        adder.rating = this.shown.rating
        this.list.push(adder)
        this.shown.title = null
        this.shown.status = null
        this.shown.info = null
        this.shown.rating = 0
      }
      this.$modal.hide('popup')
    },
    delTask () {
      var i = this.editIndex
      this.list.splice(i, 1)
      this.$modal.hide('popup')
    }
  }
}
</script>
<style scoped>
  .home{
    width: 100%;
    height: 100%;
  }
  h1{
    color: rgb(8, 176, 80);
  }
  .board{
    top: 80px;
    display: inline-block;
    vertical-align: top;
  }
  .task{
    width: 30%;
    height: 80%;
    display: inline-block;
    border-radius: 20px;
    margin: 0 10px;
  }
  .stock{
    background-color: rgb(110, 221, 92);
  }
  .running{
    background-color: rgb(214, 221, 92);
  }
  .completion{
    background-color: rgb(92, 163, 221);
  }
  .title{
    width: 80%;
    border-radius: 10px;
    text-align: center;
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
  .showBox{
  }
  .main{
    display: block;
    width: 80%;
    margin: 0 auto;
  }
  .shownTitle{
    font-size: 5vw;
    width: 100%;
    color: rgb(163, 103, 124);
    font-weight: 400;
    border: solid 0px;
  }
  .shownInfo{
    width: 100%;
  }
</style>
