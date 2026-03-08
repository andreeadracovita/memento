import Accent from "components/Accent";
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
				<pre>/* Click a question to reveal the answer */</pre>
				<ul>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-1">
							Stack vs Queue, complexity for common operations
						</span>
						<ul className="collapse" id="collapse-1">
							<li>Both are fundamental <Accent>linear data structures</Accent> with distinct access principles.</li>
							<li>
								<Accent>Stack</Accent>
								<ul>
									<li>Last In, First Out (<Accent>LIFO</Accent>): stack of plates</li>
									<li>Operations: push, pop, Peek/Top, empty</li>
									<li>Use: function call management, undo/redo features, expression evaluation, backtracking algorithms.</li>
								</ul>
							</li>
							<li>
								<Accent>Queue</Accent>
								<ul>
									<li>First In, First Out (<Accent>FIFO</Accent>): a queue of people</li>
									<li>Operations: enqueue, dequeue, front, rear</li>
									<li>Use: task scheduling, data buffering in networking, BFS, customer service lines.</li>
								</ul>
							</li>
							<li>If implemented as linked lists, all operations are <Accent>O(1)</Accent>. If using a dynamic array, push, enque can lead to <Accent>O(n)</Accent> worst-time when the array resizes when full, but O(1) amortized time.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-2">
							Linked List vs Vector
						</span>
						<ul className="collapse" id="collapse-2">
							<li>Both <Accent>dynamic data structures</Accent> used to store collections of elements.</li>
							<li><Accent>Vector</Accent>: stores elements in contiguous memory, enables random access in  O(1) time. Insert and delete at the end in O(1) on average (amortized), insert/delete in the middle O(n). In real life applications, vectors outperform linked lists due to pointer chasing and dynamic memory allocations overhead.</li>
							<li><Accent>Linked List</Accent>: stores elements in non-contiguous memory locations, where each node contains data and pointers to the next (and previous) nodes. Random access is not possible. Accessing an element requires traversal in O(n) time. Insert/delete at any position O(1). Finding an insertion points takes O(n).</li>
							<li>
								<Accent>Use cases</Accent>:
								<ul>
									<li>Vector: fast random access, most operations are insertion/deletions at the end, cache performance and memory efficiency are important.</li>
									<li>Linked Lists: frequent insert/delete in the middle and already have an iterator to the location, need iterator stability (after insertion/deletion), when managing very large datasets where memory allocation is costly and element size is large.</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-3">
							Priority Queue and how to implement it. Example from STL.
						</span>
						<ul className="collapse" id="collapse-3">
							<li>A queue where each element has an <Accent>associated priority</Accent>.</li>
							<li>Typically implemented using a <Accent>heap</Accent> data structure, most commonly a <Accent>binary heap</Accent>, for efficiency. This structures ensures the highest-priority element (either min/max) can be <Accent>accessed in O(1)</Accent> time, while <Accent>insertion/deletion take O(log N)</Accent> time. A heap provides best balance of performance and simplicity for most applications.</li>
							<li><Accent>A binary heap is usually represented as an array</Accent> where for any node at index i:
								<ul>
									<li>Parent: floor((i - 1) / 2)</li>
									<li>Left child: 2 * i + 1</li>
									<li>Right child: 2 * i + 2</li>
								</ul>
							</li>
							<li>Inserting an element: add the element at the end, <Accent>"bubbling up"</Accent> its value to maintain heap property.</li>
							<li>Deleting an element: replace the top element with the last element, <Accent>"bubbling down"</Accent> to restore the heap property.</li>
							<li>
								Alternative implementations of a priority queue:
								<ul>
									<li><Accent>Sorted array</Accent>: insertion O(N), extraction O(1).</li>
									<li><Accent>Self-Balancing Binary Search Tree (AVL, Red-Black Tree)</Accent>: insertion/deletion O(log N)</li>
								</ul>
							</li>
							<li><Accent>Use cases</Accent>: CPU scheduling in OS, Dijkstra's shortest path, event-driven simulations.</li>
							<li>Java: <Accent>PriorityQueue class</Accent> (min-heap by default, lowest val has highest prio).</li>
							<li>C++: <Accent>std::priority_queue</Accent> (max-heap by default, customizable).</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-4">
							What is a deque? How is std::deque implemented?
						</span>
						<ul className="collapse" id="collapse-4">
							<li>Deque = <Accent>double-ended queue</Accent>, linear structure that allows insertion/removal of elements from both ends.</li>
							<li>Use cases: sliding window problems (finding max in a window), task scheduling with priority or dynamic ordering, palindrome checking, efficient queue and stack with O(1) operations at both ends.</li>
							<li>Java: <Accent>java.util.Deque</Accent></li>
							<li>C++: <Accent>std::deque</Accent> (a sequence of fixed-size, contiguous arrays - chunks - managed through a central array of pointers - data map)</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-5">
							Hash table vs Binary (Search) Tree? (Bonus: Heap, TreeMap, Trie)
						</span>
						<ul className="collapse" id="collapse-5">
							<li><Accent>Hash table</Accent> - data structure that stores key-value pairs for efficient storage and retrieval. Uses a hash function to compute an index into an array of buckets, where the value is stored. Average-case O(1) time for insert, delete and lookup. Highly efficient for large datasets. Collisions can occur (multiple keys map to the same index) - solved by chaining in a linked list at the same index. Maintain a load factor below ... for good performance, resizing/rehashing to maintain efficiency. Java: HashMap (not sync)/Hashtable (sync). C++: std::unordered_map.</li>
							<li><Accent>Binary Search Tree (BST)</Accent> - rooted binary tree data structure with the key of each internal node greater (or equal to) than all the elements in the left subtree, and less than all the elements in the right subtree. O(log N) for search, insert and delete operations. Worst-case scenario O(N).</li>
							<li><Accent>Treemap</Accent> - data structure that stores <Accent>key-value pairs in sorted order</Accent>, implemented as a Red-Black tree (Self-Balancing Binary Search Tree). Used for information visualisation and displaying hierarchical data using nested figures. Useful for range queries (find all keys between two values), navigation (nearest key lookup).</li>
							<li><Accent>Trie</Accent> - prefix tree, tree-like data structure used to efficiently store and retrieve strings. Useful for: autocomplete, spell checking, IP routing. The tree stores a path, not a full string. The root node is an empty string, each node contains links to child nodes, end of a complete string in the trie is marked with a boolean flag or separate node. Insert, search, prefix lookup O(M), where M is the length of the string.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-6">
							std::map vs std::unordered_map
						</span>
						<ul className="collapse" id="collapse-6">
							<li>Both associative containers in C++ storing key-values pairs.</li>
							<li><Accent>Underlying data structure</Accent>: map - balanced binary search tree, elements sorted by key, efficient traversal; unordered_map - hash table, stored based on hash of key, no guaranteed order.</li>
							<li><Accent>Time complexity</Accent>: map - O(log N) all operations; unordered_map - O(1) average-case, O(N) worst-case collisions.</li>
							<li><Accent>Use cases</Accent>: map - ordered traversal, predictable performance, memory overhead is a concern; unordered_map - fast average-case lookup, order is irrelevant, prioritize high performance.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-7">
							Tree types
						</span>
						<ul className="collapse" id="collapse-7">
							<li>N-ary, Binary, Binary Search Tree, Trie, AVL, Red-Black, Treap (combination of binary search tree and heap)</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-8">
							DFS vs BFS
						</span>
						<ul className="collapse" id="collapse-8">
							<li>Both are fundamental graph traversal algorithms.</li>
							<li><Accent>Used Data Structure</Accent>: BFS - queue, DFS - stack.</li>
							<li><Accent>Traversal</Accent>: BFS - level by level, DFS - as far as possible along a branch then backtrack.</li>
							<li><Accent>Optimality</Accent>: BFS - guarantees shortest path, DFS - good for checking path existence or exploring deep structures.</li>
							<li><Accent>Space complexity</Accent>: BFS - more memory, especially for wide graphs, DFS - less memory O(d) where d is depth.</li>
							<li><Accent>Time complexity</Accent>: O(V + E), V = vertices, E = edges</li>
							<li><Accent>Use cases</Accent>: BFS - shortest path, DFS - exploring deep/large trees, detecting cycles, topological sorting, or when limited memory.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-9">
							Examples of Binary Tree traversals
						</span>
						<ul className="collapse" id="collapse-9">
							<li><Accent>In-order</Accent> - left subtree, root, right subtree</li>
							<li><Accent>Pre-order</Accent> - root, left subtree, right subtree</li>
							<li><Accent>Post-order</Accent> - left subtree, right subtree, root</li>
							<li><Accent>Level-order (Breadth-First)</Accent> - visit nodes level by leve, from top to bottom, left to right.</li>
							<li><Accent>DFS</Accent> - explore to maximum depth per branches (similar to pre-order).</li>
						</ul>
					</li>
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