import classes from "./Modal.module.css";
import Competences from "./Competences";
import Formation from "./Formation";
import Loisirs from "./Loisirs";
import Experiences from "./Experiences";

export default function Modal({ title }) {
	return (
		<>
			<a
				className="btn mt-auto"
				data-bs-toggle="modal"
				href={`#${title}Modal`}
				role="button"
			>
				<p className={`${classes.buttonText} fw-bolder`}>Voir plus...</p>
			</a>
			{title === "maformation" && <Formation title={title} />}
			{title === "mescompétences" && <Competences title={title} />}
			{title === "mesloisirsetintérêts" && <Loisirs title={title} />}
			{title === "mesexpériencesprofessionnelles" && (
				<Experiences title={title} />
			)}
		</>
	);
}
