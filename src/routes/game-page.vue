<template>
  <div class="w-full p-20 grid md:grid-cols-2 gap-5">
    <LevelCard v-for="(level, index) in levels" :key="index" :levelId="index" />
  </div>
</template>

<script setup>
import LevelCard from "../components/level-card.vue";
import { levels } from "../data";
</script>

<style></style>
