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
          @click="handleDashClick(nameIndex, dashIndex, letter)"
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
const dashLetters = ref({});
splitName.forEach((name, nameIndex) => {
  name.split("").forEach((letter, letterIndex) => {
    dashLetters.value[`dash-${nameIndex}-${letterIndex}`] = "";
  });
});
const count = ref([0, 0]);
const shuffledLetters = {};
getShuffledLetters(person.name).forEach(
  (letter, index) => (shuffledLetters["letter-" + index] = letter)
);
// const visibleLetters = ref(
//   shuffledLetters.map((letter, index) => "letter-" + index)
// );

const manageGameCount = {
  isDashFull: false,
  getNameCount() {
    return count.value[0];
  },
  getLetterCount() {
    return count.value[1];
  },
  increaseNameCount() {
    count.value[0]++;
  },
  increaseLetterCount() {
    count.value[1]++;
  },
  isNameEnd() {
    return this.getNameCount() >= dashLetters.value.length - 1;
  },
  isLetterEnd() {
    return (
      this.getLetterCount() >= dashLetters.value[this.getNameCount()].length - 1
    );
  },
};

const isLetterChosen = (index: string) => {
  return Object.values(dashLetters.value).includes(index);
};

const setCount = () => {
  for (let index in dashLetters) {
    const nullIndex = dashLetters.value[index].indexOf("");
    if (nullIndex != -1) {
      count.value[0] = parseInt(index);
      count.value[1] = nullIndex;
      break;
    }
  }
};

const getCurrentDash = () => {
  return Object.values(dashLetters.value).indexOf("") == -1
    ? false
    : Object.keys(dashLetters.value)[
        Object.values(dashLetters.value).indexOf("")
      ];
};

const handleCount = () => {
  if (manageGameCount.isLetterEnd() && manageGameCount.isNameEnd()) {
    manageGameCount.isDashFull = true;
  } else {
    if (manageGameCount.isLetterEnd()) {
      count.value[1] = 0;
      if (manageGameCount.isNameEnd()) {
        count.value[0] = 0;
      } else {
        manageGameCount.increaseNameCount();
      }
    } else {
      manageGameCount.increaseLetterCount();
    }
  }
};

const handleDash = {
  get currentDash() {
    return dashLetters.value[manageGameCount.getNameCount()][
      manageGameCount.getLetterCount()
    ];
  },
  set currentDash(value: string) {
    dashLetters.value[manageGameCount.getNameCount()][
      manageGameCount.getLetterCount()
    ] = value;
  },
};

const handleLetterClick = (index: number) => {
  const currentDash = getCurrentDash();
  if (currentDash) {
    dashLetters.value[currentDash] = index;
  }
};

const handleDashClick = (
  nameIndex: number,
  letterIndex: number,
  letter: string
) => {
  console.log(nameIndex, letterIndex, letter);
  dashLetters.value[nameIndex][letterIndex] = "";
  setCount();
  console.log(count.value);
};
</script>
