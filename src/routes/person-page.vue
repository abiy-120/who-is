<template>
  <div class="m-5 flex flex-col justify-around items-center gap-5 select-none">
    <img
      class="rounded-xl min-w-1/3 h-72 object-cover"
      src="../assets/images/portrait.jpg"
    />
    <div class="space-y-3">
      <div
        class="flex justify-center w-96 gap-2"
        v-for="(name, nameIndex) in splitName"
        :key="nameIndex"
      >
        <DashTile
          v-for="(letter, dashIndex) in name"
          :key="`dash-${nameIndex}-${dashIndex}`"
          :text="shuffledLetters[dashLetters[`dash-${nameIndex}-${dashIndex}`]]"
          @click="handleDashClick(nameIndex, dashIndex)"
        />
      </div>
    </div>
    <div class="flex flex-wrap justify-center w-96 gap-1">
      <LetterTile
        v-for="(letter, index) in shuffledLetters"
        :key="'letter-' + index"
        @click="handleLetterClick(index)"
        :show="!isLetterChosen(index)"
        :text="letter"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import {
  getCleanName,
  getImageName,
  getPerson,
  getShuffledLetters,
  getSplitName,
  type Person,
} from "../data";
import LetterTile from "../components/letter-tile.vue";
import DashTile from "../components/dash-tile.vue";
import { X } from "lucide-vue-next";

const route = useRoute();
const person: Person = getPerson(
  parseInt(route.params.levelId as string),
  parseInt(route.params.personId as string)
);
const splitName = getSplitName(person.name);
const correctName = getCleanName(person.name);
const dashLetters = ref({});
splitName.forEach((name, nameIndex) => {
  name.split("").forEach((letter, letterIndex) => {
    dashLetters.value[`dash-${nameIndex}-${letterIndex}`] = "";
  });
});
const shuffledLetters = {};
getShuffledLetters(person.name).forEach(
  (letter, index) => (shuffledLetters["letter-" + index] = letter)
);

const isLetterChosen = (index: string) => {
  return Object.values(dashLetters.value).includes(index);
};

const getCurrentDash = () => {
  return Object.values(dashLetters.value).indexOf("") == -1
    ? false
    : Object.keys(dashLetters.value)[
        Object.values(dashLetters.value).indexOf("")
      ];
};

const checkWin = () => {
  if (!getCurrentDash()) {
    const filledName = Object.values(dashLetters.value)
      .map((value) => shuffledLetters[value])
      .join("");
    if (filledName == correctName) {
      console.log("YOU WON!");
    } else {
      console.log("YOU LOST!");
    }
  }
};

const handleLetterClick = (index: number) => {
  const currentDash = getCurrentDash();
  if (currentDash) {
    dashLetters.value[currentDash] = index;
    checkWin();
  }
};

const handleDashClick = (nameIndex: number, letterIndex: number) => {
  dashLetters.value[`dash-${nameIndex}-${letterIndex}`] = "";
};
</script>
