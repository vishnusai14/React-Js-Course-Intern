import { Db, MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      `mongodb+srv://Vishnu_Sai:SaiVishnu14@cluster0.hkghe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    const db = client.db();
    let meetUpCollection;
    try {
      meetUpCollection = db.collection("meetups2");
    } catch (err) {
      meetUpCollection = db.createCollection("meetups2");
    }

    const result = await (await meetUpCollection).insertOne(data);

    client.close();
    res.status(201).json({ msg: "Saved Succesfully" });
  }
};

export default handler;
