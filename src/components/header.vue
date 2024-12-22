<template>
  <div
    class="flex items-center justify-between p-2 text-white font-bold w-full h-12 bg-blue-600"
  >
    <p class="text-3xl font-normal">{{ getTitle }}</p>
    <div class="flex space-x-5">
      <div class="flex items-center">
        <Key class="mr-2" />
        {{ getKeys }}
      </div>
      <div class="flex items-center">
        <Star class="mr-2" />
        {{ getStars }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useGameStore } from "../global";
import { Key, Star } from "lucide-vue-next";
const { getKeys, getStars, getTitle } = useGameStore();
</script>
