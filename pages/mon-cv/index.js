import CardList from "../../components/cardlist/CardList";
import { MongoClient } from "mongodb";

export default function MonCv(props) {
	const cvParts = props.items.filter((cat) => cat.categorie === "cv");

	return (
		<div className="container">
			<h1 className="text-center m-5">Mon C.V.</h1>
			<CardList items={cvParts} />
		</div>
	);
}

export async function getStaticProps() {
	const client = await MongoClient.connect(
		"mongodb+srv://MarjorieM:NwuWYzoBfVemKoaR@cluster0.wf6qn.mongodb.net/portfolio?retryWrites=true&w=majority"
	);
	const db = client.db();
	const cvCollection = db.collection("cards");
	const cvParts = await cvCollection.find().toArray();
	client.close();
	return {
		props: {
			items: (await cvParts).map((cvParts) => ({
				categorie: cvParts.categorie,
				titre: cvParts.titre,
				texte: cvParts.texte,
				imageNom: cvParts.imageNom,
				imageSrc: cvParts.imageSrc,
				id: cvParts._id.toString(),
			})),
		},
		revalidate: 10,
	};
}
