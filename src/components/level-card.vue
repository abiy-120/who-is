<template>
  <div
    @click="navigate(levelId)"
    :class="getColorClass()"
    class="h-36 rounded-lg min-w-80 text-white cursor-pointer flex flex-col justify-center items-center space-x-3"
  >
    <div class="text-6xl font-bold flex">
      <LockKeyhole style="width: 1em; height: 1em" v-if="!isUnlocked" />
      <p>Level {{ levelId + 1 }}</p>
    </div>
    <p v-if="!isUnlocked" class="text-sm mt-5 font-bold">
      {{ level.stars }} stars needed
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getLevel } from "../data";
import { useGameStore } from "../global";
import { LockKeyhole } from "lucide-vue-next";
import { useAlert } from "../useAlert";

const router = useRouter();
const store = useGameStore();
const { showAlert } = useAlert();
const props = defineProps<{
  levelId: number;
  childhood?: boolean;
}>();
const level = getLevel(props.levelId);
const isUnlocked = ref(store.getStars >= level.stars);

const navigate = (levelId: number): void => {
  if (isUnlocked.value) {
    router.push({
      name: props.childhood ? "childhood-level" : "level",
      params: { levelId },
    });
  } else {
    showAlert(`You need at least ${level.stars} stars.`, "danger", 1000);
  }
};

const colors = [
  "bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900",
  "bg-pink-700 hover:bg-pink-800 active:bg-pink-900",
  "bg-red-500 hover:bg-red-600 active:bg-red-700",
  "bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900",
  "bg-green-700 hover:bg-green-800 active:bg-green-900",
  "bg-sky-700 hover:bg-sky-800 active:bg-sky-900",
  "bg-purple-700 hover:bg-purple-800 active:bg-purple-900",
  "bg-orange-400 hover:bg-orange-500 active:bg-orange-600",
  "bg-blue-700 hover:bg-blue-800 active:bg-blue-900",
  "bg-teal-700 hover:bg-teal-800 active:bg-teal-900",
];

const getColorClass = (): string => {
  return colors[props.levelId % colors.length];
};
</script>
