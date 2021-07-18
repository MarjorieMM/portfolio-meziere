import Footer from "./Footer";
import Header from "./Header";
import classes from "./Layout.module.css";

function Layout(props) {
	const footerText = "Réalisé par Jason en Anthestérion de l'an 515 avant JC. ";
	const footerLien = "https://github.com/MarjorieMM/argonautes-wcs";
	const textLien = "=> Jetez un œil sur son code !";
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
