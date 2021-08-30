import classes from "./Modal.module.css";
import ModalButton from "./ModalButton";
import ModalWrapper from "./ModalWrapper";

export default function Competences({ title }) {
	return (
		<ModalWrapper
			title={title}
			backButton={<ModalButton title={title} value="" />}
			forwardButton={
				<ModalButton
					title={title}
					value="Ma Formation >"
					target="maformation"
				/>
			}
			modalName="Mes Compétences"
		>
			<h5 className={`${classes.itemTitle} p-3 fw-bold`}>Langages :</h5>
			<p>Javascript, PHP, HTML - CSS</p>
			<h5 className={`${classes.itemTitle} p-3 fw-bold`}>Frameworks :</h5>
			<p>React, Angular, NextJS, Symfony</p>
			<h5 className={`${classes.itemTitle} p-3 fw-bold`}>Bases de données :</h5>
			<p>MySQL, MongoDB, Conception de bases de données</p>
			<h5 className={`${classes.itemTitle} p-3 fw-bold`}>Outils :</h5>
			<p>NodeJS, Bootstrap, Sass, Material UI, CLI Linux, Git, VS Code</p>
			<h5 className={`${classes.itemTitle} p-3 fw-bold`}>
				Gestion de projet :
			</h5>
			<ul className="p-0">
				<li>Analyse des besoins clients</li>
				<li>Recherche de Design adapté</li>
				<li>Maquettage avec Axure RP</li>
				<li>Méthode Agile SCRUM</li>
				<li>Mise en production</li>
			</ul>
		</ModalWrapper>
	);
}
