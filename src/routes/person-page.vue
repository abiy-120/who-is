<template>
  <div
    class="h-lvh flex flex-col justify-around items-center gap-5 select-none"
  >
    <div class="cursor-pointer">
      <ChevronLeft
        v-if="personIndex > 0"
        class="fixed left-0 top-1/2 hover:text-gray-600 active:text-gray-800"
        :size="90"
        @click="handleNavigationButtonClick('left')"
      />
      <ChevronRight
        v-if="personIndex < levelLength - 1"
        class="fixed right-0 top-1/2 hover:text-gray-600 active:text-gray-800"
        :size="90"
        @click="handleNavigationButtonClick('right')"
      />
    </div>
    <div class="flex gap-3">
      <img
        class="rounded-xl min-w-1/3 h-72 object-cover"
        :src="`/person-images/${imageName}`"
      />
      <div class="right-0 relative flex flex-col gap-3">
        <SkipForward
          :size="40"
          class="bg-gray-300 p-2 border border-gray-400 hover:bg-gray-400 active:p-3 rounded-lg cursor-pointer"
        />
        <Baseline
          :size="40"
          class="bg-gray-300 p-2 border border-gray-400 hover:bg-gray-400 active:p-3 rounded-lg cursor-pointer"
        />
      </div>
    </div>
    <template v-if="!checkAnswered(personId)">
      <div class="space-y-3">
        <div
          class="flex justify-center gap-2"
          v-for="(name, nameIndex) in splitName"
          :key="nameIndex"
        >
          <DashTile
            v-for="(letter, dashIndex) in name"
            :key="`dash-${nameIndex}-${dashIndex}`"
            :text="
              shuffledLetters[dashLetters[`dash-${nameIndex}-${dashIndex}`]]
            "
            @click="handleDashClick(nameIndex, dashIndex)"
          />
        </div>
      </div>
      <div class="flex flex-wrap justify-center w-96 gap-1 relative bottom-0">
        <LetterTile
          v-for="(letter, index) in shuffledLetters"
          :key="'letter-' + index"
          @click="handleLetterClick(index)"
          :show="!isLetterChosen(index)"
          :text="letter"
        />
      </div>
    </template>
    <template v-else>
      <p class="text-4xl font-bold">{{ person[getLang].name }}</p>
      <div class="max-w-[80%] md:max-w-[50%] m-5">
        <p class="text-lg text-justify">{{ person[getLang].description }}</p>
      </div>
    </template>
  </div>
  <AlertContainer />
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import AlertContainer from "../components/alert-container.vue";
import {
  ChevronRight,
  ChevronLeft,
  Play,
  PlaySquare,
  PlaySquareIcon,
  Pause,
  SkipForward,
  Baseline,
} from "lucide-vue-next";
import {
  getCleanName,
  getImageName,
  getPerson,
  getShuffledLetters,
  getSplitName,
  levelLength,
  type Person,
} from "../data";
import LetterTile from "../components/letter-tile.vue";
import DashTile from "../components/dash-tile.vue";
import { useGameStore } from "../global";
import { useAlert } from "../useAlert.ts";

const { checkAnswered, updateAnswered, updateStars, getLang } = useGameStore();
const route = useRoute();
const router = useRouter();
const { showAlert } = useAlert();

const levelIndex = ref(parseInt(route.params.levelId as string));
const personIndex = ref(parseInt(route.params.personId as string));

let person = ref<Person>(getPerson(levelIndex.value, personIndex.value));

const handleNavigationButtonClick = async (direction: string) => {
  const nextPersonIndex =
    direction == "left" ? personIndex.value - 1 : personIndex.value + 1;
  await router.replace({
    name: "person",
    params: {
      levelId: levelIndex.value.toString(),
      personId: nextPersonIndex.toString(),
    },
  });
  window.location.reload();
};

const personId: string = `${route.params.levelId}-${route.params.personId}`;
const imageName = ref(getImageName(person.value["en"].name));
const splitName = getSplitName(person.value[getLang].name);
const correctName = getCleanName(person.value[getLang].name);
const dashLetters = ref({});
splitName.forEach((name, nameIndex) => {
  name.split("").forEach((letter, letterIndex) => {
    dashLetters.value[`dash-${nameIndex}-${letterIndex}`] = "";
  });
});
const shuffledLetters = {};
getShuffledLetters(person.value[getLang].name, getLang).forEach(
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
      if (!checkAnswered(personId)) {
        updateAnswered(personId);
        updateStars(3);
      }
    } else {
      showAlert("Wrong Answer!", "danger", 1000);
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
