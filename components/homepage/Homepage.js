import cat from "../../public/images/kitty-cat-helps-at-work.jpg";
import Image from "next/image";
import { isMobileOnly } from "react-device-detect";
import classes from "./Homepage.module.css";

export default function Homepage() {
	return (
		<div>
			<div className={classes.headtext}>
				<div className={classes.headimage}>
					<Image
						src={cat}
						alt="main image"
						layout="responsive"
						width={4460}
						height={2509}
					/>
				</div>
				{isMobileOnly ? (
					<div className={classes.textonimage}>
						<h3 className={classes.title}>Bienvenue dans mon Portfolio !</h3>
					</div>
				) : (
					<div className={`text-center ${classes.textonimage}`}>
						<h3 className={classes.title}>Bienvenue</h3>
						<h3 className={classes.title}>Dans mon Portfolio !</h3>
					</div>
				)}
				<h3 className={`px-1 text-center py-3 ${classes.title}`}>
					<i>
						&laquo; Passionnée par le Développement Web, je recherche
						actuellement une entreprise pour démarrer un Alternance Bac+3,
						Conceptrice, Développeuse d&apos;Applications &raquo;
					</i>
				</h3>
			</div>
		</div>
	);
}
