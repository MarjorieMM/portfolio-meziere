import { useForm } from "react-hook-form";
import classes from "./Add-post.module.css";

function AddPost(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	// function to capitalize first letters of the name, even after a dash or a bracket
	const capitalizeFirstLetter = (string) =>
		string
			.toLowerCase()
			.replace(/(?:^|[\s-/'])\w/g, (match) => match.toUpperCase());

	const onSubmit = (data) => {
		props.handleAddPost(data);
		reset();
	};

	return (
		<div className="container px-5">
			<h2 className="text-center py-5">Ajouter un post</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="row g-3">
					<div className="col-12">
						<div className="text-center">
							<label htmlFor="titre">Titre du post</label>
						</div>
					</div>
					<div className="col-12 col-md-8">
						<input
							{...register(
								"titre",

								{
									setValueAs: (v) => capitalizeFirstLetter(v),
									required: "Veuillez entrer un titre pour votre post.",
									pattern: {
										value: /^['_A-Z a-zÀ-ÖØ-öø-ÿ-]+$/,
										message: "Seules les lettres sont acceptées.",
									},
									maxLength: {
										value: 30,
										message:
											"Veuillez entrer un titre entre 3 et 20 charactères.",
									},
									minLength: {
										value: 3,
										message:
											"Veuillez entrer un titre entre 2 et 30 charactères.",
									},
								}
							)}
							type="text"
							className={`form-control ${
								props.error.error || errors.titre ? "is-invalid" : ""
							}`}
							id="titre"
							placeholder="Titre"
							aria-label="titre"
						/>
					</div>
					{/* Change of button to a disabled one to avoid adding more than 50 argonautes
					 */}
					<div className="col-12 col-md-4 d-grid gap-2">
						<button className={`btn ${classes.button}`}>Publier le post</button>
					</div>
				</div>
				<div className="row">
					{/* Display the error messages from react-hook-form validation (name too short/long...) */}
					{errors.titre && (
						<div className={classes.errors}>{errors.titre.message}</div>
					)}
					{/* Display the error sent by the server (name already in database) */}
					{props.error && (
						<div className={classes.errors}>{props.error.error}</div>
					)}
				</div>
			</form>
		</div>
	);
}

export default AddPost;
