const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;
const routes = require("./routes/index");

app.use("/api",routes);

app.use(express.static(path.join(__dirname,"public")))

app.listen(PORT, () => {
    console.log(`App has started @ ${PORT}`)
})

