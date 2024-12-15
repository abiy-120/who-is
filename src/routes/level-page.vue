<template>
  <p class="text-center text-6xl font-bold">Level {{ levelId + 1 }}</p>
  <div class="p-5 grid grid-cols-3 gap-3">
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
import { useRoute } from "vue-router";
import { getLevel, type Level } from "../data";

const route = useRoute();
const levelId: number = parseInt(route.params.levelId as string);
const level: Level = getLevel(levelId);
</script>
