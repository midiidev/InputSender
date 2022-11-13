<script setup>
const props = defineProps(['placeholder', 'value'])
</script>

<template>
    <input
        class="rounded-lg bg-slate-800 p-2 w-full"
        :placeholder="props.placeholder"
        :value="props.value"
    />
</template>
