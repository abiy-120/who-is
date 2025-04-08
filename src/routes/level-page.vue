<template>
  <Header />
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

const { changeTitle } = useGameStore();

const route = useRoute();
const levelId: number = parseInt(route.params.levelId as string);
const level: Level = getLevel(levelId);
changeTitle("Level " + (levelId + 1));
</script>
