import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

import type { NextApiRequest, NextApiResponse } from "next";
import { SocialsSanity } from "../../types/sanity";

type Data = {
  socials: SocialsSanity[];
};

const query = groq`*[_type == "social"]`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: SocialsSanity[] = await sanityClient.fetch(query);

  res.status(200).json({ socials });
}
