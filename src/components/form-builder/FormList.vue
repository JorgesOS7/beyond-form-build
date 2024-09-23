<script setup lang="ts">
import { useForm } from '@/store';
import FormItem from './FormItem.vue';
import { storeToRefs } from 'pinia';
import { Card, CardContent } from '../ui/card';

const store = useForm()
const { forms } = storeToRefs(store)
</script>

<template>
    <div class="space-y-6">
        <Card v-for="(option, index) in forms" :key="`form-item-${index}`">
            <CardContent class="pt-6">
                <FormItem :option="option" :index="index" />
            </CardContent>
        </Card>
    </div>
</template>