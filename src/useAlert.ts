import { computed, ref } from "vue";
import { Variant } from "./types";

const alerts = ref<
  {
    id: number;
    message: string;
    variant: Variant;
    removeFunction: Function;
  }[]
>([]);
let index = 0;

const showAlert = (message: string, variant: Variant, duration?: number) => {
  alerts.value.push({
    id: index,
    message,
    variant,
    removeFunction: removeElement,
  });
  if (duration) {
    removeElementAutomatic(index, duration);
  }
  index++;
  return index;
};

const removeElement = (id: number) => {
  alerts.value = alerts.value.filter((item) => item.id != id);
};

const removeElementAutomatic = (id: number, duration: number) => {
  setTimeout(() => {
    removeElement(id);
  }, duration);
};
const getAlerts = computed(() => alerts.value);

export function useAlert() {
  return { alerts, getAlerts, showAlert, removeElement };
}
