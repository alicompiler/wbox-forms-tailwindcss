import {useDefaults} from "../../Defaults/DefaultsContext";
import {useTheme} from "../../Theme/ThemeContext";
import {ClassName, ClassNameBuilder} from "../../Utils/ClassNameBuilder";
import {ReactElement} from "react";

interface Props {
    field: ReactElement;
    label: string;
    labelClassName: ClassName;
    classNameBuilder?: ClassNameBuilder;
}

export function SimpleFieldWrapper(props: Props) {
    const defaults = useDefaults();
    const theme = useTheme();
    const classNameBuilder: ClassNameBuilder = props.classNameBuilder ?? defaults.classNameBuilder();
    const labelClassName = classNameBuilder.build(props.labelClassName, theme.label);
    return <div className={'__wbox-tailwind-simple-layout-field-wrapper py-2'}>
        <label className={labelClassName}>
            {props.label}
            {props.field}
        </label>
    </div>
}