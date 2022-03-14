import {TableLayoutFormFactory} from "../Factories/TableLayoutFormFactory";

export function SimpleFormFactoryExample() {
    const factory = new TableLayoutFormFactory();
    return factory.create({
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
                    label: 'Password',
                }
            },
            phone: {
                type: 'text',
                fieldConfig: {
                    name: 'phone',
                    label: 'Password',
                }
            },
            date: {
                type: 'date',
                fieldConfig: {
                    name: 'date',
                    label: 'Password',
                }
            }
        },
        extraOptions: {
            labelWidth: 120,
            labelAlignment: 'center',
            button: {
                text: 'LOGIN'
            }
        }
    })
}