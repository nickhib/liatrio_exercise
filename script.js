const http = require('http');
const hostname = '0.0.0.0';
// we want to set hostname "0.0.0.0" so it can be accessible from any ip. including external network connections.
//to be more precise this is only for testing purposes. depending on disired implementaion one mat need to use firewall
//rules or reverse proxies to control access to the application. 
const port = 8000;// lets choose a port we wish to use 

const server = http.createServer((req, res) => {//this creates a HTTP server in Node.js, req and res parameters 
    //represent the incoming and out going http requests / responses. req(request) res(response)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!\n');// prints hellow world. 
});

server.listen(port, hostname, () => {//listens for incoming http requests, we will feed it the port and hostname like so
    // to access we will use http://localhost:3000 then we should be able to see hello world 
  console.log(`Server running at http://${hostname}:${port}/`);
});
