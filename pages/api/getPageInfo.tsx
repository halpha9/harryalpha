import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

import type { NextApiRequest, NextApiResponse } from "next";
import { PageInfoSanity } from "../../types/sanity";

type Data = {
  pageInfo: PageInfoSanity;
};

const query = groq`*[_type == "pageInfo"]`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result: PageInfoSanity[] = await sanityClient.fetch(query);
  const pageInfo = result[0];
  res.status(200).json({ pageInfo });
}
