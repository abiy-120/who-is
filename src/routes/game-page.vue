<template>
  <div class="w-full p-20 grid md:grid-cols-2 gap-5">
    <LevelCard v-for="(level, index) in levels" :key="index" :levelId="index" />
  </div>
  <AlertContainer />
</template>

<script lang="ts" setup>
import LevelCard from "../components/level-card.vue";
import AlertContainer from "../components/alert-container.vue";
import { levels } from "../data";
</script>

<style></style>
