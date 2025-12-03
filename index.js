const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send(`🚀 Hello from Backstage deployed Node.js App!`));

app.listen(port, () => console.log(`Node app running on port ${port}`));
