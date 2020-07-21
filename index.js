module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "env": {
    "jest/globals": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "plugins": [
    "unicorn", 
    "unused-imports",
    "simple-import-sort",
    "fp",
    "modules-newline",
    "import",
    "@typescript-eslint",
    "jest"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/all",
    "plugin:react/recommended"
  ],
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".js",
        ".jsx",
        ".ts",
        ".tsx"
      ]
    },
    "import/resolver": {
      "typescript": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ],
        "alwaysTryTypes": true
      },
      "babel-module": {}
    }
  },
  "rules": {
    // React
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",

    // FP
    "fp/no-arguments": "error",
    "fp/no-class": "error",
    "fp/no-delete": "error",
    "fp/no-events": "error",
    "fp/no-get-set": "error",
    "fp/no-let": "error",
    "fp/no-loops": "error",
    "fp/no-mutating-assign": "error",
    "fp/no-mutating-methods": "error",
    "fp/no-mutation": [
      "error",
      {
        "commonjs": true
      }
    ], 
    "fp/no-nil": "error",
    "fp/no-proxy": "error",
    "fp/no-rest-parameters": "error",
    "fp/no-this": "error",
    "fp/no-throw": "error",
    "fp/no-unused-expression": "error",
    "fp/no-valueof-field": "error",
    "no-var": "error",
     
    // Unicorn
    "unicorn/better-regex": "error",
    "unicorn/catch-error-name": "error",
    "unicorn/consistent-function-scoping": "error",
    "unicorn/custom-error-definition": "off",
    "unicorn/error-message": "error",
    "unicorn/escape-case": "error",
    "unicorn/expiring-todo-comments": "error",
    "unicorn/explicit-length-check": "error",
		"unicorn/filename-case": [
			"error",
			{
				"case": "camelCase"
			}
		],
    "unicorn/import-index": "error",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-abusive-eslint-disable": "error",
    "unicorn/no-array-instanceof": "error",
    "unicorn/no-console-spaces": "error",
    "unicorn/no-fn-reference-in-iterator": "error",
    "unicorn/no-for-loop": "error",
    "unicorn/no-hex-escape": "error",
    "unicorn/no-keyword-prefix": "off",
    "no-nested-ternary": "off",
    "unicorn/no-nested-ternary": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-null": "error",
    "unicorn/no-object-as-default-parameter": "error",
    "unicorn/no-process-exit": "error",
    "unicorn/no-reduce": "error",
    "unicorn/no-unreadable-array-destructuring": "error",
    "unicorn/no-unsafe-regex": "off",
    "unicorn/no-unused-properties": "off",
    "unicorn/no-useless-undefined": "error",
    "unicorn/no-zero-fractions": "error",
    "unicorn/number-literal-case": "error",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-array-find": "error",
    "unicorn/prefer-dataset": "error",
    "unicorn/prefer-event-key": "error",
    "unicorn/prefer-flat-map": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-negative-index": "error",
    "unicorn/prefer-node-append": "error",
    "unicorn/prefer-node-remove": "error",
    "unicorn/prefer-number-properties": "error",
    "unicorn/prefer-optional-catch-binding": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-reflect-apply": "error",
    "unicorn/prefer-replace-all": "off",
    "unicorn/prefer-set-has": "error",
    "unicorn/prefer-spread": "error",
    "unicorn/prefer-starts-ends-with": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-text-content": "error",
    "unicorn/prefer-trim-start-end": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/prevent-abbreviations": "error",
    "unicorn/string-content": "off",
    "unicorn/throw-new-error": "error",

    // Jest
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",

    "modules-newline/import-declaration-newline": "error",
    "modules-newline/export-declaration-newline": "error",

    "simple-import-sort/sort": "error",

    "unused-imports/no-unused-imports": "error",

    "object-curly-newline": [
      "error",
      {
        "minProperties": 3,
        "multiline": true
      }
    ],
    "comma-dangle": [
      "error",
      "only-multiline"
    ],
    "func-style": [
      "error",
      "expression"
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "arrow-body-style": [
      "error",
      "as-needed"
    ],
    "space-infix-ops": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "curly": [
      "error",
      "multi",
      "consistent"
    ],
    "quote-props": [
      "error",
      "as-needed"
    ],
    "brace-style": [
      "error",
      "stroustrup"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": "function",
        "next": "function"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      },
      {
        "blankLine": "always",
        "prev": [
          "const",
          "let",
          "var"
        ],
        "next": "*"
      },
      {
        "blankLine": "any",
        "prev": [
          "const",
          "let",
          "var"
        ],
        "next": [
          "const",
          "let",
          "var"
        ]
      }
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 2,
        "maxEOF": 1
      }
    ],
    "indent": [
      "error",
      2
    ]
  },
  "overrides": [
    {
      "files": [
        "*.test.js",
        "*.spec.js"
      ],
      "rules": {
        "fp/no-unused-expression": "off",
        "fp/no-nil": "off"
      }
    }, 
    {
      "files": [
        "*.jsx",
        "*.tsx"
      ],
      "rules": {
        "unicorn/filename-case": [
          "error",
          {
            "case": "pascalCase",
						"ignore": [
							'pages/_app.jsx',
							'pages/_document.jsx',
						]
          }
        ]
      }
    },
    {
      "files": [
        "*.js",
        "*.ts"
      ],
      "rules": {
        "@typescript-eslint/ban-ts-comment": "off"
      }
    }
  ]
}
