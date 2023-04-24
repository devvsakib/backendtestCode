import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"

const PORT = process.env.PORT || 5000
const app = express()

dotenv.config()
app.use(bodyParser.json())
app.use(cors())


app.use("/", (req, res) => {
    res.json({
        status: "API working fine",
        code: 200
    })
})


app.listen(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))