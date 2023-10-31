'use strict';
const express = require('express');
// Constants
const PORT = 80;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
    const response = {
        message: `My name is ...`,
        timestamp: Date.now()
      };
    
      res.json(response);
});
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
