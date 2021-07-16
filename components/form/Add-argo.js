import classes from "./Add-argo.module.css";
import { useState } from "react";

function AddArgo(props) {
	const [name, setName] = useState([]);

	function submitHandler(e) {
		e.preventDefault();
		props.handleSubmit();

		console.log("submitted");
	}
	return (
		<div className="container px-5">
			<h2 className="text-center py-5">Ajouter un(e) Argonaute</h2>
			<form className="" onSubmit={submitHandler}>
				<div className="row g-3">
					<div className="col-12">
						<div className="text-center">
							<label htmlFor="name">Nom de l&apos;Argonaute</label>
						</div>
					</div>
					<div className="col-12 col-md-8">
						<input
							type="text"
							className="form-control"
							required
							id="name"
							placeholder="Charalampos"
							aria-label="name"
						/>
					</div>
					<div className="col-12 col-md-4 d-grid gap-2">
						<button className={`btn ${classes.button}`}>Envoyer</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default AddArgo;
