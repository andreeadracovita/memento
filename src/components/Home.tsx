import { Link } from "react-router-dom";

import { pagesMap } from "constants";

export default function Home() {

	const computeInvestmentValue = (yearly, returnPercentage, years) => {
		let value = 0;
		for (let i = 0; i < years; i++) {
			// value = value * (100 + returnPercentage) / 100 + yearly;
			value = (value + yearly) * (100 + returnPercentage) / 100;
			console.log("EOY", i + 1, value);
		}
		return new Intl.NumberFormat('en-US', {
		  style: 'currency',
		  currency: 'USD'
		}).format(value);
	}
	
	return (
		<>
			<div className="row row-cols-3">
			{
				Array.from(pagesMap.entries()).map((entry: any, index: number) => {
					if (entry[0] === "Home") {
						return <></>;
					}

					return <div className="col" key={index}>
						<Link to={entry[1].link}>
							<div className="grey-card w-100 text-center">
								<img src={entry[1].img} className="w-25 mt-3" />
								<div className="card-section">{entry[0]}</div>
							</div>
						</Link>
					</div>;
				})
			}
			</div>
		</>
	);
}