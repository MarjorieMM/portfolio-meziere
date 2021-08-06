import { MongoClient } from "mongodb";

async function handler(req, res) {
	let client;
	// connection to database
	try {
		client = await MongoClient.connect(
			"mongodb+srv://MarjorieM:NwuWYzoBfVemKoaR@cluster0.wf6qn.mongodb.net/portfolio?retryWrites=true&w=majority"
		);
	} catch (error) {
		res
			.status(500)
			.json({ message: "Impossible de se connecter à la base de données." });
		return;
	}
	const db = client.db();
	try {
		const pfCollection = db.collection("portfolio");
		const post = await pfCollection.find().toArray();
		client.close();
		res.status(201).json(post);
	} catch (error) {
		res.status(400).json({ message: "Impossible d'afficher les posts." });
	}
}

export default handler;
