// Event emitter
const EventEmitter = require('events');

const celebrity = new EventEmitter();

celebrity.on('race',function(result){
    if(result === "won")
    {
        console.log("Congratulation, you are the best!");
    }

    
    }
);

celebrity.on('race',function(result){
    if(result === 'won')
    {
        console.log("From random with love");
    }
}
);

process.on('exit',(code) => console.log("Program exit with code: " + code));

celebrity.emit('race','lost');


