<template>
  <div
    class="flex items-center justify-between p-2 text-white font-bold w-full h-16 bg-cyan-700"
  >
    <p></p>
    <p class="text-3xl font-bold text-center">{{ getTitle }}</p>
    <div class="flex space-x-5">
      <div class="flex items-center">
        <Star class="mr-2" />
        {{ getStars }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useGameStore } from "../global";
import { Star } from "lucide-vue-next";
const { getStars, getTitle } = useGameStore();
</script>
