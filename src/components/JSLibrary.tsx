import Array from "./jsLibrary/Array";
import DateTime from "./jsLibrary/DateTime";
import HashTable from "./jsLibrary/HashTable";
import List from "./jsLibrary/List";
import Map from "./jsLibrary/Map";
import Object from "./jsLibrary/Object";
import Queue from "./jsLibrary/Queue";
import Regex from "./jsLibrary/Regex";
import Set from "./jsLibrary/Set";
import Stack from "./jsLibrary/Stack";
import String from "./jsLibrary/String";

export default function JSLibrary() {

	return (
		<>
			<h1 className="archivo-black-regular">JS Library</h1>

			<DateTime />
			<Array />
			<String />
			<Regex />
			<Object />
			<Map />
			<Set />
			<List />
			<Stack />
			<Queue />
			<HashTable />
		</>
	);
}