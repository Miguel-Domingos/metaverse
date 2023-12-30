<template>
  <span class="text-white px-3 text-center">
    <NuxtLink :to="props.href">
      {{ props.label }}
    </NuxtLink>
  </span>
</template>

<script setup lang="ts">
import type { LinkProps } from "./link.types";

const props = defineProps<LinkProps>();
</script>
