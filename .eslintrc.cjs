module.exports = {
    env: {
        browser: true,
        es2021: true,
    },

    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
    ],

    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },

    plugins: ["react"],

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "react/react-in-jsx-scope": "off",
    },

    overrides: [
        {
            files: [".eslintrc.js", ".eslintrc.cjs"],
            env: {
                node: true,
            },
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
};