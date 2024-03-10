import { PineconeStore } from "@langchain/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";

export const getEmbeddings = async (query: string): Promise<string[]> => {
  const pinecone = new Pinecone();
  const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX!);
  const embeddings = new OpenAIEmbeddings({
    modelName: "text-embedding-ada-002",
  });
  const embeddedQuery = await embeddings.embedQuery(query);
  const results = await pineconeIndex.query({
    vector: embeddedQuery,
    topK: 10,
    includeValues: true,
    includeMetadata: true,
  });
  return results.matches.map((match) => {
    return (match.metadata?.text as string) || "";
  });
};
