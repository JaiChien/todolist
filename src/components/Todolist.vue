<template>
  <div class="todolist">
    <b-container class="bv-example-row">
      <b-row>

        <b-input-group prepend="待辦事項" class="mt-3">
          <b-form-input placeholder="準備要做的事情"></b-form-input>
          <b-input-group-append>
            <b-button variant="success">新增</b-button>
          </b-input-group-append>
        </b-input-group>
        <b-tabs content-class="mt-3" class="mt-3">
          <b-tab title="全部" active>
            
            <b-list-group>
              <b-list-group-item>
                <b-form-checkbox
                  v-model="status"
                  value="accepted"
                  unchecked-value="not_accepted">
                  123
                </b-form-checkbox>
              </b-list-group-item>
            </b-list-group>

          </b-tab>
          <b-tab title="進行"><p>I'm the second tab</p></b-tab>
          <b-tab title="已完成"><p>I'm a disabled tab!</p></b-tab>
        </b-tabs>
        <b-container class="bv-example-row">
          <b-row content-class="mt-3" class="mt-2">
            <b-col style="text-align: left;" class="mt-2">還有 N 筆任務未完成</b-col>
            <b-col class="right-col"><p class="right-btn clear">清除所有任務</p></b-col>
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
    status: Boolean,
  }
})

export default class Todolist extends Vue {
  msg!: string
  status = false

  itemClick(){
    this.status=!this.status
    console.log("item click", this.status)
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
.right-btn.clear { 
  cursor: pointer;
}
</style>
