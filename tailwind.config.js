let configuration = {
    theme: {
        backgroundColor: (theme) => ({
            ...theme('colors'),
            "primary": "#292851",
            "primary-light": "#292851AA",
            "divider": "#EEE"
        }),
    },
    plugins: [
        require('@tailwindcss/custom-forms')
    ],
};

if (process.env.NODE_ENV === 'production') {
    configuration.purge = {
        content: [
            './src/**/*.ts',
            './src/**/*.tsx',
        ],
        enabled: true,
        mode: 'all',
    };
}

module.exports = configuration;
