import Image from "next/image";
import classes from "./Header.module.css";
import Link from "next/link";

function Header() {
	const toggleShow = () => {
		document.getElementById("navbarNavDropdown").classList.remove("show");
	};

	return (
		<header>
			<nav
				className={`navbar fixed-top py-3 navbar-expand-lg navbar-light ${classes.header}`}
			>
				<div className="container-fluid mx-2">
					<Link href="/">
						<a className={`${classes.brand} navbar-brand`}>M-M</a>
					</Link>
					<button
						className={`navbar-toggler ${classes.expanded}`}
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse text-center justify-content-end"
						id="navbarNavDropdown"
					>
						<ul className="navbar-nav">
							<li className="nav-item">
								<button
									type="button"
									onClick={toggleShow}
									className={`btn ${classes.button}`}
								>
									<Link href="/">
										<a className={`nav-link ${classes.link}`}>Accueil</a>
									</Link>
								</button>
							</li>
							<li className="nav-item">
								<button
									type="button"
									onClick={toggleShow}
									className={`btn ${classes.button}`}
								>
									<Link href="/mon-cv">
										<a className={`nav-link ${classes.link}`}>Mon C.V.</a>
									</Link>
								</button>
							</li>
							<li className="nav-item">
								<button
									type="button"
									onClick={toggleShow}
									className={`btn ${classes.button}`}
								>
									<Link href="/mes-realisations">
										<a className={`nav-link ${classes.link}`}>
											Mes réalisations
										</a>
									</Link>
								</button>
							</li>
							<li className="nav-item">
								<button
									type="button"
									onClick={toggleShow}
									className={`btn ${classes.button}`}
								>
									<Link href="/mon-blog">
										<a className={`nav-link ${classes.link}`}>Mon blog</a>
									</Link>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
