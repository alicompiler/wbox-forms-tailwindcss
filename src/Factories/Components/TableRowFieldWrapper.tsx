import {ClassName, ClassNameBuilder} from "../../Utils/ClassNameBuilder";
import {useTheme} from "../../Theme/ThemeContext";
import {useDefaults} from "../../Defaults/DefaultsContext";
import {LabelAlignment} from "../TableLayoutFormFactory";
import {Fragment} from "react";

interface Props {
    field: any,
    label: string,
    labelClassName: ClassName,
    labelWidth?: number,
    labelAlignment?: LabelAlignment;
    spaceWidth?: number;
    displayDivider?: boolean;
    classNameBuilder?: ClassNameBuilder;
}

export function TableRowFieldWrapper(props: Props) {
    const defaults = useDefaults();
    const theme = useTheme();
    const classNameBuilder: ClassNameBuilder = props.classNameBuilder ?? defaults.classNameBuilder();
    const labelClassName = classNameBuilder.build(props.labelClassName, theme.label);
    const labelAlignment = props.labelAlignment ?? defaults.layout.table.labelAlignments;
    const spaceWidth = props.spaceWidth ?? defaults.layout.table.spaceWidth;
    const labelWidth = props.labelWidth ?? defaults.layout.table.labelWidth;
    return <Fragment>
        <div className={'__wbox-tailwind-simple-field-wrapper py-2 flex'}>
            <div className={`flex items-${labelAlignment}`}>
                <label className={labelClassName} style={{width: labelWidth}}>
                    {props.label}
                </label>
            </div>
            <div className={'inline-block'} style={{width: spaceWidth}}/>
            {props.field}
        </div>
        {
            props.displayDivider &&
            <div className={'py-2'}>
                <hr/>
            </div>
        }
    </Fragment>
}