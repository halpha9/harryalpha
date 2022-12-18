import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

import type { NextApiRequest, NextApiResponse } from "next";
import { SkillsSanity } from "../../types/sanity";

type Data = {
  skills: SkillsSanity[];
};

const query = groq`*[_type == "skill"]`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: SkillsSanity[] = await sanityClient.fetch(query);

  res.status(200).json({ skills });
}
