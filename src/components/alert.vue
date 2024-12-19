<template>
  <div
    v-if="show"
    class="text-sm text-center font-bold p-3 w-1/3 rounded-md fixed"
    style="top: 90%"
    :class="className"
  >
    {{ message }}
  </div>
</template>

<script lang="ts" setup>
import { watch } from "vue";

const props = defineProps<{
  show: boolean;
  variant: "info" | "success" | "warning" | "danger";
  message: string;
  duration: number;
}>();

const emit = defineEmits(["changeShow"]);

const variantColors: {
  info: string;
  success: string;
  warning: string;
  danger: string;
} = {
  info: "bg-red-400 text-red-700",
  success: "",
  warning: "",
  danger: "bg-red-300 text-red-800",
};

const className = `${variantColors[props.variant]}`;
watch(
  () => props.show,
  (newValue) => {
    if (newValue) {
      setTimeout(() => {
        emit("changeShow");
      }, props.duration);
    }
  }
);
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
