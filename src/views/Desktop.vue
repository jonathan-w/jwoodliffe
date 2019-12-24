<template>
  <div class="home">
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
