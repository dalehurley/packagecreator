import { creator } from "@hero-page/hero-ai-package-creator";

export default async function handler(req, res) {
  const { body } = req;
  const { config, ideas } = body;
  const result = await creator({ config, ideas });
  res.status(200).json(result);
}
