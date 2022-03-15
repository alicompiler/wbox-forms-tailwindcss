import {ClassName, ClassNameBuilder} from "../../Utils/ClassNameBuilder";
import {useTheme} from "../../Theme/ThemeContext";
import {useDefaults} from "../../Defaults/DefaultsContext";
import {LabelAlignment} from "../TableLayoutFormFactory";
import {Fragment} from "react";

interface Props {
    field: any,
    label: string,
    labelClassName?: ClassName,
    labelWidth?: number,
    labelAlignment?: LabelAlignment;
    spaceWidth?: number;
    displayDivider?: boolean;
    classNameBuilder?: ClassNameBuilder;
}

export const DATA_TEST_ID_TABLE_ROW_FIELD_WRAPPER_SPACE = "wbox-table-row-field-wrapper-space";
export const DATA_TEST_ID_TABLE_ROW_LABEL = "wbox-table-row-label";
export const DATA_TEST_ID_TABLE_ROW_LABEL_WRAPPER = "wbox-table-row-label-wrapper";
export const DATA_TEST_ID_TABLE_ROW_DIVIDER = "wbox-table-row-divider";

export function TableRowFieldWrapper(props: Props) {
    const defaults = useDefaults();
    const theme = useTheme();
    const classNameBuilder: ClassNameBuilder = props.classNameBuilder ?? defaults.classNameBuilder();
    const labelClassName = classNameBuilder.build(props.labelClassName, theme.label);
    const labelAlignment = props.labelAlignment ?? defaults.layout.table.labelAlignments;
    const spaceWidth = props.spaceWidth ?? defaults.layout.table.spaceWidth;
    const labelWidth = props.labelWidth ?? defaults.layout.table.labelWidth;
    return <Fragment>
        <div className={'py-2 flex __wbox-tailwind-table-layout-field-wrapper'}>
            <div data-testid={DATA_TEST_ID_TABLE_ROW_LABEL_WRAPPER} className={`flex items-${labelAlignment}`}>
                <label data-testid={DATA_TEST_ID_TABLE_ROW_LABEL} className={labelClassName}
                       style={{width: labelWidth}}>
                    {props.label}
                </label>
            </div>
            <div data-testid={DATA_TEST_ID_TABLE_ROW_FIELD_WRAPPER_SPACE} className={'inline-block'}
                 style={{width: spaceWidth}}/>
            {props.field}
        </div>
        {
            props.displayDivider &&
            <div data-testid={DATA_TEST_ID_TABLE_ROW_DIVIDER} className={'py-2'}>
                <hr/>
            </div>
        }
    </Fragment>
}