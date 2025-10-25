import DynamicProgramming from "./algorithms/DynamicProgramming";
import Recursion from "./algorithms/Recursion";
import Searching from "./algorithms/Searching";
import Sorting from "./algorithms/Sorting";

export default function Algorithms() {
	
	return (
		<>
			<h1 className="archivo-black-regular">Algorithms</h1>

			<Recursion />
			<DynamicProgramming />
			<Searching />
			<Sorting />
		</>
	);
}