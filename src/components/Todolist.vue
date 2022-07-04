<template>
  <div class="todolist">
    <b-container class="bv-example-row">
      <b-row>

        <b-input-group prepend="待辦事項" class="mt-3">
          <b-form-input placeholder="準備要做的事情" v-model="text"></b-form-input>
          <b-input-group-append @click="appendItem()">
            <b-button variant="success">新增</b-button>
          </b-input-group-append>
        </b-input-group>

        <b-tabs content-class="mt-3" class="mt-3">
          <b-tab title="全部" active>
            
            <b-list-group>
              
              <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="(item, index) in todolist">
                <b-form-checkbox
                  v-model="item.isSelected">
                  <span :class="{ 'item-done':item.isSelected, 'item-normal':!item.isSelected }">{{item.text}}</span>
                </b-form-checkbox>
                <div class="pointer" @click="deleteItem(index)">
                  <font-awesome-icon icon="fa-solid fa-trash" />
                </div>
              </b-list-group-item>

            </b-list-group>

          </b-tab>
          <b-tab title="進行">
            <b-list-group>
              
              <b-list-group-item class="d-flex justify-content-between align-items-center" 
                v-for="(item, index) in getlist(false)">
                <b-form-checkbox
                  v-model="item.isSelected">
                  <span :class="{ 'item-done':item.isSelected, 'item-normal':!item.isSelected }">{{item.text}}</span>
                </b-form-checkbox>
                <div class="pointer" @click="deleteItem(index)">
                  <font-awesome-icon icon="fa-solid fa-trash" />
                </div>
              </b-list-group-item>

            </b-list-group>

          </b-tab>
          <b-tab title="已完成">

            <b-list-group>
              <b-list-group-item class="d-flex justify-content-between align-items-center" 
                v-for="(item, index) in getlist(true)"  v-show="item.isSelected">
                <b-form-checkbox
                  v-model="item.isSelected">
                  <span :class="{ 'item-done':item.isSelected, 'item-normal':!item.isSelected }">{{item.text}}</span>
                </b-form-checkbox>
                <div class="pointer" @click="deleteItem(index)">
                  <font-awesome-icon icon="fa-solid fa-trash" />
                </div>
              </b-list-group-item>
            </b-list-group>

          </b-tab>
        </b-tabs>
        <b-container class="bv-example-row">
          <b-row content-class="mt-3" class="mt-2">
            <b-col style="text-align: left;" class="mt-2">還有 {{getlist(false).length}} 筆任務未完成</b-col>
            <b-col class="right-col" @click="clearAllItem()"><p class="right-btn pointer">清除所有任務</p></b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  }
})

export default class Todolist extends Vue {
  msg!: string
  status = false
  todolist = new Array()
  text = null

  getlist(isDone:boolean){
    return this.todolist.filter(function(item) {
      return item.isSelected==isDone
    })
  }

  clearAllItem(){
    this.todolist = new Array()
  }

  deleteItem(index:number){
    console.log("item click", index)
    if (index > -1) {
       this.todolist.splice(index, 1);
    }
  }
  
  appendItem(){
    this.todolist.push({ "id": this.todolist.length, "text":this.text, isSelected:false })
    this.text = null
  }
  
  created(){
    console.log("created now")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right-col{
  position: relative;
}
.right-btn {
  position: relative !important;
  float: right !important;
}
.item-done {
  text-decoration: line-through;
}
.item-normal {
  text-decoration: null;
}
.pointer {
  cursor: pointer;
}
</style>
