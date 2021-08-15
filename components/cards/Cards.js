import classes from "./Cards.module.css";
import Image from "next/image";
import Modal from "../modal/Modal";
import { useRouter } from "next/router";

const Cards = ({
	id,
	imageSrc,
	imageAlt,
	cardTitle,
	cardText,
	categorie,
	github,
	site,
}) => {
	const router = useRouter();
	const trimmedTitle = cardTitle.replace(/\s/g, "").toLowerCase();
	function showMoreHandler() {
		router.push("/" + categorie + "/" + cardTitle);
	}
	return (
		<div className="card mb-3 h-100" style={{ maxWidth: "540px" }}>
			<div className="row g-0 h-100">
				<div className="col-md-4 m-auto">
					<Image
						src={`/images/${imageSrc}`}
						alt={imageAlt}
						layout="responsive"
						height="200px"
						width="220px"
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body d-flex flex-column h-100">
						<h2 className={`${classes.cardTitle} card-title mb-5`}>
							{cardTitle}
						</h2>
						<p className="card-text fst-italic fw-bolder">{cardText}</p>
						{categorie === "cv" && <Modal title={trimmedTitle} />}
						{categorie === "realisation" && (
							<div className="mt-auto">
								<a href={`https://www.github.com/marjorieMM/${github}`}>
									<button
										type="button"
										onClick={showMoreHandler}
										className="btn mt-auto"
									>
										<p className={`${classes.buttonText} fw-bolder`}>
											Voir le Github
										</p>
									</button>
								</a>
								<a href={site}>
									<button
										type="button"
										onClick={showMoreHandler}
										className="btn mt-auto"
									>
										<p className={`${classes.buttonText} fw-bolder`}>
											Visiter le site
										</p>
									</button>
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
