import { useForm } from "react-hook-form";
import classes from "./Add-user.module.css";

function AddUser(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	// function to capitalize first letters of the name, even after a dash or a bracket
	// const capitalizeFirstLetter = (string) =>
	// 	string
	// 		.toLowerCase()
	// 		.replace(/(?:^|[\s-/'])\w/g, (match) => match.toUpperCase());

	const onSubmit = (data) => {
		console.log(data);
		props.handleAddUser(data);
		// reset();
	};

	return (
		<div className="container px-5">
			<h2 className="text-center py-5">Ajouter un user</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="row g-3">
					<div className="col-12 text-center">
						<label htmlFor="email">Votre email</label>
					</div>
				</div>
				<div className="row g-3">
					<div className="col-12 text-center">
						<input
							{...register(
								"email",

								{
									required: "Veuillez entrer une adresse email.",
									// pattern: {
									// 	value: /^['_A-Z a-zÀ-ÖØ-öø-ÿ-]+$/,
									// 	message: "Seules les lettres sont acceptées.",
									// },
									// maxLength: {
									// 	value: 30,
									// 	message:
									// 		"Veuillez entrer un titre entre 3 et 20 charactères.",
									// },
									// minLength: {
									// 	value: 3,
									// 	message:
									// 		"Veuillez entrer un titre entre 2 et 30 charactères.",
									// },
								}
							)}
							type="email"
							// className={`form-control ${
							// 	props.error.error || errors.titre ? "is-invalid" : ""
							// }`}
							id="email"
							placeholder="Email"
							aria-label="email"
						/>
					</div>
				</div>

				{/* Change of button to a disabled one to avoid adding more than 50 argonautes
				 */}
				<div className="row g-3">
					<div className="col-12 text-center">
						<label htmlFor="mdp">Votre mot de passe</label>
					</div>
				</div>
				<div className="row g-3">
					<div className="col-12 text-center">
						<input
							{...register(
								"mdp",

								{
									required: "Veuillez entrer un mot de passe.",
								}
							)}
							type="password"
							// className={`form-control ${
							// 	props.error.error || errors.titre ? "is-invalid" : ""
							// }`}
							id="mdp"
							placeholder="Mot de passe"
							aria-label="mdp"
						/>
					</div>
				</div>
				{/* Change of button to a disabled one to avoid adding more than 50 argonautes
				 */}
				<div className="row g-3">
					<div className="col-12 text-center">
						<button className={`btn ${classes.button}`}>Valider</button>
					</div>
				</div>

				<div className="row">
					{/* Display the error messages from react-hook-form validation (name too short/long...) */}
					{/* {errors.titre && (
						<div className={classes.errors}>{errors.titre.message}</div>
					)} */}
					{/* Display the error sent by the server (name already in database) */}
					{/* {props.error && (
						<div className={classes.errors}>{props.error.error}</div>
					)} */}
				</div>
			</form>
		</div>
	);
}

export default AddUser;
