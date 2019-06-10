/**
 * @Author: zhaoFinger
 * @Date: 2017-10-13 16:21:20
 * @Last Modified by: zhaoFinger
 * @Last Modified time: 2017-10-28 15:27:52
 */

const fs = require('fs');
const inquirer = require('inquirer');

const generateFile = (fileName, title) => {
  let html =
    `<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
</head>
<body>

</body>
</html>`;

  let css = `@import 'common.less';`;
  let js = `require('../css/${fileName}.less');`;

  fs.writeFile(`./src/html/${fileName}.html`, html, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Generate ${fileName}.html file ok!`);
    }
  });

  fs.writeFile(`./src/css/${fileName}.less`, css, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Generate ${fileName}.css file ok!`);
    }
  });

  fs.writeFile(`./src/js/${fileName}.js`, js, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Generate ${fileName}.js file ok!`);
    }
  });
};

inquirer.prompt([
  {
    type: 'input',
    name: 'fileName',
    message: 'Please input page file name:',
    default: 'index'
  },
  {
    type: 'input',
    name: 'title',
    message: 'Please input page title:',
    default: '首页'
  }
]).then(answers => {
  generateFile(answers.fileName, answers.title);
});
