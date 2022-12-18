import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

import type { NextApiRequest, NextApiResponse } from "next";
import { ProjectSanity } from "../../types/sanity";

type Data = {
  projects: ProjectSanity[];
};

const query = groq`*[_type == "projects"]`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: ProjectSanity[] = await sanityClient.fetch(query);

  res.status(200).json({ projects });
}
