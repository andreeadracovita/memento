import BigO from "./complexity/BigO";
import Computing from "./complexity/Computing";
import DataStructures from "./complexity/DataStructures";
import PerformanceChart from "./complexity/PerformanceChart";
import Sorting from "./complexity/Sorting";
import Space from "./complexity/Space";
import Time from "./complexity/Time";

export default function Complexity() {
	
	return (
		<>
			<h1 className="archivo-black-regular text-uppercase">Complexity</h1>

			<BigO />
			<PerformanceChart />
			<Time />
			<Space />
			<Computing />
			<DataStructures />
			<Sorting />

			<a href="https://www.bigocheatsheet.com/" target="_blank">Reference</a>
		</>
	);
}