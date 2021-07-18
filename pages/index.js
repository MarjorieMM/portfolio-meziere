import { Fragment, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import AddArgo from "../components/form/Add-argo";
import ArgoList from "../components/list/Argo-list";

function Home(props) {
	const router = useRouter();
	const [error, setError] = useState("");
	// function that adds a new argonaute with the api
	async function addArgonaute(newArgo) {
		const response = await fetch("/api/add-argo", {
			method: "POST",
			body: JSON.stringify(newArgo),
			headers: {
				"Content-type": "application/json",
			},
		});
		const data = await response.json();
		console.log(data);
		// Sets the error message so it can be sent to the front if it exists
		if (data.error) {
			setError({ error: data.error });
		} else {
			setError("");
		}

		// Refreshes the page to send the updated data from the database to the front after a new name has been added
		if (response.status < 300) {
			router.replace(router.asPath);
		}
	}

	return (
		<Fragment>
			<Head>
				<title>Argo-App</title>
				<meta
					name="description"
					content="Bienvenue sur le site des Argonautes"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AddArgo handleAddArgo={addArgonaute} argos={props.argos} error={error} />
			<ArgoList argos={props.argos} />
		</Fragment>
	);
}

export async function getStaticProps() {
	// retrieves the data from the database and returns it as props
	const client = await MongoClient.connect(
		"mongodb+srv://MarjorieM:NwuWYzoBfVemKoaR@cluster0.wf6qn.mongodb.net/argonautes?retryWrites=true&w=majority"
	);
	const db = client.db();
	const argosCollection = db.collection("argonautes");
	const argos = await argosCollection.find().toArray();
	client.close();
	return {
		props: {
			length: await argos.length,
			argos: (await argos).map((argo) => ({
				id: argo._id.toString(),
				name: argo.name,
			})),
		},
		revalidate: 1,
	};
}

export default Home;
