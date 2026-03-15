import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import { pagesMap } from "constants";

export default function Navbar() {
	const location = useLocation();

	return (
		<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between my-3">
			<div className="col-md-3 mb-2 mb-md-0">
				<Link to="/memento/" className="d-inline-flex link-body-emphasis text-decoration-none align-items-center">
					<img src="logo-yellow-v2.png" height="40" />
					<span className="archivo-black-regular logo-title ms-1">emento</span>
				</Link>
			</div>

			<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
			{
				Array.from(pagesMap.entries()).map((entry: any, index: number) => 
					<li key={index}>
						<Link
							to={entry[1].link}
							className={classNames(
								"nav-link",
								"px-2", 
								"text-uppercase",
								"nav-link-override",
								{
									"selected-tab": entry[1].link === location.pathname
								}
							)}
						>
							{entry[0]}
						</Link>
					</li>
				)
			}
			</ul>
		</header>
	);
}