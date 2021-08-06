import Image from "next/image";
import classes from "./Header.module.css";
import Link from "next/link";

function Header() {
	// const imageSource =
	// 	"https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png";
	return (
		<header>
			{/* <nav
				className={`navbar navbar-expand-lg fixed-top navbar-light text-center ${classes.header}`}
			>
				<div className="container-fluid"> */}
			{/* <h1> */}
			{/* <Image
					src={imageSource}
					alt="logo"
					layout="intrinsic"
					height="32px"
					width="96px"
				/> */}
			{/* <span className="p-2">Portfolio de Marjorie MEZIERE</span>
					</h1> */}
			{/* </div>
			</nav> */}
			<nav
				className={`navbar fixed-top py-4 navbar-expand-lg navbar-light ${classes.header}`}
			>
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
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
								<button type="button" className={`btn ${classes.button}`}>
									<Link href="/">
										<a
											className={`nav-link active ${classes.link}`}
											aria-current="page"
										>
											Accueil
										</a>
									</Link>
								</button>
							</li>
							<li className="nav-item">
								<button type="button" className={`btn ${classes.button}`}>
									<Link href="/mon-cv">
										<a
											className={`nav-link active ${classes.link}`}
											aria-current="page"
										>
											Mon C.V.
										</a>
									</Link>
								</button>
							</li>
							<li className="nav-item">
								<button type="button" className={`btn ${classes.button}`}>
									<Link href="/mes-realisations">
										<a
											className={`nav-link active ${classes.link}`}
											aria-current="page"
										>
											Mes réalisations
										</a>
									</Link>
								</button>
							</li>
							<li className="nav-item">
								<button type="button" className={`btn ${classes.button}`}>
									<Link href="/mon-blog">
										<a
											className={`nav-link active ${classes.link}`}
											aria-current="page"
										>
											Mon blog
										</a>
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
