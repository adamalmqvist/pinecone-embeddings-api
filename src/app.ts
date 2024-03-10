import express from "express";
import { z } from "zod";
import { getEmbeddings } from "./controller/embeddings";
import "dotenv/config";
const app = express();
const port = 3000;

const queryParamsSchema = z.object({
  search: z.string(),
});

app.get("/", async (req, res) => {
  try {
    const { search } = queryParamsSchema.parse(req.query);
    const embeddings: string[] = await getEmbeddings(search);
    res.send(embeddings);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    console.error(error);
    res.status(500).send("An unexpected error occurred");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
