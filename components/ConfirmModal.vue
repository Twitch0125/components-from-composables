<script lang="ts" setup>
import type { UseConfirmDialogReturn } from "@vueuse/core";
type modalProps = UseConfirmDialogReturn<any, any, any>;
const props = withDefaults(
  defineProps<{ modalProps: modalProps; title?: string }>(),
  { title: "Title" }
);
</script>
<template>
  <div v-if="modalProps.isRevealed.value" class="p-8 bg-white border-solid rounded border border-gray-700">
    <div>{{ title }}</div>
    <button @click="modalProps.cancel('cancelled')">Cancel modal</button>
    <button @click="modalProps.confirm('confirmed')">Confirm modal</button>
  </div>
</template>
