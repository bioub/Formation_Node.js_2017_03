/* eslint no-console: "off" */
// 1 - Si besoin créer un répertoire dist (en JS)
// 2 - Copier index.html et main.js dans dist
// 3 - Remplacer dans le fichier index.html
// node_modules\systemjs\dist\system.src.js
// par
// https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.20.9/system.js
// (idéalement dans la même version)
// 4 - Regarder SystemJS Builder et l'utiliser dans votre script
const fs = require('fs');
const path = require('path');

const chalk = require('chalk');
const Builder = require('systemjs-builder');

const srcPath = __dirname;
const distPath = path.join(__dirname, 'dist');

try {
  fs.statSync(distPath);
}
catch(e) {
  fs.mkdirSync(distPath);
  console.log(chalk.green(`Created dir ${distPath}`));
}

let dataBufferPackage =  fs.readFileSync(path.join(srcPath, 'node_modules/systemjs/package.json'));
let versionSystem = JSON.parse(dataBufferPackage.toString()).version;

let dataBuffer =  fs.readFileSync(path.join(srcPath, 'index.html'));
let contenu = dataBuffer.toString();
contenu = contenu.replace('node_modules/systemjs/dist/system.src.js', `https://cdnjs.cloudflare.com/ajax/libs/systemjs/${versionSystem}/system.js`);
contenu = contenu.replace('<script>System.import(\'js/main.js\');</script>', '<script src="bundle.js"></script>');

fs.writeFileSync(path.join(distPath, 'index.html'), contenu);
console.log(chalk.green('File index.html copied and tranformed'));

const builder = new Builder();
builder.buildStatic('js/main.js', path.join(distPath, 'bundle.js'))
  .then(() => console.log(chalk.green('SystemJS build completed')))
  .catch(err => console.log(chalk.red(`SystemJS build error : ${err.message}`)));
