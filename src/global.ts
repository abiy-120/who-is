import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed } from "vue";

export const useGameStore = defineStore("gameStore", () => {
  const answered = useLocalStorage("answered", [] as string[]);
  const keys = useLocalStorage("keys", 0);
  const stars = useLocalStorage("stars", 0);
  const getAnswered = computed(() => answered.value);
  const getKeys = computed(() => keys.value);
  const getStars = computed(() => stars.value);
  function updateAnswered(value: string) {
    answered.value.push(value);
  }
  function updateKeys(value: number) {
    keys.value += value;
  }
  function updateStars(value: number) {
    stars.value += value;
  }
  function checkAnswered(value: string) {
    return answered.value.includes(value);
  }
  return {
    answered,
    keys,
    stars,
    getAnswered,
    getKeys,
    getStars,
    updateAnswered,
    updateKeys,
    updateStars,
    checkAnswered,
  };
});
