import { MongoClient } from "mongodb";

async function handler(req, res) {
	// check that it is POST request
	if (req.method === "POST") {
		const data = req.body;

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
			const pfCollection = db.collection("user");
			await pfCollection.insertOne(data);
			res
				.status(201)
				.json({ message: "Insertion d'un nouveau user effectué." });

			client.close();
		} catch (error) {
			console.log(error);
			res.status(400).json({ error: "Insertion du user impossible." });
		}
	}
}

export default handler;
