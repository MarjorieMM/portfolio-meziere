import classes from "./Argo-list.module.css";

function ArgoList(props) {
	console.log(props);
	const third = Math.ceil(50 / 3);
	const twothird = third * 2;
	const col1 = props.argos.slice(0, third);
	const col2 = props.argos.slice(third, twothird);
	const col3 = props.argos.slice(twothird);
	const cols = [col1, col2, col3];
	return (
		<div className={`container mt-5 ${classes.wrapper}`}>
			<div className="row">
				{cols.map((col, i) => (
					<div key={i} className="col-12 col-md-4 text-center text-md-start">
						<ul className="p-0 mb-0">
							{col.map((argo, i) => (
								<li key={i}>{argo.name}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}

export default ArgoList;
