import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		typeof document !== undefined
			? require("bootstrap/dist/js/bootstrap")
			: null;
	}, []);
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
