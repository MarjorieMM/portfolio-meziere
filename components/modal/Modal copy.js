import { useState, useEffect, useRef, useReducer } from "react";
import classes from "./Modal.module.css";
import ModalButton from "./ModalButton";
import Competences from "./Competences";
import Formation from "./Formation";
import Loisirs from "./Loisirs";
import Experiences from "./Experiences";

const initialState = {
	competences: false,
	formation: false,
	experiences: false,
	loisirs: false,
};

const reducer = (state, action) => {
	switch (action) {
		case "mescompétences":
			return {
				...state,
				competences: true,
			};
		case "maformation":
			return {
				...state,
				formation: true,
			};
		case "mesexpériencesprofessionnelles":
			return {
				...state,
				experiences: true,
			};
		case "mesloisirsetintérêts":
			return {
				...state,
				loisirs: true,
			};
		default:
			throw new Error(`Unhnown ${action}`);
	}
};

export default function Modal({ title }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const renderButton = () => {
		console.log(state);
		if (state.formation) {
			return <Formation visible={true} />;
		} else if (state.competences) {
			return <Competences visible={true} />;
		} else if (state.experiences) {
			console.log("experiences");
		} else {
			console.log("loisirs");
		}
	};

	return (
		<>
			<button
				type="button"
				className="btn mt-auto"
				data-bs-toggle="modal"
				data-bs-target={`#${title}Modal`}
				onClick={(e) => {
					dispatch(e.currentTarget.value);
				}}
				value={title}
			>
				<p className={`${classes.buttonText} fw-bolder`}>Voir plus...</p>
			</button>
			<Formation title={title} />
			<Competences title={title} />
			<Loisirs title={title} />
			<Experiences title={title} />
			{/* <Loisirs /> */}
			{/* <Experiences /> */}

			{/* Modale Compétences */}
			{/* <div
				className="modal fade"
				id="cvModal"
				tabIndex="-1"
				aria-labelledby="cvModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-scrollable">
					<div className="modal-content"> */}
			{/* {renderButton()} */}
			{/* <Formation visible={state.formation} />
						<Competences visible={state.competences} /> */}
			{/* {state.formation === true ? <Formation /> : null}
						{state.competences === true ? <Competences /> : null} */}
			{/* {<Formation visible={state.formation} />}
						{<Competences visible={state.competences} />} */}
			{/* </div>
				</div>
			</div> */}

			{/* Modale Formation */}
			{/* <div
				className="modal fade"
				id="maformationModal"
				tabIndex="-1"
				aria-labelledby="maformationModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="maformationModalLabel">
								Ma Formation
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body"></div>
						<div className="modal-footer d-flex justify-content-between">
							<ModalButton
								handleChange={changeContent}
								value="&lt; Mes Compétences"
							/>
							<ModalButton
								handleChange={changeContent}
								value="Mes Expériences Professionnelles &gt;"
							/>
						</div>
					</div>
				</div>
			</div> */}

			{/* Modale Expériences */}
			{/* <div
				className="modal fade"
				id="mesexpériencesprofessionnellesModal"
				tabIndex="-1"
				aria-labelledby="mesexpériencesprofessionnellesModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="mesexpériencesprofessionnellesModalLabel"
							>
								Mes Expériences Professionnelles
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body"></div>
						<div className="modal-footer d-flex justify-content-between">
							<ModalButton
								handleChange={changeContent}
								value="&lt; Ma formation"
							/>
							<ModalButton
								handleChange={changeContent}
								value="Mes loisirs et intérêts &gt;"
							/>
						</div>
					</div>
				</div>
			</div> */}

			{/* Modale loisirs */}
			{/* <div
				className="modal fade"
				id="mesloisirsetintérêtsModal"
				tabIndex="-1"
				aria-labelledby="mesloisirsetintérêtsModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="mesloisirsetintérêtsModalLabel">
								Mes Loisirs et Intérêts
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body"></div>
						<div className="modal-footer d-flex justify-content-between">
							<ModalButton
								handleChange={changeContent}
								value="&lt; Mes Expériences Professionnelles"
							/>
							<button type="button" className="invisible">
								&gt;
							</button>
						</div>
					</div>
				</div>
			</div> */}
		</>
	);
}
