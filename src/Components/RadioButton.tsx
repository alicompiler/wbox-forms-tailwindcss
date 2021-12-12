import {FieldProps as BaseFieldProps} from "wbox-forms";
import {WithFieldProps} from "wbox-forms/dist/Field/HOCs";
import {WithOptions} from "./WithOption";
import {ChoiceBoxBase, Orientation} from "./ChoiceBoxBase";
import {withTailwindField, WithTailwindFieldProps} from "../HOCs/WithTailwindField";
import {useDefaults} from "../Defaults/DefaultsContext";
import {orientedWithStateBasedClassNameSelector, stateBasedClassNameSelector} from "../Utils/ClassNameBuilder";
import React from "react";

export interface RadioButtonProps extends BaseFieldProps, WithOptions, WithTailwindFieldProps {
    orientation?: Orientation;
}

interface Props extends RadioButtonProps, WithFieldProps {

}

function RadioButton(props: Props) {
    const {tailwindOptions} = props;
    const defaults = useDefaults();
    const orientation: Orientation = props.orientation ?? defaults.radioButtonOrientation;
    const wrapperClassName = tailwindOptions.classNameBuilder.build(undefined, stateBasedClassNameSelector(tailwindOptions.theme.radio.wrapper, props.field));
    return <div className={wrapperClassName}>
        {
            props.options.map((option, index) =>
                <React.Fragment key={index}>
                    <ChoiceBoxBase name={props.name}
                                   type={"radio"}
                                   classNames={tailwindOptions.theme.radio}
                                   classNameBuilder={tailwindOptions.classNameBuilder}
                                   orientation={orientation}
                                   field={props.field}
                                   dataTestId={tailwindOptions.dataTestId}
                                   checked={props.field.value === option.value}
                                   value={option.value}
                                   handleChange={props.handleChange}
                                   text={option.text}/>
                    {
                        index < props.options.length - 1 && <span className={'inline-block w-4'}/>
                    }
                </React.Fragment>
            )
        }
    </div>
}

export default withTailwindField(RadioButton);