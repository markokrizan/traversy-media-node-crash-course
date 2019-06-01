 const Eventemitter = require('events');


 //Create emitter class:

 class MyEmitter extends Eventemitter{}

 // Init object:

 const myEmitter = new MyEmitter();

 //Event listener:

 myEmitter.on('event', () => console.log('Event Fired!'));

 //Init event:

 myEmitter.emit('event');
 myEmitter.emit('event');
 myEmitter.emit('event');
 myEmitter.emit('event');