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
					<div className={classes.textonimage}>
						<h3 className={classes.title}>Bienvenue</h3>
						<h3 className={classes.title}>Dans mon Portfolio !</h3>
					</div>
				)}
			</div>
		</div>
	);
}
