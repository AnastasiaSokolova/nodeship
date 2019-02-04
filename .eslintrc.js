module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
        'mocha': true
    },
    "extends": "airbnb-base",
    'parserOptions': {
        "ecmaVersion": 6,
        'ecmaFeatures': {
            'jsx': true
        },
        'sourceType': 'module'
    },
    /*'plugins': [
        'react'
    ],*/
    // Rule overrides with link to ESLint rule and original rule that was altered.
    'rules': {

        // -------------------------------------------------------------
        // Style
        // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js

        // http://eslint.org/docs/rules/camelcase
        //'camelcase': [2, { 'properties': 'never' }],
        'camelcase': 2,

        // http://eslint.org/docs/rules/func-names
        //'func-names': 1,
        'func-names': 2,

        // http://eslint.org/docs/rules/func-style
        //'func-style': 0,
        'func-style': 2,

        // http://eslint.org/docs/rules/jsx-quotes
        //'jsx-quotes': 0,
        'jsx-quotes': [2, 'prefer-single'],

        // http://eslint.org/docs/2.0.0/rules/keyword-spacing
        //'keyword-spacing': [2, {
        //  'before': true,
        //  'after': true,
        //  'overrides': {
        //    'return': { 'after': true },
        //    'throw': { 'after': true },
        //    'case': { 'after': true }
        //  }
        //}],
        'keyword-spacing': [2, {
            'before': true,
            'after': true,
            'overrides': {
                'return': { 'after': true },
                'throw': { 'after': true },
                'case': { 'after': true }
            }
        }],

        // http://eslint.org/docs/rules/linebreak-style
        //'linebreak-style': 0,
        'linebreak-style': [2, 'unix'],

        // http://eslint.org/docs/rules/max-len
        //'max-len': [2, 100, 2, {
        //  'ignoreUrls': true,
        //  'ignoreComments': false
        //}],
        'max-len': [2, 85, 2, {
            'ignoreUrls': true,
            'ignoreComments': true
        }],

        // http://eslint.org/docs/rules/max-statements-per-line
        //'max-statements-per-line': [0, { 'max': 1 }],
        'max-statements-per-line': [2, { 'max': 1 }],

        // http://eslint.org/docs/rules/new-cap
        //'new-cap': [2, { 'newIsCap': true }],
        'new-cap': [2, {
            'newIsCap': true, 'capIsNewExceptions': [
                'Router'
            ]
        }
        ],

        // http://eslint.org/docs/rules/newline-per-chained-call
        //'newline-per-chained-call': [0, { 'ignoreChainWithDepth': 3 }],
        'newline-per-chained-call': 2,

        // http://eslint.org/docs/rules/no-inline-comments
        //'no-inline-comments': 0,
        'no-inline-comments': 2,

        // http://eslint.org/docs/rules/no-lonely-if
        //'no-lonely-if': 0,
        'no-lonely-if': 2,

        // disallow dangling underscores in identifiers
        //'no-underscore-dangle': [2, { allowAfterThis: false }],
        'no-underscore-dangle': 0,

        // http://eslint.org/docs/rules/operator-assignment
        //'operator-assignment': 0,
        'operator-assignment': 2,

        // http://eslint.org/docs/rules/operator-linebreak
        //'operator-linebreak': 0,
        'operator-linebreak': [2, 'after', {
            'overrides': {
                '?': 'before', ':': 'before', '&&': 'before', '||': 'before'
            }
        }],

        // http://eslint.org/docs/rules/space-before-function-paren
        //'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never' }],
        'space-before-function-paren': [2, 'never'],

        // http://eslint.org/docs/rules/space-unary-ops
        //'space-unary-ops': 0,
        'space-unary-ops': 2,

        // -------------------------------------------------------------
        // Variables
        // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/variables.js

        // http://eslint.org/docs/rules/no-shadow
        //'no-shadow': 2,
        'no-shadow': [2, { 'allow': ['cb', 'done', 'err', 'resolve', 'reject'] }],

        // http://eslint.org/docs/rules/no-undef-init
        //'no-undef-init': 0,
        'no-undef-init': 2,

        // http://eslint.org/docs/rules/no-undefined
        //'no-undefined': 0,
        'no-undefined': 2,

        // http://eslint.org/docs/rules/no-unused-vars
        //'no-unused-vars': [2, { 'vars': 'local', 'args': 'after-used' }],
        'no-unused-vars': [2, { 'vars': 'local', 'args': 'none', 'varsIgnorePattern': '[should, React]' }],

        // http://eslint.org/docs/rules/no-use-before-define
        //'no-use-before-define': 2,
        'no-use-before-define': [0, { 'functions': false, 'classes': true }],

        // -------------------------------------------------------------
        // Best Practices
        // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js

        // rule: http://eslint.org/docs/rules/no-param-reassign.html
        //'no-param-reassign': [2, { 'props': true }],
        'no-param-reassign': 0,

        // http://eslint.org/docs/rules/no-unused-expressions
        //'no-unused-expressions': 2,
        'no-unused-expressions': 0,

        // -------------------------------------------------------------
        // Errors
        // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/errors.js

        // http://eslint.org/docs/rules/curly
        //'curly': [2, 'multi-line'],
        'curly': 2,

        // http://eslint.org/docs/rules/dot-location
        //dot-location': 0
        'dot-location': [2, 'property'],

        // http://eslint.org/docs/rules/no-eq-null
        //'no-eq-null': 0,
        'no-eq-null': 2,

        // http://eslint.org/docs/rules/no-implicit-coercion
        //'no-implicit-coercion': 0,
        'no-implicit-coercion': 2,

        // http://eslint.org/docs/rules/no-multi-str
        //'no-multi-str': 2,
        'no-multi-str': 0,

        // disallow use of Object.prototypes builtins directly
        // http://eslint.org/docs/rules/no-prototype-builtins
        //'no-prototype-builtins': 2,
        'no-prototype-builtins': 0,

        // http://eslint.org/docs/rules/no-warning-comments
        //'no-warning-comments': [0, {
        //  'terms': ['todo', 'fixme', 'xxx'], 'location': 'start'
        //}],
        'no-warning-comments': [1, {
            'terms': ['todo', 'fixme', 'xxx'], 'location': 'start'
        }],

        // http://eslint.org/docs/rules/no-unexpected-multiline
        //'no-unexpected-multiline': 0,
        'no-unexpected-multiline': 2,

        // -------------------------------------------------------------
        // ES6
        // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js

        // http://eslint.org/docs/rules/comma-dangle
        //'comma-dangle': [2, 'always-multiline'],
        'comma-dangle': [0, 'always-multiline'],

        // http://eslint.org/docs/rules/no-confusing-arrow
        //'no-confusing-arrow': [2, {
        //  'allowParens': true,
        //}],
        'no-confusing-arrow': 0,

        // http://eslint.org/docs/rules/no-unexpected-multiline
        //'no-unexpected-multiline': 0,
        'no-unexpected-multiline': 2,

        // http://eslint.org/docs/rules/prefer-const
        //'prefer-const': [2, {'destructuring': 'any'}],
        'prefer-const': [2, { 'destructuring': 'all' }],

        // http://eslint.org/docs/rules/prefer-spread
        //'prefer-spread': 0,
        'prefer-spread': 2,

        // -------------------------------------------------------------
        // Import
        // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js

        // Forbid the use of extraneous packages
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        // Our app packages trigger this error
        //'import/no-extraneous-dependencies': [2, {
        'import/no-extraneous-dependencies': [0, {
            devDependencies: false,
            optionalDependencies: false
        }],

        // Require modules with a single export to use a default export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        //'import/prefer-default-export': 2,
        'import/prefer-default-export': 0,

        // -------------------------------------------------------------
        // Node
        // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/node.js

        // http://eslint.org/docs/rules/callback-return
        //'callback-return': 0,
        'callback-return': 2,

        // http://eslint.org/docs/rules/global-require
        //'global-require': 2,
        'global-require': 0,

        // http://eslint.org/docs/rules/handle-callback-err
        //'handle-callback-err': 0,
        'handle-callback-err': 2,

        // -------------------------------------------------------------
        // React
        // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js

        // only .jsx files may have JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        //'react/jsx-filename-extension': [2, { extensions: ['.jsx'] }],
        //'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.js'] }],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
        //'react/jsx-space-before-closing': [2, 'always'],
        //'react/jsx-space-before-closing': [0, 'always'],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        //'react/prefer-stateless-function': 2,
        //'react/prefer-stateless-function': 0,

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
        //'react/jsx-space-before-closing': [2, 'always'],
        //'react/jsx-space-before-closing': [0, 'always'],

        /* None of these works as I expected
         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
         'react/react-in-jsx-scope': [1],
         'react/jsx-uses-react': [1],
         'react/jsx-uses-vars': [1],*/

        // -------------------------------------------------------------
        // React A11Y
        // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react-a11y.js

        // disallow href "#"
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/href-no-hash.md
        //'jsx-a11y/href-no-hash': [2, ['a']]
        //'jsx-a11y/href-no-hash': [0, ['a']],

        // require that JSX labels use "htmlFor"
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
        //'jsx-a11y/label-has-for': [2, ['label']]
        //'jsx-a11y/label-has-for': [0, ['label']]
    }
};
