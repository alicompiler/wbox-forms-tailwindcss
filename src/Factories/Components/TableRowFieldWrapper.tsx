export function TableRowFieldWrapper({
                                       field,
                                       label,
                                       labelClassName,
                                       width,
                                       position,
                                       space
                                   }: { field: any, label: string, labelClassName: string, width: number, position: string, space: number }) {
    return <div className={'__wbox-tailwind-simple-field-wrapper py-2 flex'}>
        <div className={`flex items-${position}`}>
            <label className={labelClassName} style={{width: width}}>
                {label}
            </label>
        </div>
        <div className={'inline-block'} style={{width: space}} />
        {field}
    </div>
}