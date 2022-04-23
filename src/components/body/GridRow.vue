<template lang="pug">
tr.v-grid-row
  GridCell(
    v-for="value in props.values"
    :class="{ 'v-grid-search-result': value === searchText }"
  ) {{ value }}
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import GridCell from '@/components/body/GridCell.vue'

const props = defineProps({
  values: { type: Array as PropType<string[]>, required: true },
  searchText: { type: String, default: undefined },
})
</script>
