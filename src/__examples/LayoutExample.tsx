import {TableLayoutExtraOptions, TableLayoutFormFactory} from "../Factories/TableLayoutFormFactory";
import {FieldTypeMap, FormConfiguration} from "wbox-forms";
import {ExtraOptionsBase, FieldConfig} from "../Factories/FormFactoryBase";
import {SimpleFormFactory} from "../Factories/SimpleFormFactory";

export function LayoutExample() {
    const tableLayoutFormFactory = new TableLayoutFormFactory();
    const simpleFormFactory = new SimpleFormFactory();
    const configuration = {
        formConfig: {},
        fieldConfig: {
            username: {
                type: 'text',
                fieldConfig: {
                    name: 'username',
                    label: 'Username',
                },
            },
            password: {
                type: 'password',
                fieldConfig: {
                    name: 'password',
                    label: 'Password',
                }
            },
            email: {
                type: 'text',
                fieldConfig: {
                    name: 'email',
                    label: 'Email',
                }
            },
            phone: {
                type: 'text',
                fieldConfig: {
                    name: 'phone',
                    label: 'Phone',
                }
            },
            date: {
                type: 'date',
                fieldConfig: {
                    name: 'date',
                    label: 'Birthdate',
                }
            }
        },
        extraOptions: {
            button: {
                text: 'Create Account'
            }
        }
    };

    const tableLayoutConfiguration: FormConfiguration<FieldTypeMap, FieldConfig, TableLayoutExtraOptions> = {
        ...configuration,
        extraOptions: {
            ...configuration.extraOptions,
            labelWidth: 120,
            labelAlignment: 'center',
            showDivider: true
        }
    };

    const simpleConfiguration: FormConfiguration<FieldTypeMap, FieldConfig, ExtraOptionsBase> = {
        ...configuration
    }

    return <div>
        <div className={'p-4'}>
            <h1>Table Layout Form Example</h1>
            {tableLayoutFormFactory.create(tableLayoutConfiguration)}
        </div>
        <br/><br/>
        <hr/>
        <br/><br/>
        <div className={'p-4'}>
            <h1>Simple Form Example</h1>
            {simpleFormFactory.create(simpleConfiguration)}
        </div>
    </div>
}