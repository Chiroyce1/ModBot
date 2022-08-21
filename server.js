import express from 'express';
const app = express();

app.all('/', (req, res) => {
    res.send('im alive!');
})

export function stayAlive() {
    app.listen(3000, () => {
        console.log("🚀 Keep alive HTTP server is running on ::3000");
    })
}