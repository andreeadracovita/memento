import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Graphs() {
	const [toggle, setToggle] = useState(false);
	const adjacencyList = `class Graph {
	public Node[] nodes;
}

class Node {
	public String name;
	public Node[] children;
}`;
	const adjacencyListRepresentation = `0: 1
1: 2
2: 0, 3
3: 2
4: 6
5: 4
6: 5`;
	const dfs = `Depth-First Search
Node 0
  Node 1
    Node 3
      Node 2
      Node 4
  Node 5`;
	const bfs = `Breadth-First Search
Node 0
Node 1
Node 4
Node 5
Node 3
Node 2`;
	const dfsAlgorithm = `void searchDFS(Node root):
	if root == null: return
	visit(root)
	root.visited = true
	for each Node n in root.adjacent:
		if n.visited == false:
			searchDFS(n)
`;
	const bfsAlgorithm = `void searchBFS(Node root):
	Queue queue = new Queue()
	root.marked = true
	queue.enqueue(root)

	while !queue.isEmpty():
		Node r = queue.dequeue()
		visit(r)
		for each Node n in r.adjacent:
			if n.marked == false:
				n.marked = true
				queue.enqueue(n)
`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Graphs"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>A graph is a collection of nodes with edges between (some of) them.</p>
					<ul>
						<li>Graphs can be either directed or undirected.</li>
						<li>The graph might consist of multiple isolated subgraphs.</li>
						<li>If there is a path between every pair of vertices, it is called a "connected graph".</li>
						<li>The graph can also have cycles (or not - acyclic).</li>
					</ul>
					<img src="graphics/graph.png" className="graphics" />
					<p className="card-section">Graph as Adjacency List</p>
					<p>Every vertex/node stores a list of adjacent vertices. In an undirected graph, an edge like (a, b) would be stored twice, once in a, once in b.</p>
					<pre>{adjacencyList}</pre>
					<p>Can also be implemented as an array/hash table of lists/arrays.</p>
					<pre>{adjacencyListRepresentation}</pre>

					<p className="card-section">Graph as Adjacency Matrices</p>
					<p>N x N boolean matrix, N is the number of nodes, where a true value at matrix[i][j] indicates an edge from i to j. In an undirected graph, the matrix is symmetric. Uses more memory to store adjacencies, especially inefficient in sparse matrices.</p>

					<p className="card-section">Graph Search</p>
					<img src="graphics/graph-search.png" className="graphics" />
					<div className="row">
						<div className="col-6"><pre>{dfs}</pre></div>
						<div className="col-6"><pre>{bfs}</pre></div>
					</div>

					<p className="bold">Depth-First Search (DFS)</p>
					<p>Start at the root (or any arbitrary node) and explore each branch completely before moving on to the next branch. Implemented with a stack or recursively.</p>
					<p>Generally preferred when visiting every node in the graph.</p>
					<pre>{dfsAlgorithm}</pre>

					<p className="bold">Breadth-First Search (BFS)</p>
					<p>Start at the root (or any arbitrary node) and explore each neighbor before going on to any of their children. Implemented with a queue.</p>
					<p>Generally preferred for finding the shortest path between two nodes.</p>
					<pre>{bfsAlgorithm}</pre>

					<p className="bold">Bidirectional Search</p>
					<p>Used to find the shortest path between a source and destination node. Runs 2 simultaneous BFS from each node. When the searches collide, we found a path. Careful with directed graphs (need to search counter-direction from end node).</p>
					<p>Time: O(k<sup>d</sup>) compared to O(k<sup>d/2</sup>) for BFS, where d is the number of levels until reaching the end.</p>
				</>
			}
		</div>
	);
}