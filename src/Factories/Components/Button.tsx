import React, {useCallback} from "react";
import {ClassName, ClassNameBuilder} from "../../Utils/ClassNameBuilder";
import {useTheme} from "../../Theme/ThemeContext";
import {useDefaults} from "../../Defaults/DefaultsContext";
import {Button, ServiceFactory} from "wbox-forms";

export type  ButtonPosition = "fullwidth" | "start" | "end" | "center";

interface Props {
    text: string;
    position?: ButtonPosition;
    classNameBuilder?: ClassNameBuilder;
    className?: ClassName;
}

export function LayoutButton(props: Props) {
    const defaults = useDefaults();
    const classNameBuilder = props.classNameBuilder ?? defaults.classNameBuilder();
    const position = props.position ?? defaults.layout.shared.buttonPosition;
    const justify = position !== "fullwidth" ? `justify-${position}` : '';
    const theme = useTheme();
    const buttonClassName = classNameBuilder.build(props.className, theme.button);
    const additionalClassName = position === "fullwidth" ? "w-full" : "";
    const className = `${buttonClassName} ${additionalClassName}`;
    return <div className={`flex p-2 ${justify}`}>
        <Button render={serviceFactory => <InnerButton serviceFactory={serviceFactory}
                                                       className={className}
                                                       text={props.text}/>}
        />
    </div>;
}

function InnerButton({
                         serviceFactory,
                         className,
                         text
                     }: { serviceFactory: ServiceFactory, className: string, text: string }) {
    const onClick = useCallback(async e => {
        e.preventDefault();
        const submit = serviceFactory.createSubmitService();
        await submit.submit();
    }, [serviceFactory]);
    return <button onClick={onClick} className={className}>
        {text}
    </button>
}