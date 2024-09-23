<script setup lang="ts">
import { useForm } from '@/store';
import type { FormState } from '@/store/types';
import { storeToRefs } from 'pinia';
import { TInput, TButton, TSelect, TRadioGroup, TCheckboxGroup } from "vue-tailwind/dist/components"
type FormItemProps = {
    option: FormState
    index: number
}
const store = useForm()
const { option, index } = defineProps<FormItemProps>()
const { formTypes, forms } = storeToRefs(store)

const onRemoveOption = () => {
    forms.value.splice(index, 1)
}
const onAddOption = () => {
    const form = forms.value[index]
    const count = forms.value[index].options.length + 1
    forms.value[index].options.push({ text: `Opção ${count}`, type: form.type, value: count })
}
</script>

<template>
    <div class="space-y-6">
        <div class="grid grid-cols-2 gap-5">
            <div>
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Edite
                    o label do input</label>
                <t-input v-model="option.label" />
            </div>
            <div>
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Selecione
                    o tipo do input</label>

                <t-select v-model="option.type" :options="formTypes" />
            </div>
        </div>
        <hr class="py-0.5" />
        <div v-if="option.type === 'text'">
            <p class="mb-2 text-sm font-semibold">Configurações</p>
            <div class="grid grid-cols-4 gap-5">
                <div>
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Ordem</label>
                    <t-input v-model="option.order" />
                </div>
                <div>
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Placeholder</label>
                    <t-input v-model="option.attrs.placeholder" />
                </div>
                <div>
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Mínimo
                        de caracteres</label>

                    <t-input v-model="option.attrs.minLength" />
                </div>
                <div>
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Máximo
                        de caracteres</label>

                    <t-input v-model="option.attrs.maxLength" />
                </div>
            </div>
        </div>
        <t-radio-group :options="option.options" name="radio" v-if="option.type === 'radio'" />
        <t-checkbox-group :options="option.options" name="checkbox" v-else />
        <!-- <div v-for="(item, index) in option.options" :key="`form-option-${index}`">
            <div class="mb-4">
                <label class="flex items-center gap-2">
                    <t-radio name="same" readonly v-if="item.type === 'radio'" />
                    <t-checkbox name="same" readonly v-else />
                    <span>{{ item.text }}</span>
                </label>
            </div>
        </div> -->
        <t-button v-if="option.type === 'radio' || option.type === 'checkbox'" @click="onAddOption">Adicionar
            opção</t-button>
        <div class="flex justify-end">
            <t-button @click="onRemoveOption" class="bg-red-500">Remover</t-button>
        </div>
    </div>
</template>