let utils = require('./hw1_modules/utils/index');

let CustomEvent = require('./eventEmitter/customEventEmitter');


let emitter = new CustomEvent();


emitter.on('go1', function() {
    console.log('go1 is on')
});

emitter.on('go2', function () {
    console.log(`go2 is on`)
});


emitter.emit('go1');
emitter.emit('go2');
emitter.remove('go1');
emitter.emit('go1');

//utils.getDate('my b-day', 1992, 12, 7);