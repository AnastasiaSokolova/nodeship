const fs = require('fs');
const Dirwatcher = require('./../dirwatcher/dirwatcher');
const csv = require('csvtojson');
const watcher = new Dirwatcher();

module.exports = {

    listen() {
        watcher.on('custom-event', (path) => {
            this.import(path).then(res => console.log(res));
        })
    },

    listenSync() {
        watcher.on('custom-event', (path) => {
            this.importSync(path);
        });
    },

    importSync(path) {
        const filename = fs.readdirSync(path, (err, res) => {
          return res;
        });

        csv()
            .fromFile(`${path}/${filename}`)
            .then(res => console.log(res) );

    },

    import(path) {
        return new Promise(resolve => {
            fs.readdir(path, (err, filename) => {
                resolve(csv().fromFile(`${path}/${filename}`));
            });
        });
    }
};