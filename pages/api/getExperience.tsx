import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

import type { NextApiRequest, NextApiResponse } from "next";
import { ExperienceSanity } from "../../types/sanity";

type Data = {
  experience: ExperienceSanity[];
};

const query = groq`*[_type == "experience"]`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experience: ExperienceSanity[] = await sanityClient.fetch(query);

  res.status(200).json({ experience });
}
