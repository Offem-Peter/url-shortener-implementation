
import { Express, Request, Response } from "express";

const routes = (app: Express) => {

    app.get("/",(req: Request, res:Response)=>{
        // return res.send("Server Running");
        return res.json("Server Running");
    })

}

export default routes;