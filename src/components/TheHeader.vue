<script setup lang="ts">
import Logo from './icons/Logo.vue';
</script>

<template>
    <header class="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3">
        <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-center">
            <div class="flex items-center justify-center">
                <a class="flex-none text-xl font-semibold focus:outline-none focus:opacity-80" href="#"
                    aria-label="Brand">
                    <span class="inline-flex items-center gap-x-2 text-xl font-semibold">
                        <Logo class="w-36 h-auto" />
                    </span>
                </a>
            </div>
        </nav>
    </header>
</template>