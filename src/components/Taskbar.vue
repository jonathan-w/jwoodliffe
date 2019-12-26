<template>
  <div class="taskbar absolute bottom-0 left-0 w-full bg-control">
    <button>
      <img :src="startIcon" />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Taskbar',
  data() {
    return {
      open: false,
      startIcon: './img/start.png',
    };
  },
});
</script>

<style scoped lang="scss">
  .taskbar {
    height: 40px;
  }
</style>
