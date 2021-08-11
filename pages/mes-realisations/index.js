import CardList from "../../components/cardlist/CardList";
import { MongoClient } from "mongodb";

export default function Blog(props) {
	const realisations = props.items.filter(
		(cat) => cat.categorie === "realisation"
	);

	return (
		<div className="container">
			<h1 className="text-center m-5">Mes réalisations</h1>
			<CardList items={realisations} />
		</div>
	);
}

export async function getStaticProps() {
	const client = await MongoClient.connect(
		"mongodb+srv://MarjorieM:NwuWYzoBfVemKoaR@cluster0.wf6qn.mongodb.net/portfolio?retryWrites=true&w=majority"
	);
	const db = client.db();
	const realisationCollection = db.collection("cards");
	const realisations = await realisationCollection.find().toArray();
	client.close();
	return {
		props: {
			items: (await realisations).map((realisations) => ({
				categorie: realisations.categorie,
				titre: realisations.titre,
				texte: realisations.texte,
				imageNom: realisations.imageNom,
				imageSrc: realisations.imageSrc,
				id: realisations._id.toString(),
			})),
		},
		revalidate: 10,
	};
}
