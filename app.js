import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { test } from "./backend/controllers/jugadores.controllers.js"

dotenv.config()
mongoose.connect(process.env.urldb)

.then(()=>{
    console.log("Si jalo")
})

.catch((error)=>{
    console.log("no jalo", error)
})

const app = express()
app.use(cors())
app.listen(4000, () => {
    console.log("si se escucha we")
})

test()