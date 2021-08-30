import Link from "next/link";
import classes from "./SideBar.module.css";
import Image from "next/image";
import linkedin from "../../public/images/in.png";
import github from "../../public/images/git.png";
import email from "../../public/images/email2.png";
import cv from "../../public/images/cv.png";
import profile from "../../public/images/profile.jpeg";

export default function SideBar({ children }) {
	return (
		<div className={`container-fluid ${classes.margintop}`}>
			<div className="row flex-nowrap">
				<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
					<div
						className={`${classes.marginImg}
					d-flex
					flex-column
					align-items-center align-items-sm-start
					px-3
					pt-3
					min-vh-100
				`}
					>
						<div className="mx-auto my-3 d-none d-md-block">
							<Image
								className={classes.image}
								alt="profile"
								src={profile}
								layout="intrinsic"
								width="150px"
								height="150px"
							/>
						</div>
						<ul
							className="
						nav nav-pills
						flex-column
						mb-sm-auto mb-0
						mx-auto
						align-items-center align-items-sm-start
					"
							id="menu"
						>
							<li className="nav-item">
								<a
									href="https://www.linkedin.com/in/marjorie-meziere"
									className={`${classes.links} nav-link align-middle px-0`}
								>
									<Image
										className={classes.icons}
										alt="linkedin"
										src={linkedin}
										layout="intrinsic"
										width="42px"
										height="42px"
									/>
									<span className="ms-1 d-none d-md-inline">Mon LinkedIn</span>
								</a>
							</li>
							<li className="nav-item">
								<a
									href="https://github.com/MarjorieMM"
									className={`${classes.links} nav-link align-middle px-0`}
								>
									<Image
										alt="github"
										src={github}
										layout="intrinsic"
										width="42px"
										height="42px"
									/>
									<span className="ms-1 d-none d-md-inline">Mon Github</span>
								</a>
							</li>
							<li className="nav-item">
								<a
									href="mailto:marjorieme@hotmail.com"
									className={`${classes.links} nav-link align-middle px-0`}
								>
									<Image
										alt="email"
										src={email}
										layout="intrinsic"
										width="42px"
										height="42px"
									/>
									<span className="ms-1 d-none d-md-inline">Me Contacter</span>
								</a>
							</li>
							<li className="nav-item">
								<a
									href="/files/CVMEZIERE_DEV_JUNIOR.pdf"
									download
									// href={process.env.PUBLIC_URL + "CVMEZIERE_DEV_AL_WCS.pdf"}
									className={`${classes.links} nav-link align-middle px-0`}
								>
									<Image
										alt="cv"
										src={cv}
										layout="intrinsic"
										width="38px"
										height="45px"
									/>
									<span className="ms-1 d-none d-md-inline">
										Télécharger mon C.V.
									</span>
								</a>
							</li>
						</ul>
						<hr />
					</div>
				</div>
				<div className="col p-0">{children}</div>
			</div>
		</div>
	);
}
