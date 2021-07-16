import classes from "./Add-argo.module.css";
import { useState, useEffect } from "react";
import ArgoList from "../list/Argo-list";

function AddArgo(props) {
	const [name, setName] = useState("");
	const [argos, setArgos] = useState([]);

	function submitHandler(e) {
		e.preventDefault();
		setArgos([
			...argos,
			{
				id: argos.length + 1,
				name: name,
			},
		]);
		props.handleSubmit();
		setName("");
	}
	useEffect(() => {
		// console.log(argos.length);
		if (argos.length < 20) {
			localStorage.setItem("formData", JSON.stringify(argos));
		} else {
			console.log(stop);
		}
		// console.log(JSON.parse(localStorage.getItem("formData")));
	}, [argos]);

	return (
		<div className="container px-5">
			<h2 className="text-center py-5">Ajouter un(e) Argonaute</h2>
			<form onSubmit={submitHandler}>
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
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="col-12 col-md-4 d-grid gap-2">
						{argos.length < 20 ? (
							<button className={`btn ${classes.button}`}>Envoyer</button>
						) : (
							<button className={`text-nowrap btn ${classes.button}`} disabled>
								Votre équipe est complète !
							</button>
						)}
					</div>
				</div>
			</form>

			<ArgoList argos={argos} />
		</div>
	);
}

export default AddArgo;
