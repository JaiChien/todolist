<template>
  <div class="todolist">
    <b-input-group prepend="Username" class="mt-3">
      <b-form-input></b-form-input>
      <b-input-group-append>
        <b-button variant="outline-success">Button</b-button>
        <b-button variant="info">Button</b-button>
      </b-input-group-append>
    </b-input-group>
    <b-tabs content-class="mt-3">
      <b-tab title="First" active><p>I'm the first tab</p></b-tab>
      <b-tab title="Second"><p>I'm the second tab</p></b-tab>
      <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
