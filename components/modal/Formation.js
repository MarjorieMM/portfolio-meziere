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
					value="< Mes Compétences"
					target="mescompétences"
				/>
			}
			forwardButton={
				<ModalButton
					title={title}
					value="Mes Expériences Pro >"
					target="mesexpériencesprofessionnelles"
				/>
			}
			modalName="Ma Formation"
		>
			<h5 className={`${classes.itemTitle} p-3 fw-bold`}>Formations :</h5>

			<p className={`${classes.itemTitle} fw-bold`}>2021 - 2022 :</p>
			<p>
				Formation Concepteur Développeur d&apos;Applications en Alternance (12
				mois)
			</p>
			<p>
				<span className={classes.itemTitle}>Lieu :</span> à définir
			</p>
			<hr />
			<p className={`${classes.itemTitle} fw-bold`}>2020 - 2021 :</p>
			<p>Formation Développeur Web et Mobile (4 mois)</p>
			<p>
				<span className={classes.itemTitle}>Lieu :</span> WebForce3 - Lyon
			</p>
			<p className={`${classes.itemTitle} mb-0`}>Compétences acquises :</p>
			<ul className="p-0">
				<li>Javascript</li>
				<li>Angular</li>
				<li>TypeScript</li>
				<li>PHP</li>
				<li>Symfony</li>
				<li>Méthode de travail en équipe à distance</li>
				<li>Gestion de projets</li>
			</ul>
			<hr />

			<p className={`${classes.itemTitle} fw-bold`}>2018 :</p>
			<p>Formation Développeur Web et Mobile (5 mois)</p>
			<p>
				<span className={classes.itemTitle}>Lieu :</span> Wild Code School -
				Lyon
			</p>
			<p className={`${classes.itemTitle} mb-0`}>Compétences acquises :</p>
			<ul className="p-0">
				<li>Javascript</li>
				<li>NodeJS</li>
				<li>Bootstrap</li>
				<li>JQuery</li>
				<li>ReactJS</li>
				<li>Méthode Agile Scrum</li>
				<li>Gestion de projets</li>
			</ul>
			<hr />
			<h5 className={`${classes.itemTitle} p-3 fw-bold`}>Diplômes obtenus :</h5>
			<p>
				<span className={classes.itemTitle}>2001 : </span> BTS Assistante de
				Direction
			</p>
			<p>
				<span className={classes.itemTitle}>1999 : </span> Bac STT Action et
				Communication Commerciales
			</p>
		</ModalWrapper>
	);
}
