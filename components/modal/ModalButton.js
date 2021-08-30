import classes from "./Modal.module.css";

export default function ModalButton({ value, target }) {
	return (
		<button
			className={`btn ${classes.pinkButton} ${value ? "" : "invisible"}`}
			data-bs-dismiss="modal"
		>
			{value === "Fermer" ? (
				<a className="btn mt-auto" role="button">
					{value}
				</a>
			) : (
				<a
					className="btn mt-auto"
					data-bs-toggle="modal"
					href={`#${target}Modal`}
					role="button"
				>
					{value}
				</a>
			)}
		</button>
	);
}
