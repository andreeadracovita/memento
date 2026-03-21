import MemoryManagement from "components/javaCpp/MemoryManagement";
import Concurrency from "components/javaCpp/Concurrency";
import Class from "components/javaCpp/Class";
import DataStructures from "components/javaCpp/DataStructures";
import Algorithms from "components/javaCpp/Algorithms";
import BitManipulation from "components/javaCpp/BitManipulation";

export default function JavaCpp() {

	return (
		<>
			<h1 className="archivo-black-regular">Java & C++</h1>
			<MemoryManagement />
			<Concurrency />
			<Class />
			<DataStructures />
			<Algorithms />
			<BitManipulation />
			https://www.w3schools.com/java/java_data_structures.asp
		</>
	);
}