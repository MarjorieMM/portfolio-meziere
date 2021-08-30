import ModalButton from "./ModalButton";
import classes from "./Modal.module.css";
import ModalWrapper from "./ModalWrapper";

export default function Experiences({ title }) {
	return (
		<ModalWrapper
			title={title}
			backButton={
				<ModalButton
					title={title}
					value="< Mes Expériences Pro"
					target="mesexpériencesprofessionnelles"
				/>
			}
			forwardButton={<ModalButton title={title} value="Fermer" />}
			modalName="Mes Loisirs et Intérêts"
		>
			<h5 className={`${classes.itemTitle} p-3 fw-bold`}>Sports :</h5>
			<ul className="p-0">
				<li>Vélo</li>
				<li>Randonnée</li>
			</ul>

			<h5 className={`${classes.itemTitle} p-3 fw-bold`}>Intérêts :</h5>
			<ul className="p-0">
				<li>Informatique</li>
				<li>Nouvelles Technologies</li>
				<li>Ecologie / Nature</li>
				<li>Cuisine</li>
				<li>Nutrition</li>
				<li>Langue Anglaise</li>
				<li>Cinéma en V.O.</li>
				<li>Réseaux Sociaux</li>
				<li>Musique Electronique</li>
			</ul>
		</ModalWrapper>
	);
}
