const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 4000;
const path = require('path');
const cors = require('cors');

app.use(express.static('../dist/cors-serving/'));
app.use(cors());

app.use('/get-cookie', createProxyMiddleware({
    target: 'http://localhost:3000/',// Replace with the target server URL
    changeOrigin: true, // Set this to true if you are working with a different domain
}));

app.use('/set-cookie', createProxyMiddleware({
    target: 'http://localhost:3000/',// Replace with the target server URL
    changeOrigin: true, // Set this to true if you are working with a different domain
}));

app.get('*', function(req,res) {
    res.sendFile(path.resolve('../dist/cors-serving/index.html'));
});

app.listen(port, () => {
    console.log(`app is running at http://localhost:4000`);
});