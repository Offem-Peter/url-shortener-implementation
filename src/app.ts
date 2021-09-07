import express from "express";
import config from "config";
import bodyParser from "body-parser";
import routes  from "./routes";
import db from "./db";

const app = express();

const PORT = config.get("port") as number;

app.use(bodyParser.json());

app.listen(PORT,()=>{
    console.log(`URL Shortening Service listening at http://localhost:${PORT}`)
    db();
    routes(app);
})