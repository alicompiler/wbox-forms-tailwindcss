import {FieldProps, FieldTypeMap, FormConfiguration} from "wbox-forms";
import {ClassName} from "../Utils/ClassNameBuilder";
import React from "react";
import {ExtraOptionsBase, FormFactoryBase} from "./FormFactoryBase";
import {TableRowFieldWrapper} from "./Components/TableRowFieldWrapper";

type FieldConfig = FieldProps & { label: string, labelClassName?: ClassName };

export type LabelAlignment = "center" | "end" | "start";

export interface TableLayoutExtraOptions extends ExtraOptionsBase {
    order?: string[];
    showDivider?: boolean;
    spaceWidth?: number;
    labelAlignment?: LabelAlignment;
    labelWidth: number;
}

export class TableLayoutFormFactory extends FormFactoryBase<TableLayoutExtraOptions> {
    protected renderField(name: string, field: React.ReactElement, fieldConfig: FieldConfig, configuration: FormConfiguration<FieldTypeMap, FieldConfig, TableLayoutExtraOptions>, index: number, fieldsCount: number): React.ReactElement {
        return <TableRowFieldWrapper field={field}
                                     label={fieldConfig.label}
                                     labelClassName={fieldConfig.labelClassName}
                                     labelWidth={configuration.extraOptions!.labelWidth}
                                     labelAlignment={configuration.extraOptions!.labelAlignment}
                                     spaceWidth={configuration.extraOptions!.spaceWidth}
                                     displayDivider={configuration.extraOptions!.showDivider && index !== (fieldsCount - 1)}
                                     classNameBuilder={configuration.extraOptions!.classNameBuilder}
        />
    }
}