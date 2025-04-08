import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useGameStore = defineStore("gameStore", () => {
  const answered = useLocalStorage("answered", [] as string[]);
  const keys = useLocalStorage("keys", 0);
  const stars = useLocalStorage("stars", 0);
  const lang = useLocalStorage<"en" | "tg">("lang", "en");
  const title = ref("");
  const getAnswered = computed(() => answered.value);
  const getKeys = computed(() => keys.value);
  const getStars = computed(() => stars.value);
  const getTitle = computed(() => title.value);
  const getLang = computed(() => lang.value);

  function updateAnswered(value: string) {
    answered.value.push(value);
  }
  function updateKeys(value: number) {
    keys.value += value;
  }
  function updateStars(value: number) {
    stars.value += value;
  }

  function changeTitle(value: string) {
    title.value = value;
  }

  function checkAnswered(value: string) {
    return answered.value.includes(value);
  }

  function changeLang(value: string) {
    lang.value = value;
  }

  return {
    getAnswered,
    getKeys,
    getStars,
    getTitle,
    getLang,
    updateAnswered,
    updateKeys,
    updateStars,
    checkAnswered,
    changeTitle,
    changeLang,
  };
});
