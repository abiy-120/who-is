import { useStorage } from "@vueuse/core";

export const answered = useStorage("answered", [] as string[]);
export const keys = useStorage("keys", 0);
export const stars = useStorage("stars", 0);
