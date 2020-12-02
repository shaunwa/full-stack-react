const fs = require('fs');
const recipes = require('./fake-data');

const FILE_NAME = 'recipes.json';

fs.writeFileSync(
    FILE_NAME,
    JSON.stringify(recipes),
    'utf-8',
);

console.log('Done!');