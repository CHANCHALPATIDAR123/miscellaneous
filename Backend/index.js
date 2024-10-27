const express = require("express");
const app = express();
const port = 8080;

app.get("/register", (req, res) => {
    console.log("Get resquest access");
});

app.post("/register", (req, res) => {
    console.log("post resquest access");
});

app.listen(port, () => {
    console.log(`This is local Port ${port}`);
})