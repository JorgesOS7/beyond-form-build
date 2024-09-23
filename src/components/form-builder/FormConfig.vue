<script setup lang="ts">
import { CardContent } from '@/components/ui/card';
import { useForm } from '@/store';
import { storeToRefs } from 'pinia';
import {
    TInput,
    TButton,
    TSelect,
    TRadio,
    TCheckbox,
} from 'vue-tailwind/dist/components';
const store = useForm()
const { form, formTypes } = storeToRefs(store)
const { onAddForm, onAddFormOption, onChangeType } = store
</script>

<template>
    <CardContent>
        <div class="space-y-6">
            <div class="grid grid-cols-2 gap-5">
                <div>
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Digite
                        o label do input</label>
                    <t-input v-model="form.label" />
                </div>
                <div>
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Selecione
                        o tipo do input</label>

                    <t-select v-model="form.type" :options="formTypes" @change="onChangeType" />
                </div>
            </div>
            <hr class="py-0.5" />
            <div v-if="form.type === 'text'">
                <p class="mb-2 text-sm font-semibold">Configurações</p>
                <div class="grid grid-cols-4 gap-5">
                    <div>
                        <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Ordem</label>
                        <t-input type="number" v-model.number="form.order" />
                    </div>
                    <div>
                        <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Placeholder</label>
                        <t-input v-model="form.attrs.placeholder" />
                    </div>
                    <div>
                        <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Mínimo
                            de caracteres</label>

                        <t-input type="number" v-model.number="form.attrs.minLength" />
                    </div>
                    <div>
                        <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Máximo
                            de caracteres</label>

                        <t-input type="number" v-model.number="form.attrs.maxLength" />
                    </div>
                </div>
            </div>
            <div v-for="(option, index) in form.options" :key="`form-option-${index}`">
                <div class="mb-4">
                    <label class="flex items-center gap-2">
                        <t-radio name="same" readonly v-if="form.type === 'radio'" />
                        <t-checkbox name="same" readonly v-else />
                        <span>{{ option.text }}</span>
                    </label>
                </div>
            </div>
            <t-button v-if="form.type === 'radio' || form.type === 'checkbox'" @click="onAddFormOption">Adicionar
                opção</t-button>
            <div class="flex justify-end">
                <t-button @click="onAddForm">Adicionar</t-button>
            </div>
        </div>
    </CardContent>
</template>