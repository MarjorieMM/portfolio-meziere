export default function ModalWrapper({
	title,
	modalName,
	backButton,
	forwardButton,
	children,
}) {
	return (
		<div
			className="modal fade"
			id={`${title}Modal`}
			aria-hidden="true"
			aria-labelledby={`${title}ModalLabel`}
			tabIndex="-1"
		>
			<div className="modal-dialog modal-lg modal-dialog-scrollable">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id={`${title}Modal`}>
							{modalName}
						</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body text-center">{children}</div>
					<div className="modal-footer d-flex justify-content-md-between justify-content-center">
						{backButton}
						{forwardButton}
					</div>
				</div>
			</div>
		</div>
	);
}
