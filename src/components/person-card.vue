<template>
  <div
    @click="navigate(levelId, personId)"
    class="rounded-xl cursor-pointer h-96 min-w-60 max-w-80"
  >
    <img
      class="rounded-xl object-cover w-full h-full"
      :class="{ grayscale: !store.checkAnswered(answeredPersonId) }"
      :src="`/person-images/${childhood ? 'childhood/' : ''}${imageName}`"
    />
  </div>
</template>

<script lang="ts" setup>
import { getImageName, getPerson } from "../data";
import { useRouter } from "vue-router";
import { useGameStore } from "../global";
import { ref } from "vue";

const router = useRouter();
const store = useGameStore();

const props = defineProps<{
  levelId: number;
  personId: number;
  childhood?: boolean;
}>();
const person = getPerson(props.levelId, props.personId);
const imageName = ref(getImageName(person["en"].name));
const answeredPersonId = props.childhood
  ? `ch-${props.levelId}-${props.personId}`
  : `${props.levelId}-${props.personId}`;

const navigate = (levelId: number, personId: number): void => {
  router.push({
    name: props.childhood ? "childhood-person" : "person",
    params: { levelId, personId },
  });
};
</script>
