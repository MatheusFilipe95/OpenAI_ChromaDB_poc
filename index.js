const { OpenAIEmbeddingFunction } = require("chromadb");
const OpenAI = require("openai");

require('dotenv').config();

const openai = new OpenAI();

const embedder = new OpenAIEmbeddingFunction({
   openai_api_key: process.env.OPENAI_API_KEY,
});

const collection = await client.createCollection({
   name: "my_collection",
   embeddingFunction: embedder,
});

await collection.add({
   ids: ["id1", "id2"],
   metadatas: [{ source: "my_source" }, { source: "my_source" }],
   documents: ["This is a document", "This is another document"],
});

const results = await collection.query({
   nResults: 2,
   queryTexts: ["This is a query document"],
 });

async function main() {
   const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
   });

   console.log(completion.choices[0]);
}

main();

