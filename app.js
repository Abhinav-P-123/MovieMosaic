let express = require("express")
let app = express()
let movies = require("./controllers/movieController")
app.set("view engine", "ejs")
app.use(express.urlencoded())
app.use(express.static("public"))
app.listen(2000, () => console.log("Server is up and running on port 2000"))

app.use("/", movies)
