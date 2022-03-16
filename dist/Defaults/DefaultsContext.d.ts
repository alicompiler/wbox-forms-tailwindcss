import React from "react";
import { Orientation } from "../Components/ChoiceBoxBase";
import { ButtonPosition } from "../Factories/Components/LayoutButton";
import { ClassNameBuilder } from "../Utils/ClassNameBuilder";
import { LabelAlignment } from "../Factories/TableLayoutFormFactory";
export interface Defaults {
    checkboxOrientation: Orientation;
    radioButtonOrientation: Orientation;
    classNameBuilder: () => ClassNameBuilder;
    layout: {
        simple: {};
        table: {
            labelAlignments: LabelAlignment;
            labelWidth: number;
            spaceWidth: number;
        };
        shared: {
            buttonPosition: ButtonPosition;
        };
    };
}
export declare const defaults: Defaults;
export declare const DefaultsContext: React.Context<Defaults>;
export declare const DefaultsProvider: React.Provider<Defaults>;
export declare function useDefaults(): Defaults;
