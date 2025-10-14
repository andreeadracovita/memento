import { Link } from "react-router-dom";

export default function Navbar() {
	
	return (
		<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between my-3">
			<div className="col-md-3 mb-2 mb-md-0">
				<Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none align-items-center">
					<img src="logo-yellow.png" height="40" />
					<span className="archivo-black-regular logo-title ms-1">emento</span>
				</Link>
			</div>

			<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
				<li>
					<Link to="/" className="nav-link px-2 text-uppercase">Home</Link>
				</li>
				<li>
					<Link to="/complexity" className="nav-link px-2 text-uppercase">Complexity</Link>
				</li>
				<li>
					<Link to="/algorithms" className="nav-link px-2 text-uppercase">Algorithms</Link>
				</li>
				<li>
					<Link to="/jslibrary" className="nav-link px-2 text-uppercase">JS Library</Link>
				</li>
				<li>
					<Link to="#" className="nav-link px-2 text-uppercase">Async</Link>
				</li>
			</ul>
		</header>
	);
}