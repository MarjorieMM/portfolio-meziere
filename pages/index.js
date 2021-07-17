import Head from "next/head";
import { Fragment, useState } from "react";
import AddArgo from "../components/form/Add-argo";
import ArgoList from "../components/list/Argo-list";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home(props) {
	const router = useRouter();
	const [error, setError] = useState("");
	async function addArgonaute(newArgo) {
		const response = await fetch("/api/add-argo", {
			method: "POST",
			body: JSON.stringify(newArgo),
			headers: {
				"Content-type": "application/json",
			},
		});
		const data = await response.json();
		setError({ error: data.error });
		router.reload(window.location.pathname);
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
		// revalidate: 5,
	};
}
