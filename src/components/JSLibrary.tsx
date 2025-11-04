import Array from "components/jsLibrary/Array";
import DateTime from "components/jsLibrary/DateTime";
import HashTable from "components/jsLibrary/HashTable";
import List from "components/jsLibrary/List";
import Map from "components/jsLibrary/Map";
import Object from "components/jsLibrary/Object";
import Queue from "components/jsLibrary/Queue";
import Regex from "components/jsLibrary/Regex";
import Set from "components/jsLibrary/Set";
import Stack from "components/jsLibrary/Stack";
import String from "components/jsLibrary/String";

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