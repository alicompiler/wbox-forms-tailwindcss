import { ClassName, ClassNameBuilder } from "../../Utils/ClassNameBuilder";
import { ReactElement } from "react";
interface Props {
    field: ReactElement;
    label: string;
    labelClassName: ClassName;
    classNameBuilder?: ClassNameBuilder;
}
export declare const DATA_TEST_ID_SIMPLE_FIELD_LABEL = "wbox-simple-field-label";
export declare function SimpleFieldWrapper(props: Props): JSX.Element;
export {};
