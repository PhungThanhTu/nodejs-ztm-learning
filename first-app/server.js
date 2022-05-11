const {get,request} = require('https');
// use https is the same but for sending request to 
// server with https security
// get method is the request method that automatically end
// request
const req = get('https://www.google.com',(res) => {
  res.on('data',(chunk)=> {
      console.log(`Data chunk is ${chunk}`)
  });
// chunk is a piece of data, not the whole respond
  res.on('end',()=> {
    console.log('No more data');
  });
});

// req.end();
// using get we don't need to use end method of request