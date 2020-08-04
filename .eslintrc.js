const path = require("path");

module.exports =  {
    plugins: [
        "react-hooks",
        "emotion",
        "filenames",
    ],
    env: {
        es6: true,
        browser: true,
        jest: true,
        node: true
    },
    parserOptions:  {
        ecmaVersion:  2018,
        sourceType:  "module",
        ecmaFeatures:  {
            jsx:  true,
        },
    },
    parser:  "@typescript-eslint/parser",
    extends:  [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
    ],
    globals: {
    },
    overrides: [
        {
            files: ["*.mdx"],
            extends:  [
                "plugin:mdx/recommended",
            ],
            rules:  {
                "react/jsx-indent": "off",
                "react/jsx-filename-extension": "off",
                "semi": "off"
            },
        },
        {
            files: ["*.ts", "*.tsx"],
            extends:  [
                "plugin:@typescript-eslint/recommended",
            ],
            rules:  {
                "@typescript-eslint/ban-ts-ignore": "error",
                "@typescript-eslint/camelcase": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-empty-function": "off"
            },
        },
        {
            files: ["*.jsx", "*.tsx", "*.mdx"],
            extends: [
              "plugin:import/errors",
              "plugin:import/warnings",
              "plugin:import/typescript",
            ],
            rules: {
                "filenames/match-exported": [ 2, "pascal" ],
                "import/no-default-export": 2,
            }
        }
    ],
    settings: {
        react: {
            version: "detect"
        },
        "import/resolver": {
            "alias": {
                map: [
                    [ "packages", path.join(__dirname, "packages") ]
                ],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
            }
        }
    },
    rules:  {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "semi": 2,
        "semi-spacing": [2, {"before": false, "after": true}],
        "quotes": [2, "double", "avoid-escape"],
        "jsx-quotes": [1, "prefer-double"],
        "quote-props": 0,
        "emotion/jsx-import": "error",
        "emotion/no-vanilla": "error",
        "emotion/import-from-emotion": "error",
        "emotion/styled-import": "error",
        "emotion/syntax-preference": [2, "string"],
        "prefer-const": 2,
        "no-var": 2,
        "import/prefer-default-export": 0,
        "import/extensions": [2, {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never",
        }],
        "react/no-multi-comp": ["error", { "ignoreStateless": false }],
        "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "peerDependencies": true}]
    }
};
