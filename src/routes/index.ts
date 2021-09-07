
import { Express, Request, Response } from "express";

import {encodeUrl, decodeUrl, getUrlStatistic} from "../controllers/url.controller";

const routes = (app: Express) => {

    app.get("/", (req: Request, res:Response) => {
        // return res.send("Server Running");
        return res.json("Server Running");
    });

    app.post('/api/encode', encodeUrl);
    app.post('/api/decode', decodeUrl);
    app.get('/api/statistic/:shortUrl', getUrlStatistic);

}

export default routes;