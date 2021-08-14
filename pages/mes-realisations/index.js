import CardList from "../../components/cardlist/CardList";
import { MongoClient } from "mongodb";

export default function Blog(props) {
	return (
		<div className="container">
			<h1 className="text-center m-5">Mes réalisations</h1>
			<CardList items={props.items} />
		</div>
	);
}

export async function getStaticProps() {
	const client = await MongoClient.connect(
		"mongodb+srv://MarjorieM:NwuWYzoBfVemKoaR@cluster0.wf6qn.mongodb.net/portfolio?retryWrites=true&w=majority"
	);
	const db = client.db();
	const realisationCollection = db.collection("cards");
	const realisations = await realisationCollection
		.find({ categorie: "realisation" })
		.toArray();
	client.close();
	return {
		props: {
			items: (await realisations).map((realisations) => ({
				categorie: realisations.categorie,
				titre: realisations.titre,
				texte: realisations.texte,
				imageNom: realisations.imageNom,
				imageSrc: realisations.imageSrc,
				site: realisations.site,
				github: realisations.github,
				id: realisations._id.toString(),
			})),
		},
		revalidate: 10,
	};
}
