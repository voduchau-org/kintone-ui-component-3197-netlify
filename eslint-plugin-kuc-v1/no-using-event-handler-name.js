module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const superClass = node.superClass.name;
        if (superClass !== "KucBase") return;

        const clickHandlePattern = '\\s@click="((?!_handleClick).)*"';
        const changeHandlePattern = '\\s@changek="((?!_handleChange).)*"';
        const focusHandlePattern = '\\s@focusk="((?!_handleFocus).)*"';
        const blurHandlePattern = '\\s@blurk="((?!_handleBlur).)*"';
        const inputHandlePattern = '\\s@inputk="((?!_handleInput).)*"';
        const keydownHandlePattern = '\\s@keydownk="((?!_handleKeyDown).)*"';
        const mouseupHandlePattern = '\\s@mouseupk="((?!_handleMouseUp).)*"';
        const mousedownHandlePattern =
          '\\s@mousedownk="((?!_handleMouseDown).)*"';
        const mouseoverHandlePattern =
          '\\s@mouseoverk="((?!_handleMouseOver).)*"';
        const mouseleaveHandlePattern =
          '\\s@mouseleavek="((?!_handleMouseLeave).)*"';

        const clickHandleRegex = new RegExp(clickHandlePattern);
        const changeHandleRegex = new RegExp(changeHandlePattern);
        const focusHandleRegex = new RegExp(focusHandlePattern);
        const blurHandleRegex = new RegExp(blurHandlePattern);
        const inputHandleRegex = new RegExp(inputHandlePattern);
        const keydownHandleRegex = new RegExp(keydownHandlePattern);
        const mouseupHandleRegex = new RegExp(mouseupHandlePattern);
        const mousedownHandleRegex = new RegExp(mousedownHandlePattern);
        const mouseoverHandleRegex = new RegExp(mouseoverHandlePattern);
        const mouseleaveHandleRegex = new RegExp(mouseleaveHandlePattern);

        const sourceCode = context.getSourceCode().getText();
        if (
          !clickHandleRegex.test(sourceCode) &&
          !changeHandleRegex.test(sourceCode) &&
          !focusHandleRegex.test(sourceCode) &&
          !blurHandleRegex.test(sourceCode) &&
          !inputHandleRegex.test(sourceCode) &&
          !keydownHandleRegex.test(sourceCode) &&
          !mouseupHandleRegex.test(sourceCode) &&
          !mousedownHandleRegex.test(sourceCode) &&
          !mouseoverHandleRegex.test(sourceCode) &&
          !mouseleaveHandleRegex.test(sourceCode)
        )
          return;
        context.report({
          node: node,
          message: `Name of function for internal event handler processing
            will be name as "handle + event handler name + Element name"
            ex: _handleClickDropdownToggle
                _handleChangeDropdownToggle
                ...`
        });
      }
    };
  }
};
