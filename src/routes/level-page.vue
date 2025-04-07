<template>
  <Header />
  <!-- <p class="text-center text-6xl font-bold">Level {{ levelId + 1 }}</p> -->
  <div
    class="p-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center"
  >
    <PersonCard
      v-for="(person, index) in level.people"
      :key="person.id"
      :levelId="levelId"
      :personId="index"
    />
  </div>
</template>

<script lang="ts" setup>
import PersonCard from "../components/person-card.vue";
import Header from "../components/header.vue";
import { useRoute } from "vue-router";
import { getLevel, type Level } from "../data";
import { useGameStore } from "../global";

const store = useGameStore();
store.changeTitle("Level 2");

const route = useRoute();
const levelId: number = parseInt(route.params.levelId as string);
const level: Level = getLevel(levelId);
</script>
