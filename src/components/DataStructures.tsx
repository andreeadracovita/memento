import ArraysStrings from "components/dataStructures/ArraysStrings";
import Graphs from "components/dataStructures/Graphs";
import HashTables from "components/dataStructures/HashTables";
import LinkedLists from "components/dataStructures/LinkedLists";
import Queues from "components/dataStructures/Queues";
import Stacks from "components/dataStructures/Stacks";
import Trees from "components/dataStructures/Trees";

export default function DataStructures() {
	return (
		<>
			<h1 className="archivo-black-regular">Data Structures</h1>
			<ArraysStrings />
			<LinkedLists />
			<Stacks />
			<Queues />
			<Trees />
			<Graphs />
			<HashTables />
		</>
	);
}