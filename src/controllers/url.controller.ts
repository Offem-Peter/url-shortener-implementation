import { Request, Response } from "express";
import urlModel from "../models/url.model";

import config from "config";

const HOST = `${config.get("host")}:${config.get("port")}/`; //get host

export async function encodeUrl(req: Request, res: Response) {
  
  // Get the destination from the request body
  const { originalUrl } = req.body;

  //check if shortUrl exists
  const short = await urlModel.findOne({ originalUrl }).lean();

  if( short ){
    return res.json({"encodedUrl":short.shortUrl});
  }

  // Create a shortLink
  const shortUrl = await urlModel.create({ originalUrl });
  return res.json({"encodedUrl":shortUrl.shortUrl});
  
  
  
}

export async function decodeUrl(req: Request, res: Response) {
  const { shortUrl } = req.body;

  const long = await urlModel.findOne({ shortUrl }).lean();

  if (!long) {
    return res.sendStatus(404);
  }

  return res.json({"decodedUrl":long.originalUrl});
}

export async function getUrlStatistic(req: Request, res: Response) {
  const { shortUrl } = req.params;

  console.log(HOST);

  const short = await urlModel.findOne({ shortUrl }).lean();

  if (!short) {
    return res.sendStatus(404);
  }

  return res.json(short);
}