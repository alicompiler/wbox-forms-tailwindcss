import {ChoiceBoxClassName, Theme} from "./Theme";

const generalNormalClassName = "mt-0 dark:text-white bg-transparent block w-full px-0.5 border-0 border-b-2 border-gray-200 dark:border-gray-600 focus:ring-0 focus:border-black dark:focus:border-white";
const generalErrorClassName = "mt-0 text-error-500 bg-transparent block w-full px-0.5 border-0 border-b-2 border-gray-200 dark:border-gray-600 focus:ring-0 focus:border-black dark:focus:border-white";

const choiceBoxClassName: ChoiceBoxClassName = {
    wrapper: {normal: 'mt-2', error: 'mt-2'},
    label: {
        horizontal: {normal: 'inline-flex items-center', error: 'inline-flex items-center'},
        vertical: {normal: 'inline-flex items-center', error: 'inline-flex items-center'}
    },
    input: {
        horizontal: {
            normal: 'border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black',
            error: 'border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black',
        },
        vertical: {
            normal: 'border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black',
            error: 'border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black',
        }
    },
    space: {
        vertical: {normal: 'w-1', error: 'w-1'},
        horizontal: {normal: 'w-1', error: 'w-1'}
    },
    optionText: {normal: 'dark:text-white', error: 'text-error-500'}
};

export const underlinedTheme: Theme = {
    inputClassName: {normal: generalNormalClassName, error: generalErrorClassName},
    selectClassName: {normal: generalNormalClassName, error: generalErrorClassName},
    selectOptionClassName: {normal: generalNormalClassName, error: generalErrorClassName},
    textAreaClassName: {normal: generalNormalClassName, error: generalErrorClassName},
    checkboxClassName: choiceBoxClassName,
    radio: choiceBoxClassName
}
