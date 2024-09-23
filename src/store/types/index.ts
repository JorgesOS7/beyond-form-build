export type FormTypes = 'text' | 'radio' | 'checkbox' | 'money'
export type FormOptions = {
    text: string
    value: string | number | boolean | null
    type: FormTypes
}
export type FormAttrs = {
    name: string,
    placeholder: string,
    maxLength: number,
    minLength: number,
    required: boolean,
    disabled: boolean,
    readonly: boolean,
}
export type FormState = {
    label: string
    value: string | number | boolean | null
    order: number
    options: FormOptions[]
    attrs: FormAttrs
    type: FormTypes
}