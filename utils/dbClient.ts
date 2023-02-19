const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://master:simps@hackathon.0vbeskl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function getClient() {
  await client.connect();

  return client.db("helping");
}

export default getClient;
