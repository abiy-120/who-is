<template>
  <div
    class="h-lvh w-full flex flex-col items-center justify-center space-y-10"
  >
    <p class="text-7xl font-bold">Who Is It?</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 w-2/3 min-w-80">
      <Button
        v-for="(link, index) in links"
        :key="index"
        :variant="link.variant"
        size="xl"
        radius="lg"
      >
        <RouterLink
          :to="{ name: link.link }"
          class="flex justify-center items-center h-24 text-5xl"
        >
          <component :is="link.component" style="width: 1em; height: 1em" />
          {{ link.value }}
        </RouterLink>
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from "../components/button.vue";
import { Settings, Gamepad2, Baby, Info } from "lucide-vue-next";
const links = [
  {
    value: "Play",
    variant: "primary",
    component: Gamepad2,
    link: "game",
  },
  { value: "Childhood", variant: "danger", component: Baby, link: "" },
  { value: "Info", variant: "warning", component: Info, link: "" },
  {
    value: "Settings",
    variant: "success",
    component: Settings,
    link: "settings",
  },
];
</script>
