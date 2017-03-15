const arithmetic = require('./arithmetic');
const log = require('./log');

var localeACeFichier = 'loc';
global.maVariableGlobale = 'glob';

log(arithmetic.sum(1, 2));
