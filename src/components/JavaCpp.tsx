import Algorithms from "components/javaCpp/Algorithms";
import BitManipulation from "components/javaCpp/BitManipulation";
import Concurrency from "components/javaCpp/Concurrency";
import DataStructures from "components/javaCpp/DataStructures";
import MemoryManagement from "components/javaCpp/MemoryManagement";

export default function JavaCpp() {

	return (
		<>
			<h1 className="archivo-black-regular">Java & C++</h1>
			<MemoryManagement />
			<Concurrency />
			<DataStructures />
			<Algorithms />
			<BitManipulation />
			https://www.w3schools.com/java/java_data_structures.asp
		</>
	);
}