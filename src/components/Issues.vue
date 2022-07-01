<template>
  <div class="todolist">
    <b-container class="bv-example-row">
      <b-row>

        123

      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class Issues extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
