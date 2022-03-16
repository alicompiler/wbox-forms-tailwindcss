/// <reference types="react" />
import { ClassName, ClassNameBuilder } from "../../Utils/ClassNameBuilder";
export declare type ButtonPosition = "fullwidth" | "start" | "end" | "center";
interface Props {
    text: string;
    position?: ButtonPosition;
    classNameBuilder?: ClassNameBuilder;
    className?: ClassName;
}
export declare const DATA_TEST_ID_LAYOUT_BUTTON_WRAPPER = "wbox-layout-button-wrapper";
export declare const DATA_TEST_ID_LAYOUT_BUTTON = "wbox-layout-button";
export declare function LayoutButton(props: Props): JSX.Element;
export {};
