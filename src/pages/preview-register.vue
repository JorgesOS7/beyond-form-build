<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TButton, TInput, TCheckboxGroup, TRadioGroup } from "vue-tailwind/dist/components"
import { useRouter, useToast } from '@/composables';
import { useForm } from '@/store';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const router = useRouter()
const store = useForm()
const toast = useToast()
const { orderedForms } = storeToRefs(store)
const checks = ref([])


const goBack = () => router.back()

const onSubmit = () => {
    const values = orderedForms.value.map((form => form.value))

    toast.success(`Os valores do formulário foram ${values.join(',')} \n ${checks.value.join(',')}`)
}
</script>
<template>
    <section class="space-y-4 py-6">
        <t-button @click="goBack()">
            Voltar
        </t-button>
        <Card>
            <CardHeader>
                <CardTitle>Visualização do formulário</CardTitle>
                <CardDescription>Aqui você pode testar o formulário que você criou</CardDescription>
            </CardHeader>
            <CardContent>
                <form @submit.prevent="onSubmit" class="space-y-6">
                    <div v-for="(form, index) in orderedForms" :key="index">
                        <div v-if="form.type === 'text' || form.type === 'money'">
                            <label class="text-sm font-semibold mb-1"> {{ form.label }}</label>
                            <t-input :type="form.type" v-bind="form.attrs" v-if="form.type === 'text'"
                                v-model="form.value" />
                            <money v-bind="form.attrs" v-else v-model="form.value" />
                        </div>
                        <div v-if="form.type === 'radio' || form.type === 'checkbox'">
                            <label class="text-sm font-medium mb-1">{{ form.label }}</label>
                            <t-radio-group v-model="form.value" :options="form.options" name="radio"
                                v-if="form.type === 'radio'" />
                            <t-checkbox-group v-model="checks" :options="form.options" name="checkbox" v-else />
                        </div>
                    </div>
                    <t-button type="submit">
                        Enviar
                    </t-button>
                </form>
            </CardContent>
        </Card>
    </section>
</template>