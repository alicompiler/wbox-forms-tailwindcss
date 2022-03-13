export interface Theme {
    inputClassName: StateBasedClassName;
    textAreaClassName: StateBasedClassName;
    selectOptionClassName: StateBasedClassName;
    selectClassName: StateBasedClassName;
    checkboxClassName: ChoiceBoxClassName;
    radio: ChoiceBoxClassName;
    label: string;
    button: string;
}

export interface ChoiceBoxClassName {
    wrapper: StateBasedClassName;
    label: OrientedClassName<StateBasedClassName>;
    input: OrientedClassName<StateBasedClassName>;
    space: OrientedClassName<StateBasedClassName>;
    optionText: StateBasedClassName;
}

export interface OrientedClassName<T> {
    vertical: T;
    horizontal: T;
}

export interface StateBasedClassName {
    normal: string;
    error: string;
}
