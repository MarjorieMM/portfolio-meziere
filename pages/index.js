import { Fragment } from "react";
import Head from "next/head";
import Homepage from "../components/homepage/Homepage";

function Home() {
	return (
		<Fragment>
			<Head>
				<title>Portfolio</title>
				<meta
					name="description"
					content="Bienvenue sur le Portfolio de Marjorie MEZIERE"
				/>
				<meta
					property="og:description"
					content="le Portfolio de Marjorie MEZIERE, avec ses réalisations, son CV et un blog en construction"
				/>
				<meta
					property="og:title"
					content="Bienvenue sur le Portfolio de Marjorie MEZIERE"
				/>
				<meta
					property="og:url"
					content="https://portfolio-marjorie-meziere.herokuapp.com/"
				/>
				<meta
					property="og:image"
					content="https://burst.shopifycdn.com/photos/kitty-cat-helps-at-work.jpg?width=373&format=pjpg&exif=0&iptc=0"
				/>
				<meta property="og:type" content="site web" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Homepage />
		</Fragment>
	);
}

export default Home;
