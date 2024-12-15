<template>
  <div
    class="h-lvh w-full flex flex-col items-center justify-center space-y-10"
  >
    <p class="text-7xl font-bold">Welcome!</p>
    <div class="grid grid-cols-2 gap-5 w-2/3">
      <Button
        v-for="(link, index) in links"
        :key="index"
        :variant="link.variant"
        size="xl"
        radius="lg"
      >
        <RouterLink
          :to="{ name: link.link }"
          class="flex items-center justify-center gap-2 p-6"
        >
          <component :is="link.component" />
          {{ link.value }}
        </RouterLink>
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from "../components/button.vue";
import { Settings, User, Baby, Info } from "lucide-vue-next";

const links = [
  {
    value: "Guess The People",
    variant: "primary",
    component: User,
    link: "game",
  },
  { value: "Childhood Pictures", variant: "danger", component: Baby, link: "" },
  { value: "Info", variant: "warning", component: Info, link: "" },
  { value: "Settings", variant: "success", component: Settings, link: "" },
];
</script>
