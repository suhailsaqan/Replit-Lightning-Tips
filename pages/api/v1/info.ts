import { Request, Response } from "express";
import { middlewares } from "src/helpers/express";
import { env } from "src/helpers/env";
import { Url } from "src/helpers/url";

import { bech32 } from "bech32";

export const encode = (str: string) => {
  const words = bech32.toWords(Buffer.from(str, "utf-8"));
  return bech32.encode("lnurl", words);
};

export default async function handler(req: Request, res: Response) {
  await middlewares(req, res);
  const { origin } = Url(req);

  res.status(200).json({
    url: encode(`${origin}/api/v1`),
    max: env.max,
    min: env.min,
    name: env.name,
  });
}
