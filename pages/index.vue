<template>
<div class="container mx-auto">
    <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-1">
        <p v-for="items in data.home.description" :key="items.id"></p>

    </div>
</div>
</template>

<script setup>
import { data } from '~/content';
</script>


<style lang="scss" scoped>

</style>