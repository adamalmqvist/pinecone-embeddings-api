# Pinecone Embeddings Server 🌐

Welcome to the Pinecone Embeddings Server, a streamlined Express.js application designed to fetch and serve vector embeddings directly from Pinecone. Perfect for enhancing search functionalities within your projects by leveraging advanced vector search capabilities. Get started with minimal setup and enjoy a seamless integration experience. 🚀

## 🌟 Features

- **Efficient Embedding Retrieval**: Fetch vector embeddings with a simple API call.
- **Pinecone Integration**: Leverages Pinecone's powerful vector database for high-performance search capabilities.
- **Input Validation**: Uses Zod for robust request validation to ensure reliability and accuracy.
- **Environment Ready**: Configured with dotenv for easy environment management.
- **Express.js Framework**: Built on Express.js for a lightweight and flexible server solution.

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (18.x or later)
- A Pinecone API key (Sign up at [Pinecone.io](https://www.pinecone.io/))

### Installation Steps

1. **Clone the repository**
```
git clone https://github.com/<your-username>/pinecone-embeddings-server.git
```
install dependencies
```
npm install
```
start server
```
npx nodemon src/app.ts
```



## API Usage

### Fetch Embeddings

**GET `/`** - Retrieve embeddings for a given search query.

- **Query Parameters:**
  - `search`: Required. The search string to fetch embeddings for.

**Example Request:**

GET http://localhost:3000/?search=example

