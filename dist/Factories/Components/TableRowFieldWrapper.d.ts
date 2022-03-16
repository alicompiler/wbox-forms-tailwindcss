/// <reference types="react" />
import { ClassName, ClassNameBuilder } from "../../Utils/ClassNameBuilder";
import { LabelAlignment } from "../TableLayoutFormFactory";
interface Props {
    field: any;
    label: string;
    labelClassName?: ClassName;
    labelWidth?: number;
    labelAlignment?: LabelAlignment;
    spaceWidth?: number;
    displayDivider?: boolean;
    classNameBuilder?: ClassNameBuilder;
}
export declare const DATA_TEST_ID_TABLE_ROW_FIELD_WRAPPER_SPACE = "wbox-table-row-field-wrapper-space";
export declare const DATA_TEST_ID_TABLE_ROW_LABEL = "wbox-table-row-label";
export declare const DATA_TEST_ID_TABLE_ROW_LABEL_WRAPPER = "wbox-table-row-label-wrapper";
export declare const DATA_TEST_ID_TABLE_ROW_DIVIDER = "wbox-table-row-divider";
export declare function TableRowFieldWrapper(props: Props): JSX.Element;
export {};
