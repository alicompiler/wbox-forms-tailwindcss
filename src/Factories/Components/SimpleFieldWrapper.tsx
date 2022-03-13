export function SimpleFieldWrapper({
                                       field,
                                       label,
                                       labelClassName
                                   }: { field: any, label: string, labelClassName: string }) {
    return <div className={'__wbox-tailwind-simple-field-wrapper py-2'}>
        <label className={labelClassName}>
            {label}
            {field}
        </label>
    </div>
}