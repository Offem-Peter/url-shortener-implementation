
import { Express, Request, Response } from "express";

import {redirectUrl ,encodeUrl, decodeUrl, getUrlStatistic} from "../controllers/url.controller";

import validateResource from "../middleware/validation";
import encodeSchema from "../schema/encode.schema";
import decodeSchema from "../schema/decode.schema";


const routes = (app: Express) => {

    app.get("/", (req: Request, res:Response) => {
        // return res.send("Server Running");
        return res.json("Server Running");
    });

    app.get("/:shortUrl", redirectUrl);
    app.post('/api/encode', validateResource(encodeSchema), encodeUrl);
    app.post('/api/decode',validateResource(decodeSchema), decodeUrl);
    app.get('/api/statistic/:shortUrl', getUrlStatistic);

}

export default routes;