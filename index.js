const express = require("express")
const port = 5000

const app = express();

app.get("/", (req, res) => {
    res.send('Hello WORLD')
})

app.listen(port , () => {
    console.log("Serveur est en ligne!!")
})