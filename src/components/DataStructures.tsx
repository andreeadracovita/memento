import ArraysStrings from "components/dataStructures/ArraysStrings";
import Graphs from "components/dataStructures/Graphs";
import HashTables from "components/dataStructures/HashTables";
import LinkedLists from "components/dataStructures/LinkedLists";
import Queues from "components/dataStructures/Queues";
import Stacks from "components/dataStructures/Stacks";
import Trees from "components/dataStructures/Trees";
import CardHeader from "components/CardHeader";

export default function DataStructures() {
	return (
		<>
			<h1 className="archivo-black-regular">Data Structures</h1>

			<div className="grey-card">
				<CardHeader
					title={"Data Structures and Algorithms Questions"}
					toggle={true}
				/>
				<ul>
					<li>Stack vs Queue, complexity for common operations</li>
					<li>Linked list vs vector</li>
					<li>Priority Queue and how to implement it. Example from STL</li>
					<li>What is a deque? How is std::deque implemented?</li>
					<li>Hashtable vs Binary (Search) Tree? (Bonus: Heap, Treap, Trie)</li>
					<li>Map vs unordered_map</li>
					<li>Map implementation (unordered - hash map, ordered - balanced search tree, good hashing function, collision resolution, complexity time/space)</li>
					<li>Tree types</li>
					<li>Hash Table vs ...</li>
					<li>DFS vs BFS</li>
					<li>Examples of Binary Tree traversals</li>
				</ul>
			</div>

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