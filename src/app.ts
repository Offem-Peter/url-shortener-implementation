import express from "express";
import config from "config";
import routes  from "./routes";

const app = express();

const PORT = config.get("port");

app.listen(PORT,()=>{
    console.log(`URL Shortening Service listening at http://localhost:${PORT}`)
    routes(app);
})