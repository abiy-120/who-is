<template>
  <button
    class="flex justify-center items-center w-10 h-10 font-bold text-3xl rounded cursor-pointer bg-gray-800 hover:bg-gray-900 active:bg-gray-950 text-white"
    :disabled="!show"
  >
    <template v-if="show">
      {{ text }}
    </template>
  </button>
</template>

<script lang="ts" setup>
const { text, show = true } = defineProps<{
  text: string;
  show: boolean;
}>();
</script>
