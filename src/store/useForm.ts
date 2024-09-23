import { defineStore } from "pinia";
import { ref, computed } from "vue"
import type { FormState } from "./types"

const defaultValue: FormState = {
    label: '',
    value: null,
    type: 'text',
    options: [],
    order: 1,
    attrs: {
        name: '',
        placeholder: '',
        maxLength: 100,
        minLength: 5,
        required: false,
        disabled: false,
        readonly: false,

    }
}
export const useForm = defineStore('form', () => {
    const formTypes = [{
        text: 'Texto',
        value: 'text'
    }, {
        text: 'Botão de seleção',
        value: 'radio'
    }, {
        text: 'Caixa de seleção',
        value: 'checkbox'
    },
    {
        text: 'Dinheiro',
        value: 'money'
    }
    ]
    const form = ref<FormState>(structuredClone(defaultValue))
    const options = computed(() => form.value.options)
    const orderedForms = computed(() => forms.value.slice().sort((a, z) => a.order - z.order))
    const forms = ref<FormState[]>([])

    const onAddForm = () => {
        forms.value.push(structuredClone(form.value))

        clearForm()
    }

    const onAddFormOption = () => {
        const count = form.value.options.length + 1
        form.value.options.push({ text: `Opção ${count}`, value: count, type: form.value.type })
    }
    const clearForm = () => {
        form.value = structuredClone({
            ...defaultValue,
            order: forms.value.length + 1
        })
    }

    const onChangeType = (type: string) => {
        form.value.options = []
    }

    return {
        form,
        forms,
        orderedForms,
        formTypes,
        options,
        onAddForm,
        onAddFormOption,
        clearForm,
        onChangeType
    }
})