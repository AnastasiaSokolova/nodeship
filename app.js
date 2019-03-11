const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const alerter = () => console.log('event1 happened!');
const alerter2 = () => console.log('event2 happened!');
myEmitter.addListener('event', alerter);
myEmitter.addListener('event2', alerter2);
myEmitter.on('event3', (a, b) => {
  setImmediate(() => {
    console.log('async event happened!');
  });
});
myEmitter.emit('event');
myEmitter.emit('event3', 'a', 'b');
myEmitter.emit('event2');
