import Footer from "./Footer";
import Header from "./Header";
import classes from "./Layout.module.css";

function Layout(props) {
	return (
		<>
			<Header />
			<main className={classes.main}>{props.children}</main>
			<Footer
				footertext="Réalisé par Jason en Anthestérion de l'an 515 avant JC. "
				footerlien="https://github.com/MarjorieMM/argonautes-wcs"
				textlien="=> Jetez un œil sur son code !"
			/>
		</>
	);
}

export default Layout;
