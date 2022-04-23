<template lang="pug">
GridRow.v-grid-row__header
  GridCell.v-grid-col__header(v-if="hasRowHeader") {{ rowHeaderLabel }}
</template>

<script lang="ts" setup>
import GridRow from '@/components/body/GridRow.vue'
import { computed, defineProps, PropType } from 'vue'

const props = defineProps({
  row: { type: [Number, String] as PropType<number|string>, required: true },
  rowHeader: { type: [Boolean, String, Function] as PropType<RowHeader>, default: false },
})

const hasRowHeader = computed(() => !!props.rowHeader)
const rowHeaderLabel = computed(() => {
  switch (typeof props.rowHeader) {
    case 'string': return props.rowHeader
    case 'function': return props.rowHeader(props.row)
    default: return props.row
  }
})
</script>
