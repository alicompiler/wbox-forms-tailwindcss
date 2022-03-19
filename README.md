# wBox Forms - Tailwind Components

this library is extension for [`wbox-forms`](https://www.github.com/alicompiler/wbox-forms) library, its provide set of
ready to use components that use tailwindcss library for styling.

the supported elements are :

- Text
- Password
- Select
- Checkbox
- RadioButton
- TextArea
- Date
- Time
- DateTime

### Installation

    npm install wbox-forms-tailwindcss
    // or using yarn
    yarn add wbox-forms-tailwindcss

### Example

    const colors = [
        {text: 'Red', value: 'red'},
        {text: 'Blue', value: 'blue'},
        {text: 'Green', value: 'green'}
    ];

    <Form>
        <TextField name={'name'}/>
        <PasswordField name={'password'}/>
        <DateField name={'date'}/>
        <TimeField name={'time'}/>
        <DateTimeField name={'datetime'}/>
        <SelectField name={'color'} options={colors}/>
        <Checkbox name={'checkbox'} text={'Test Checkbox'}/>
        <RadioButton name={'radio'} options={colors}/>
        <TextArea name={'message'} rows={5} placeholder={'Message...'}/>
    </Form>

### Theme

we provide four types of themes:

* Simple
* UnStyled
* Solid
* Underlined

by default **Simple Theme** is used, you can change theme by wrapping the form (or the entire application)
with `ThemeProvider` component. you also can define your own theme by creating a theme object that applies to
the `Theme` interface.

    import { simpleTheme, solidTheme, unStyledTheme, underlinedTheme, Theme } from "wbox-forms-tailwwindcss";    

    const myCustomTheme : Theme = {...};

    <ThemeProvider value={PUT_THE_THEME_HERE}>
        <App />
    <ThemeProvider>

### Factories

we provide two form factories that you can use to help you build forms from configuration only

    const simpleFormFactory = new SimpleFormFactory();
    const configuration = {
        formConfig: {...},
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
                text: 'Login'
            }
        }
    };

    return simpleFormFactory.create(configuration);

we provide:

* SimpleFormFactory (checkout the examples)
* TableLayoutFormFactory (checkout the examples)

### Defaults

here is the default values we've added

    {
        checkboxOrientation: 'horizontal',
        radioButtonOrientation: 'horizontal',
        layout: {
            table: {
                spaceWidth: 16,
                labelAlignments: "center",
                labelWidth: 120
            },
            simple: {},
            shared: {
                buttonPosition: "end"
            }
        },
        classNameBuilder: () => new DefaultClassNameBuilder()
    }

but you can change theme by wrapping your form (or entire application) with `DefaultsProvider` component.

    <DefaultsProvider value={MY_DEFAULT_VALUES}>
        <App />
    </DefaultsProvider>