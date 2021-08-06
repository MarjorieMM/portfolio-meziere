import React, { useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";

export default function Typing({ words }) {
	return (
		<>
			<Typewriter
				onInit={(typewriter) => typewriter.typeString(words[0])}
			></Typewriter>
			<Typewriter
				onInit={(typewriter) => typewriter.typeString(words[1])}
			></Typewriter>
		</>
	);
}
