<template>
  <div
    class="flex justify-center items-center w-10 h-10 font-bold text-3xl rounded cursor-pointer bg-gray-300 hover:bg-gray-400 border border-gray-500 text-black"
  >
    {{ text }}
  </div>
</template>

<script lang="ts" setup>
const { text = "" } = defineProps<{
  text: string;
}>();
</script>
