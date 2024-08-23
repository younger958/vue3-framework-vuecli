<template>
    <div>{{ addData.num }}</div>
</template>
<script lang="ts" setup>
import { useAdd } from "@/hooks/demo/demo";
const { addData } = useAdd()
</script>