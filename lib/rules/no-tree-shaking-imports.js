

module.exports = function(context) {

    return {
      ImportDeclaration: (node) => {
        if (node.specifiers.some((s) => s.type === 'ImportSpecifier') &&
            node.source.value.match(/@material-ui/)) {
              context.report(node, 'Prefer single MUI imports over tree shaking');
            }
    }
  };
};
