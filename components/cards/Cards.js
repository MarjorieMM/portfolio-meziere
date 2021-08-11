import classes from "./Cards.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Cards = ({ id, imageSrc, imageAlt, cardTitle, cardText, categorie }) => {
	const router = useRouter();

	function showMoreHandler() {
		router.push("/" + id);
	}
	return (
		<div className="card mb-3" style={{ maxWidth: "540px" }}>
			<div className="row g-0">
				<div className="col-md-4">
					<Image
						src={imageSrc}
						alt={imageAlt}
						layout="responsive"
						height="200px"
						width="150px"
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h2 className={`${classes.cardTitle} card-title mb-5`}>
							{cardTitle}
						</h2>
						<p className="card-text fst-italic fw-bolder">{cardText}</p>
						<button type="button" onClick={showMoreHandler} className="btn">
							Voir plus...
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
