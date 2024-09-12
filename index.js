const express = require("express")
const port = 5000

const app = express();

app.get("/", (req, res) => {
    res.send('Hello WORLD')
})

const contact = require ("./C:\Raitra\True\true")
app.contact("/contact, contact")


app.listen(port , () => {
    console.log("Serveur est en ligne!!")
})