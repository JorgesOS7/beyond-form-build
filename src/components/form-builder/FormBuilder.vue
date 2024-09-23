<script lang="ts" setup>
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import FormConfig from './FormConfig.vue';
import FormList from './FormList.vue';

</script>

<template>
    <div class="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle>Form build</CardTitle>
            </CardHeader>
            <FormConfig />
        </Card>
        <div class="max-h-96 overflow-y-scroll">
            <FormList />
        </div>
    </div>
</template>