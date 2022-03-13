import {SimpleFormFactory} from "../Factories/SimpleFormFactory";
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
            }
        },
        extraOptions: {
            button: {
                text: 'LOGIN'
            }
        }
    })
}