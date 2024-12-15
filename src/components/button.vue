<template>
  <button :class="className" class="font-bold text-white">
    <slot />
  </button>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "md",
  },
  radius: {
    type: String,
    default: "md",
  },
});

const classMap = {
  colors: {
    primary: "bg-sky-700 hover:bg-sky-800 active:bg-sky-900",
    secondary: "bg-neutral-500 hover:bg-neutral-600 active:bg-neutral-800",
    success: "bg-green-700 hover:bg-green-800 active:bg-green-900",
    warning: "bg-orange-400 hover:bg-orange-500 active:bg-orange-600",
    danger: "bg-red-500 hover:bg-red-600 active:bg-red-700",
  },
  size: {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-3xl",
  },
  radius: {
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  },
};

const className = computed(() => {
  return `${classMap.colors[props.variant]} ${classMap.size[props.size]} ${
    classMap.radius[props.radius]
  }`;
});
</script>
