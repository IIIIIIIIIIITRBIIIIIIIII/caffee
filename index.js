import express from "express";
import router from "./router/router.js";
export const app = express()
const port = 6969
app.set("view engine", "ejs" )
app.use("/", router)
app.listen(port)