import Footer from "./Footer";
import Header from "./Header";
import classes from "./Layout.module.css";

function Layout(props) {
	const footerText = "Réalisé avec React/NextJs par Marjorie MEZIERE. ";
	const footerLien = "https://github.com/MarjorieMM";
	const textLien = "=> Visitez mon Github !";
	return (
		<>
			<Header />
			<main className={classes.main}>{props.children}</main>
			<Footer
				footertext={footerText}
				footerlien={footerLien}
				textlien={textLien}
			/>
		</>
	);
}

export default Layout;
