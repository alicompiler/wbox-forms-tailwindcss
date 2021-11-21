import {Theme} from "./Theme";

export const unStyled: Theme = {
    inputClassName: {
        normal: 'mt-1 block w-full',
        error: 'mt-1 block text-error border-error w-full'
    },
    selectClassName: {
        normal: 'mt-1 block w-full',
        error: 'mt-1 block text-error border-error w-full'
    },
    selectOptionClassName: {
        normal: 'mt-1 block w-full',
        error: 'mt-1 block text-error border-error w-full'
    },
    textAreaClassName: {
        normal: 'mt-1 block w-full',
        error: 'mt-1 block text-error border-error w-full'
    },
    checkboxClassName: {
        wrapper: {
            vertical: {
                normal: 'mt-2',
                error: 'mt-2',
            },
            horizontal: {
                normal: 'mt-2',
                error: 'mt-2'
            }
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
                normal: 'text-primary',
                error: 'text-error',
            },
            vertical: {
                normal: 'text-primary',
                error: 'text-error'
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
            vertical: {
                normal: 'mt-2',
                error: 'mt-2',
            },
            horizontal: {
                normal: 'mt-2',
                error: 'mt-2'
            }
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
                normal: 'text-primary',
                error: 'text-error',
            },
            vertical: {
                normal: 'text-primary',
                error: 'text-error'
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