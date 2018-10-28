

var rule = require("../lib/rules/no-tree-shaking-imports"),
    RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
});

var ruleTester = new RuleTester();

ruleTester.run("no-tree-shaking-imports", rule, {

    valid: [
      "import Menu from '@material-ui/core/Menu';",
      "import MenuItem from '@material-ui/core/MenuItem';"
    ],

    invalid: [
        {
            code: "import { Menu } from '@material-ui/core';",
            errors: [{
              message: 'Prefer single MUI imports over tree shaking',
              type: 'ImportDeclaration'
            }]
        }
    ]
});
