<template>
  <div class="bg-desktop absolute left-0 top-0 w-full h-full">
    <Taskbar />
  </div>
</template>

<script>
import Taskbar from '@/components/Taskbar.vue';

export default {
  name: 'home',
  components: {
    Taskbar,
  },
};
</script>

<style lang="scss">
  * {
    font-family: 'MS Sans Serif';
  }
  img {
    image-rendering: pixelated;
  }

</style>
