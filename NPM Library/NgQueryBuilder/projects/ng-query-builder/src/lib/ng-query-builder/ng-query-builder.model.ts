import { Time } from "@angular/common";

export interface FiltersModel {
    id: string,
    field: string | undefined,
    label: string | any,
    optgroup: string | undefined,
    type: "string" | "integer" | "double" | "date" | "time" | "datetime" | "boolean" | undefined,
    input: "text" | "number" | "textarea" | "radio" | "checkbox" | "select" | undefined,
    values: any,
    value_separator: string | undefined,
    default_value: any,
    input_event: string | undefined,
    size: number | undefined,
    rows: number | undefined,
    multiple: boolean | undefined,
    placeholder: string | undefined,
    vertical: boolean | undefined,
    validation: ValidationModel,
    operators: Array<"equal" | "not_equal" | "in" | "not_in" | "less" | "less_or_equal" | "greater" | "greater_or_equal" | "between" | "not_between" | "begins_with"
        | "not_begins_with" | "contains" | "not_contains" | "ends_with" | "not_ends_with" | "is_empty" | "is_not_empty" | "is_null" | "is_not_null"> | undefined,
    default_operator: string | undefined,
    plugin: string | undefined,
    plugin_config: any,
    data: any,
    valueSetter: Function | undefined,
    valueGetter: Function | undefined,
    description: Function | undefined,
    unique: boolean | undefined,
    icon: string | undefined,
}

export interface ValidationModel {
    format: string | any | Date | Time | undefined,
    min: number | Date | Time | string | undefined,
    max: number | Date | Time | string | undefined,
    step: number | undefined,
    messages: any | undefined,
    allow_empty_value: boolean | undefined,
    callback: Function | undefined,
}