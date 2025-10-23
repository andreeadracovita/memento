import { Link } from "react-router-dom";

import { pagesMap } from "../constants";

export default function Home() {
	
	return (
		<>
			<h1 className="archivo-black-regular">Table of contents</h1>

			<ul id="toc">
			{
				Array.from(pagesMap.entries()).map((entry: any, index: number) => 
					<li key={index}>
						<Link to={entry[1]} className="nav-link text-uppercase">{entry[0]}</Link>
					</li>
				)
			}
			</ul>
		</>
	);
}