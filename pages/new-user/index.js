import AddUser from "../../components/form/Add-user";

export default function NewUser() {
	async function addUserHandler(enteredData) {
		const response = await fetch("/api/add-user", {
			method: "POST",
			body: JSON.stringify(enteredData),
			headers: {
				"Content-type": "application/json",
			},
		});
		const data = await response.json();
	}
	return (
		<div>
			<h1>Ajouter un utilisateur</h1>
			<AddUser handleAddUser={addUserHandler} />
		</div>
	);
}
