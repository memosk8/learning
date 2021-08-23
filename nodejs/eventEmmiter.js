const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

// This object exposes, among many others, the on and emit methods.

// emit is used to trigger an event
// on is used to add a callback function that's going to be executed when the event is triggered
// For example, let's create a start event, and as a matter of providing a sample, we react to that by just logging to the console:

eventEmitter.on('start', () => {
  console.log('started')
})

// with parameters
eventEmitter.on('start', number => {
   console.log(`started ${number}`)
 })
 
 eventEmitter.emit('start', 23)

//  The EventEmitter object also exposes several other methods to interact with events, like

//    once(): add a one-time listener
//    removeListener() / off(): remove an event listener from an event
//    removeAllListeners(): remove all listeners for an event