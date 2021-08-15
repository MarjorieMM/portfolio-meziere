import classes from "./Modal.module.css";

export default function Modal({ title }) {
	return (
		<>
			<button
				type="button"
				className="btn mt-auto"
				data-bs-toggle="modal"
				data-bs-target={`#${title}Modal`}
			>
				<p className={`${classes.buttonText} fw-bolder`}>Voir plus...</p>
			</button>
			{/* Modale Compétences */}
			<div
				className="modal fade"
				id="mescompétencesModal"
				tabIndex="-1"
				aria-labelledby="mescompétencesModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="mescompétencesModalLabel">
								Mes Compétences
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
							<button type="button" className="invisible">
								&lt;
							</button>
							<button
								type="button"
								className={`btn ${classes.pinkButton}`}
								data-bs-dismiss="modal"
								data-bs-target="#maformationModal"
								data-bs-toggle="modal"
							>
								Ma formation &gt;
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Modale Formation */}
			<div
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
							<button
								type="button"
								className={`btn ${classes.pinkButton}`}
								data-bs-dismiss="modal"
								data-bs-target="#mescompétencesModal"
								data-bs-toggle="modal"
							>
								&lt; Mes Compétences
							</button>
							<button
								type="button"
								className={`btn ${classes.pinkButton}`}
								data-bs-dismiss="modal"
								data-bs-target="#mesexpériencesprofessionnellesModal"
								data-bs-toggle="modal"
							>
								Mes Expériences Professionnelles &gt;
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Modale Expériences */}
			<div
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
							<button
								type="button"
								className={`btn ${classes.pinkButton}`}
								data-bs-dismiss="modal"
								data-bs-target="#maformationModal"
								data-bs-toggle="modal"
							>
								&lt; Ma formation
							</button>

							<button
								type="button"
								className={`btn ${classes.pinkButton}`}
								data-bs-dismiss="modal"
								data-bs-target="#mesloisirsetintérêtsModal"
								data-bs-toggle="modal"
							>
								Mes loisirs et intérêts &gt;
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Modale loisirs */}
			<div
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
							<button
								type="button"
								className={`btn ${classes.pinkButton}`}
								data-bs-dismiss="modal"
								data-bs-target="#mesexpériencesprofessionnellesModal"
								data-bs-toggle="modal"
							>
								&lt; Mes Expériences Professionnelles
							</button>
							<button type="button" className="invisible">
								&gt;
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
