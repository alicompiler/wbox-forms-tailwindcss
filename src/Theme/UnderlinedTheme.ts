import {Theme} from "./Theme";

export const underlinedTheme: Theme = {
    inputClassName: {
        normal: 'mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black',
        error: 'mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
    },
    selectClassName: {
        normal: 'mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black',
        error: 'mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
    },
    selectOptionClassName: {
        normal: 'mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black',
        error: 'mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
    },
    textAreaClassName: {
        normal: 'mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black',
        error: 'mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
    },
    checkboxClassName: {
        wrapper: {
            normal: 'mt-2',
            error: 'mt-2'
        },
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
            vertical: {
                normal: 'w-1',
                error: 'w-1'
            },
            horizontal: {
                normal: 'w-1',
                error: 'w-1'
            }
        },
        optionText: {
            normal: '',
            error: 'text-error'
        }
    },
    radio: {
        wrapper: {
            normal: 'mt-2',
            error: 'mt-2'
        },
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
            vertical: {
                normal: 'w-1',
                error: 'w-1'
            },
            horizontal: {
                normal: 'w-1',
                error: 'w-1'
            }
        },
        optionText: {
            normal: '',
            error: 'text-error'
        }
    }
}
