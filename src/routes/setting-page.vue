<template>
  <div class="p-10 flex flex-col justify-center items-center">
    <p class="text-5xl my-5">Settings</p>
    <p class="my-3 text-2xl">Change Language</p>
    <select class="min-w-96 border border-black rounded-md p-3" v-model="lang">
      <option value="en">English</option>
      <option value="tg">Tigrigna</option>
    </select>
    <Button
      @click="handleClick"
      variant="primary"
      size="lg"
      class="p-3 block mt-3"
      >Set Language</Button
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Button from "../components/button.vue";
import { useGameStore } from "../global";
const store = useGameStore();

const lang = ref(store.getLang);

const handleClick = () => {
  store.changeLang(lang.value);
};
</script>
