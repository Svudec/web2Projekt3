const express = require('express');
const serveStatic = require("serve-static")
const history = require('connect-history-api-fallback');
const path = require('path');
let app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(history({index: './public/index.html'}));
const port = process.env.PORT || 3000;
app.listen(port);