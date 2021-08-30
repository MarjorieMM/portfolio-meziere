import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import Layout from "../components/layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "nprogress/nprogress.css";
import "../styles/globals.css";
import "../styles/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
