import Cards from "../cards/Cards";
import classes from "./CardList.module.css";

function CardList(props) {
	return (
		<div className="row">
			{props.items.map((item) => (
				<div className="col-12 col-md-6" key={item.id}>
					<Cards
						id={item.id}
						categorie={item.categorie}
						imageSrc={`/images/${item.imageSrc}`}
						imageAlt={item.imageNom}
						cardTitle={item.titre}
						cardText={item.texte}
					/>
				</div>
			))}
		</div>
	);
}

export default CardList;
