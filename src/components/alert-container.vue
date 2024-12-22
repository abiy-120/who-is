<template>
  <div
    class="fixed left-0 bottom-10 w-full flex flex-col items-center justify-center space-y-2"
  >
    <Alert
      v-for="item in getAlerts"
      :key="item.id"
      :id="item.id"
      :message="item.message"
      :variant="item.variant"
      :remove-function="item.removeFunction"
    />
  </div>
</template>

<script lang="ts" setup>
import Alert from "./alert.vue";

import { useAlert } from "../useAlert";

const { getAlerts } = useAlert();
</script>
