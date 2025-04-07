<template>
  <div
    @click="navigate(levelId, personId)"
    class="rounded-xl cursor-pointer h-96 min-w-60 max-w-80"
  >
    <img
      class="rounded-xl object-cover w-full h-full"
      :class="{ grayscale: !store.checkAnswered(answeredPersonId) }"
      :src="`/person-images/${imageName}`"
    />
    <!-- <div class="flex justify-center items-center text-lg font-bold m-2">
      <span v-if="store.checkAnswered(answeredPersonId)">{{
        person.name
      }}</span>
      <CircleHelp v-else />
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { CircleHelp } from "lucide-vue-next";
import { getImageName, getPerson } from "../data";
import { useRouter } from "vue-router";
import { useGameStore } from "../global";
import { ref } from "vue";

const router = useRouter();
const store = useGameStore();

const props = defineProps<{
  levelId: number;
  personId: number;
}>();
const person = getPerson(props.levelId, props.personId);
const imageName = ref(getImageName(person.name));
const answeredPersonId = `${props.levelId}-${props.personId}`;

const navigate = (levelId: number, personId: number): void => {
  router.push({
    name: "person",
    params: { levelId, personId },
  });
};
</script>
