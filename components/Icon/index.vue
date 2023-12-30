<template>
  <span class="text-white cursor-pointer">
    <Icon />
  </span>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
interface IconsProps {
  type: "search";
}
const props = defineProps<IconsProps>();

const Icon = defineAsyncComponent(() => import(`./icons/${props.type}.vue`));
</script>
