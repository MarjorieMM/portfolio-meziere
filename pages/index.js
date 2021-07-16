import Head from "next/head";
import { Fragment } from "react";
import AddArgo from "../components/form/Add-argo";
import styles from "../styles/Home.module.css";

export default function Home(props) {
	const addArgonaute = () => {
		console.log("works");
	};
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
			<AddArgo handleSubmit={addArgonaute} />
		</Fragment>
	);
}
