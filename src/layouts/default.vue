<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
</script>


<template>
    <div class=" bg-gray-100">
        <TheHeader />
        <main class="flex flex-col min-h-screen">
            <div class="container mx-auto max-w-7xl">
                <slot />
            </div>
        </main>
    </div>
</template>