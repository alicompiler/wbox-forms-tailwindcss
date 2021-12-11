import {Theme} from "./Theme";

const generalNormalClassName = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50";
const generalErrorClassName = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-error-300 focus:ring focus:ring-error-200 focus:ring-opacity-50";

const choiceBoxClassName = {
    wrapper: {normal: 'mt-2', error: 'mt-2'},
    label: {
        horizontal: {normal: 'inline-flex items-center', error: 'inline-flex items-center'},
        vertical: {normal: 'inline-flex items-center', error: 'inline-flex items-center'}
    },
    input: {
        horizontal: {
            normal: 'rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-offset-0 focus:ring-primary-200 focus:ring-opacity-50',
            error: 'rounded border-gray-300 text-error-600 shadow-sm focus:border-error-300 focus:ring focus:ring-offset-0 focus:ring-error-200 focus:ring-opacity-50',
        },
        vertical: {
            normal: 'rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-offset-0 focus:ring-primary-200 focus:ring-opacity-50',
            error: 'rounded border-gray-300 text-error-600 shadow-sm focus:border-error-300 focus:ring focus:ring-offset-0 focus:ring-error-200 focus:ring-opacity-50',
        }
    },
    space: {
        vertical: {normal: 'w-1', error: 'w-1'},
        horizontal: {normal: 'w-1', error: 'w-1'}
    },
    optionText: {normal: '', error: 'text-error'}
}

export const simpleTheme: Theme = {
    inputClassName: {normal: generalNormalClassName, error: generalErrorClassName},
    selectClassName: {normal: generalNormalClassName, error: generalErrorClassName},
    selectOptionClassName: {normal: generalNormalClassName, error: generalErrorClassName},
    textAreaClassName: {normal: generalNormalClassName, error: generalErrorClassName},
    checkboxClassName: choiceBoxClassName,
    radio: choiceBoxClassName
}
