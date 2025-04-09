<template>
  <Header />
  <div class="w-full p-10 grid md:grid-cols-2 gap-5">
    <LevelCard
      v-for="(level, index) in childHoodLevels"
      :key="index"
      :levelId="index"
    />
  </div>
  <AlertContainer />
</template>

<script lang="ts" setup>
import Header from "../components/header.vue";
import LevelCard from "../components/level-card.vue";
import AlertContainer from "../components/alert-container.vue";
import { levels } from "../data";
import { useGameStore } from "../global";

const childHoodLevels = levels.filter(
  (level) => level.people.filter((person) => person.childhood).length > 0
);

const { changeTitle } = useGameStore();
changeTitle("");
</script>

<style></style>
