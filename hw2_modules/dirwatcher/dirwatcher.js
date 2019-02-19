const EventEmmiter = require('events');
const chokidar = require('chokidar');



 class Dirwatcher extends EventEmmiter {


     constructor(){
         super();
         if(Dirwatcher.instance){
             return Dirwatcher.instance;
         }
         Dirwatcher.instance = this;
     }


     watch(path, delay) {
          chokidar.watch(path).on('change', () => {
                 // I use path from function watch instead of chokidar path
                 // if to use path from chokidar it will return the directory and file name
                setTimeout(() => {
                   this.emit('custom-event', path)
                }, delay)
            });
     }
};


module.exports = Dirwatcher;