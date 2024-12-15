<template>
  <div
    @click="navigate(levelId)"
    :class="getColorClass()"
    class="p-10 rounded-lg text-7xl font-bold text-white cursor-pointer"
  >
    <p>Level {{ levelId + 1 }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps<{
  levelId: number;
}>();

const navigate = (levelId: number): void => {
  router.push({ name: "level", params: { levelId } });
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
