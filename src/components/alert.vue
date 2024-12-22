<template>
  <div
    class="text-sm font-bold p-3 rounded-md w-1/3 flex items-center justify-between"
    :class="className"
  >
    <div class="flex items-center">
      <component :is="alertTypes[variant].icon" class="mr-3"></component>
      {{ message }}
    </div>
    <X @click="handleClick" class="relative right-0 cursor-pointer" />
  </div>
</template>

<script lang="ts" setup>
import { Check, CircleAlert, Info, TriangleAlert, X } from "lucide-vue-next";
import type { AlertType, Variant } from "../types";
import { useAlert } from "../useAlert";

defineEmits(["removeElement"]);

const { removeElement } = useAlert();
const props = defineProps<{
  id: number;
  variant: Variant;
  message: string;
  removeFunction: Function;
}>();

const handleClick = () => {
  removeElement(props.id);
};

const alertTypes: AlertType = {
  info: {
    color: "bg-blue-300 text-blue-950",
    icon: Info,
  },
  success: {
    color: "bg-green-300 text-green-950",
    icon: Check,
  },
  warning: {
    color: "bg-yellow-300 text-yellow-950",
    icon: CircleAlert,
  },
  danger: {
    color: "bg-red-300 text-red-900",
    icon: TriangleAlert,
  },
};

const className = `${alertTypes[props.variant].color}`;
</script>

<style>
@keyframes alertanimation {
  0% {
    opacity: 0%;
  }
  25% {
    opacity: 100%;
  }
  50% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
}
.alert {
  animation-name: alertanimation;
  animation: 2s;
}
</style>
