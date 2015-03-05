var babel = require('broccoli-babel-transpiler');
module.exports = babel('src', {
  sourceMap: 'inline'
});
