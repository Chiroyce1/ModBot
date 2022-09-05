import express from 'express';
const app = express();

app.all('/', (req, res) => {
    console.log('[>] Received uptime ping');
    res.send('<h3 id="alive">im alive!</h3>');
});

export function stayAlive() {
    app.listen(3000, () => console.log("🚀 Keep alive HTTP server is running on ::3000"));
};
