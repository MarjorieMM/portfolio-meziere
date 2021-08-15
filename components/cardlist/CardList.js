import Cards from "../cards/Cards";
import Modal from "../modal/Modal";
import classes from "./CardList.module.css";

function CardList(props) {
	return (
		<div className="row">
			{props.items.map((item) => (
				<div className="col-12 col-md-6 mb-3" key={item.id}>
					<Cards
						id={item.id}
						categorie={item.categorie}
						imageSrc={item.imageSrc}
						imageAlt={item.imageNom}
						cardTitle={item.titre}
						cardText={item.texte}
						github={item.github}
						site={item.site}
					/>
				</div>
			))}
		</div>
	);
}

export default CardList;
