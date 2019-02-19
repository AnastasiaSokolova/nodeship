const Dirwatcher = require('./hw2_modules/dirwatcher/dirwatcher');
let importer = require('./hw2_modules/importer/importer');


const watcher = new Dirwatcher();

watcher.watch('./data', 4000);


importer.listen();
importer.listenSync();

