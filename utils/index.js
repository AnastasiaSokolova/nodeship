#!/usr/bin/env node

const winston = require('winston');
const fs = require('fs');
const through = require('through2');
const csv = require('csvtojson');
const request = require('request');
const combineStream = require('combined-stream');

const trumpet = require('trumpet');
const tr = trumpet();

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

function inputOutput(filePath) {
    fs.createReadStream(filePath).pipe(process.stdout);
    logger.info(`${filePath} was successfully output into the console`);
}
function transformFile(filePath) {
    fs.createReadStream(filePath).pipe(csv()).pipe(process.stdout);
    logger.info(`${filepath} was successfully transformed to csv and printed into the console`);
}
function transform(filePath) {
    let transformation = through(function (chunk, _, cb) {
        this.push(chunk.toString().toUpperCase());
        cb();
    });
    fs.createReadStream(filePath).pipe(transformation).pipe(process.stdout);
    logger.info(`${filePath} was successfully transformed to uppercase style and printed into the console`);
}
function saveToJSON(filePath) {
    if(!fs.existsSync(filePath)) {
        errorFunction(new Error(`no such file ${filePath}`));
        return
    }

    let wstream = fs.createWriteStream('utils/csvFile.json');
    fs.createReadStream(filePath).pipe(csv()).pipe(wstream);
    logger.info(`${filePath} was successfully saved to utils/csvFile.json`);
}
function cssBundler(dirname) {
    if(!fs.existsSync(dirname)) {
        errorFunction(new Error(`no such directory ${dirname}`));
        return    }

    let wstream = fs.createWriteStream(dirname + '/bundle.css');
    let combine = combineStream.create();

    fs.readdir(dirname, function(err, filenames) {
        if (err) {
            logger.info('Its impossible load files from this directory ' + err);
            return;
        }
        filenames.forEach(function(filename) {
            combine.append(fs.createReadStream(dirname+'/'+filename)) //.pipe(tr).pipe(wstream)
        });
        combine.append(request('https://www.epam.com/etc/clientlibs/foundation/main.min.fc69c13add6eae57cd247a91c7e26a15.css'));
        combine.pipe(tr).pipe(wstream);
    });

    logger.info(`Files from ${dirname} directory were successfully bundled into the ${dirname}/bundle.css file`);
}
function printHelp() {
    logger.info('This is useful msg from help');
}

function errorFunction(e) {
   logger.error(e.message);
}

function runFunction(arg) {
    let {a, f, d} = arg;
    switch (a) {
        case 'transform':
            transform(f);
            break;
        case 'save-to-json':
            saveToJSON(f);
            break;
        case 'transform-file':
            transformFile(f);
            break;
        case 'io':
            inputOutput(f);
            break;
        case 'bundle-css':
            cssBundler(d);
            break;
        case 'printHelp':
            printHelp();
            break;
        default:
            errorFunction()
    }
}

const yargs = require('yargs');

const argv = yargs
    .usage('Usage: npm run cli -- -a <action> [-f <file_path>] | [-path <dir_name>]')
    .help('this ')
    .alias('h', 'help')
    .options({
        'a': {
            alias: 'action',
            describe: 'action which is one of your function',
            demandOption: true,
            choices: ['io', 'transform-file', 'save-to-json', 'bundle-css', 'transform']
        },
        'f': {
            alias: 'file_path',
            describe: 'provide a path to file',
        },
        'path': {
            alias: 'dir_name',
            describe: 'provide a directory'
        }
    })
    /*.check(function (argv) {
        if (argv.h && !argv.a) {
            yargs.exitProcess(true);
            printHelp()
        }
        return true;
    })
    .fail(function(msg, err) {
        console.log('blah');
        printHelp()
        process.exit(1);
    })*/
    //.showHelpOnFail(false, printHelp())
    .argv;



if(argv.h) {
    printHelp();
} else {
    runFunction(argv)
}



//EXAMPLE
/*
npm run cli -- -h -a transform
$ npm run cli -- -a transform
$ npm run cli -- -a io -f <relative_file_path>
$ npm run cli -- -a transform-file -f <relative_csv_file_path>
$ npm run cli -- -a save-to-json -f <relative_csv_file_path>
$ npm run cli -- -a bundle-css -f <relative_css_file> --path
 */


