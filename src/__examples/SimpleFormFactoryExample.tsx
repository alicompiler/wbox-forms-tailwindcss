import {SimpleFormFactory} from "../Factories/SimpleFormFactory";

export function SimpleFormFactoryExample() {
    const factory = new SimpleFormFactory();
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