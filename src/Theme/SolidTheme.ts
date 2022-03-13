import {ChoiceBoxClassName, Theme} from "./Theme";

const generalNormalClassName = "mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:ring-0";
const generalErrorClassName = "mt-1 block w-full rounded-md bg-error-200 border-transparent focus:border-gray-500 focus:ring-0";

const choiceBoxClassName: ChoiceBoxClassName = {
    wrapper: {normal: 'mt-2', error: 'mt-2'},
    label: {
        horizontal: {normal: 'inline-flex items-center', error: 'inline-flex items-center'},
        vertical: {normal: 'inline-flex items-center', error: 'inline-flex items-center'}
    },
    input: {
        horizontal: {
            normal: 'rounded bg-gray-200 border-transparent dark:text-black focus:ring-1 focus:ring-offset-2 focus:ring-gray-500',
            error: 'rounded bg-error-200 border-transparent text-error-500 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500'
        },
        vertical: {
            normal: 'rounded bg-gray-200 border-transparent text-white dark:text-black focus:ring-1 focus:ring-offset-2 focus:ring-gray-500',
            error: 'rounded bg-error-200 border-transparent text-error-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500'
        }
    },
    space: {
        vertical: {normal: 'w-1', error: 'w-1'},
        horizontal: {normal: 'w-1', error: 'w-1'}
    },
    optionText: {normal: 'dark:text-white', error: 'text-error-500'}
};


export const solidTheme: Theme = {
    inputClassName: {normal: generalNormalClassName, error: generalErrorClassName},
    selectClassName: {normal: generalNormalClassName, error: generalErrorClassName},
    selectOptionClassName: {normal: generalNormalClassName, error: generalErrorClassName},
    textAreaClassName: {normal: generalNormalClassName, error: generalErrorClassName},
    checkboxClassName: choiceBoxClassName,
    radio: choiceBoxClassName,
    label: '',
    button: 'px-4 py-2 bg-primary-500 rounded text-white cursor-pointer'
}



