import { MongoClient } from "mongodb";

async function handler(req, res) {
	// check that it is POST request
	if (req.method === "POST") {
		const data = req.body;

		let client;
		// connection to database
		try {
			client = await MongoClient.connect(
				"mongodb+srv://MarjorieM:NwuWYzoBfVemKoaR@cluster0.wf6qn.mongodb.net/argonautes?retryWrites=true&w=majority"
			);
		} catch (error) {
			res
				.status(500)
				.json({ message: "Impossible de se connecter à la base de données." });
			return;
		}
		const db = client.db();
		// Check if the name sent is already in the database. 
		// If it does, it sends back a 400 status code with an error message.
		// If it doesn't, it persists the new name in the database.
		try {
			const argoCollection = db.collection("argonautes");
			const exists = await argoCollection.find({ name: data.name }).toArray();
			if (exists.length > 0) {
				throw "existe déja";
			}
			await argoCollection.insertOne(data);
			res.status(201).json({ message: "Insertion d'un Argonaute effectuée." });

			client.close();
		} catch (error) {
			console.log(error);
			res.status(400).json({ error: "Cet Argonaute existe déjà." });
		}
	}
}

export default handler;
