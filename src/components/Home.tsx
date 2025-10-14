import { Link } from "react-router-dom";

import Card from "./Card";

export default function Home() {
	
	return (
		<>
			<h1 className="archivo-black-regular">Table of contents</h1>
			<ul id="toc">
				<li>
					<Link to="/" className="nav-link">Home</Link>
				</li>
				<li>
					<Link to="/complexity" className="nav-link">Complexity</Link>
				</li>
				<li>
					<Link to="/jslibrary" className="nav-link">JS Library</Link>
				</li>
				<li>
					<Link to="#" className="nav-link">Async</Link>
				</li>
			</ul>
		</>
	);
}