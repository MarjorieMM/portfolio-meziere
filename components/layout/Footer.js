import classes from "./Footer.module.css";

function Footer(props) {
	return (
		<footer className={`text-center w-100 ${classes.footer}`}>
			<p className="mt-3">
				{props.footertext}
                <a className={classes.lien} href={props.footerlien}>{props.textlien}</a>
			</p>
		</footer>
	);
}

export default Footer;
