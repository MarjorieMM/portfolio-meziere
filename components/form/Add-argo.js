import classes from "./Add-argo.module.css";
import { useState, useEffect } from "react";
import ArgoList from "../list/Argo-list";
import { useForm } from "react-hook-form";

function AddArgo() {
	const [argos, setArgos] = useState([]);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		setArgos([
			...argos,
			{
				id: argos.length + 1,
				name: data.name,
			},
		]);

		// props.handleSubmit();
		reset();
	};

	useEffect(() => {
		if (argos.length < 20) {
			localStorage.setItem("formData", JSON.stringify(argos));
		} else {
			console.log(stop);
		}
		// console.log("local", JSON.parse(localStorage.getItem("formData")));
	}, [argos]);

	return (
		<div className="container px-5">
			<h2 className="text-center py-5">Ajouter un(e) Argonaute</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="row g-3">
					<div className="col-12">
						<div className="text-center">
							<label htmlFor="name">Nom de l&apos;Argonaute</label>
						</div>
					</div>
					<div className="col-12 col-md-8 ">
						<input
							{...register("name", {
								required: "Veuillez entrer un nom pour votre Argonaute.",
								maxLength: {
									value: 20,
									message: "Veuillez entrer un nom entre 3 et 20 charactères.",
								},
								minLength: {
									value: 3,
									message: "Veuillez entrer un nom entre 2 et 20 charactères.",
								},
							})}
							type="text"
							className="form-control"
							id="name"
							placeholder="Charalampos"
							aria-label="name"
						/>

						{errors.name && (
							<div className={classes.errors}>{errors.name.message}</div>
						)}
					</div>
					<div className="col-12 col-md-4 d-grid gap-2">
						{argos.length < 20 ? (
							<button className={`btn ${classes.button}`}>Envoyer</button>
						) : (
							<button className={`text-nowrap btn ${classes.button}`} disabled>
								Votre équipage est complet !
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
