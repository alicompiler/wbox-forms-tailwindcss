import {ChoiceBoxClassName, Theme} from "./Theme";

const generalNormalClasses = "mt-1 block w-full";
const generalErrorClasses = "mt-1 block text-error-500 bg-error-200 border-error-500 w-full";


const labelClassName = 'inline-flex items-center'
const choiceBoxClassName: ChoiceBoxClassName = {
    wrapper: {normal: 'mt-2', error: 'mt-2'},
    label: {
        horizontal: {normal: labelClassName, error: labelClassName},
        vertical: {normal: labelClassName, error: labelClassName}
    },
    input: {
        horizontal: {normal: '', error: 'text-error-500'},
        vertical: {normal: '', error: 'text-error-500'}
    },
    space: {
        vertical: {normal: 'w-1', error: 'w-1'},
        horizontal: {normal: 'w-1', error: 'w-1'}
    },
    optionText: {normal: 'dark:text-white', error: 'text-error-500'}
}

export const unStyledTheme: Theme = {
    inputClassName: {
        normal: generalNormalClasses,
        error: generalErrorClasses
    },
    selectClassName: {
        normal: generalNormalClasses,
        error: generalErrorClasses
    },
    selectOptionClassName: {
        normal: generalNormalClasses,
        error: generalErrorClasses
    },
    textAreaClassName: {
        normal: generalNormalClasses,
        error: generalErrorClasses
    },
    checkboxClassName: choiceBoxClassName,
    radio: choiceBoxClassName
}