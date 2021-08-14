import Footer from "./Footer";
import Header from "./Header";
import classes from "./Layout.module.css";
import SideBar from "./SideBar";

function Layout(props) {
	const footerText = "Réalisé avec React/NextJs par Marjorie MEZIERE. ";
	const footerLien = "https://github.com/MarjorieMM";
	const textLien = "=> Visitez mon Github !";
	return (
		<>
			<Header />
			<SideBar>{props.children}</SideBar>
			<Footer
				footertext={footerText}
				footerlien={footerLien}
				textlien={textLien}
			/>
		</>
	);
}

export default Layout;
