import {Theme} from "./Theme";

const generalNormalClasses = "mt-1 block w-full";
const generalErrorClasses = "mt-1 block text-error-500 bg-error-200 border-error-500 w-full";

export const unStyled: Theme = {
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
    checkboxClassName: {
        wrapper: {normal: 'mt-2', error: 'mt-2'},
        label: {
            horizontal: {
                normal: 'inline-flex items-center',
                error: 'inline-flex items-center'
            },
            vertical: {
                normal: 'inline-flex items-center',
                error: 'inline-flex items-center'
            }
        },
        input: {
            horizontal: {normal: '', error: 'text-error-500'},
            vertical: {normal: '', error: 'text-error-500'}
        },
        space: {
            vertical: {normal: 'w-1', error: 'w-1'},
            horizontal: {normal: 'w-1', error: 'w-1'}
        },
        optionText: {normal: '', error: 'text-error-500'}
    },
    radio: {
        wrapper: {normal: 'mt-2', error: 'mt-2'},
        label: {
            horizontal: {
                normal: 'inline-flex items-center',
                error: 'inline-flex items-center'
            },
            vertical: {
                normal: 'inline-flex items-center',
                error: 'inline-flex items-center'
            }
        },
        input: {
            horizontal: {normal: '', error: 'text-error-500'},
            vertical: {normal: '', error: 'text-error-500'}
        },
        space: {
            vertical: {normal: 'w-1', error: 'w-1'},
            horizontal: {normal: 'w-1', error: 'w-1'}
        },
        optionText: {normal: '', error: 'text-error-500'}
    }
}