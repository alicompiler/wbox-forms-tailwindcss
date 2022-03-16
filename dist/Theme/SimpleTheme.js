var generalNormalClassName = "mt-1 block w-full rounded-md border-gray-300 shadow-sm";
var generalErrorClassName = "bg-error-200 text-error-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm";
var choiceBoxClassName = {
    wrapper: { normal: 'mt-2', error: 'mt-2' },
    label: {
        horizontal: { normal: 'inline-flex items-center', error: 'inline-flex items-center' },
        vertical: { normal: 'inline-flex items-center', error: 'inline-flex items-center' }
    },
    input: {
        horizontal: {
            normal: 'rounded border-gray-300 text-primary-600 shadow-sm',
            error: 'rounded border-gray-300 text-error-600 shadow-sm',
        },
        vertical: {
            normal: 'rounded border-gray-300 text-primary-600 shadow-sm',
            error: 'rounded border-gray-300 text-error-600 shadow-sm',
        }
    },
    space: {
        vertical: { normal: 'w-1', error: 'w-1' },
        horizontal: { normal: 'w-1', error: 'w-1' }
    },
    optionText: { normal: 'dark:text-white', error: 'text-error-500' }
};
export var simpleTheme = {
    inputClassName: { normal: generalNormalClassName, error: generalErrorClassName },
    selectClassName: { normal: generalNormalClassName, error: generalErrorClassName },
    selectOptionClassName: { normal: generalNormalClassName, error: generalErrorClassName },
    textAreaClassName: { normal: generalNormalClassName, error: generalErrorClassName },
    checkboxClassName: choiceBoxClassName,
    radio: choiceBoxClassName,
    label: '',
    button: 'px-4 py-2 bg-primary-500 rounded text-white cursor-pointer'
};
