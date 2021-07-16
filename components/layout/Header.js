import classes from "./Header.module.css";
import Image from "next/image";

function Header(props) {
	return (
		<header className={`text-center py-5 ${classes.header}`}>
			<h1>
				<Image
					src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
					alt="Wild Code School logo"
					layout="intrinsic"
					height="32px"
					width="96px"
				/>
				<span className="p-2">Les&#8239;Argonautes</span>
			</h1>
		</header>
	);
}

export default Header;
