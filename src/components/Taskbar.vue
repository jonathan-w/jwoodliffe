<template>
  <div class="taskbar bg-control">
    START
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Taskbar',
  data() {
    return {
      open: false,
    };
  },
});
</script>

<style scoped lang="scss">
  .taskbar {
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
