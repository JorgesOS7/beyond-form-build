<script setup lang="ts">
import FormBuilder from '@/components/form-builder/FormBuilder.vue';
import { useRouter } from '@/composables';
import {
  TButton,
} from 'vue-tailwind/dist/components';
const router = useRouter()


const toPreview = () => router.push('/preview-register')
</script>

<template>
  <section class="py-6">
    <FormBuilder />
    <div class="flex justify-end pt-3">
      <t-button @click="toPreview">
        Visualizar formulário
      </t-button>
    </div>
  </section>

</template>