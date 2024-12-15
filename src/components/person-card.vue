<template>
  <div
    @click="navigate(levelId, personId)"
    class="border border-gray-500 rounded-xl bg-gray-400 cursor-pointer"
  >
    <img class="rounded-t-xl" src="../assets/images/portrait.jpg" />
    <div class="flex justify-center items-center text-lg font-bold m-2">
      <span v-if="person.id >= 3">{{ person.name }}</span>
      <CircleHelp v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CircleHelp } from "lucide-vue-next";
import { getPerson } from "../data";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps<{
  levelId: number;
  personId: number;
}>();

const person = getPerson(props.levelId, props.personId);

const navigate = (levelId: number, personId: number): void => {
  router.push({
    name: "person",
    params: { levelId, personId },
  });
};
</script>
