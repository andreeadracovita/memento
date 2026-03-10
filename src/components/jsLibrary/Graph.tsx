import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import CardHeader from "components/CardHeader";

class GraphList {
	constructor() {
		this.adjList = new Map();
	}

	addVertex(v) {
		this.adjList.set(v, []);
	}

	addEdge(v, w) {
		this.adjList.get(v).push(w);
		this.adjList.get(w).push(v);
	}

	showAdjList() {
		console.log(this.adjList.forEach((val, key) => console.log(`${key}: ${val}`)));
	}
}

class GraphMatrix {
	constructor(numVertices) {
		this.adjMatrix = Array(numVertices).fill().map(() => Array(numVertices).fill(0));
	}

	addEdge(v, w) {
		this.adjMatrix[v][w] = 1;
		this.adjMatrix[w][v] = 1;
	}

	showAdjMatrix() {
		console.log(this.adjMatrix.forEach(row => console.log(row)));
	}
}

export default function Tree() {
	const [toggle, setToggle] = useState(false);
	const adjList = `class GraphList {
	constructor() {
		this.adjList = new Map();
	}

	addVertex(v) {
		this.adjList.set(v, []);
	}

	addEdge(v, w) {
		this.adjList.get(v).push(w);
		this.adjList.get(w).push(v);
	}

	showAdjList() {
		console.log(this.adjList.forEach((val, key) => console.log(\`\${key}: \${val}\`)));
	}
}

const myGraphList = new GraphList();
myGraphList.addVertex(1);
myGraphList.addVertex(2);
myGraphList.addVertex(3);
myGraphList.addVertex(4);
myGraphList.addVertex(5);
myGraphList.addEdge(1, 2);
myGraphList.addEdge(2, 3);
myGraphList.addEdge(2, 4);
myGraphList.addEdge(2, 5);
myGraphList.addEdge(3, 5);
myGraphList.showAdjList();`;
	const adjMatrix = `class GraphMatrix {
	constructor(numVertices) {
		this.adjMatrix = Array(numVertices).fill().map(() => Array(numVertices).fill(0));
	}

	addEdge(v, w) {
		this.adjMatrix[v][w] = 1;
		this.adjMatrix[w][v] = 1;
	}

	showAdjMatrix() {
		console.log(this.adjMatrix.forEach(row => console.log(row)));
	}
}

const myGraphMatrix = new GraphMatrix(6); // depends if 0 is also a vertex
myGraphMatrix.addEdge(1, 2);
myGraphMatrix.addEdge(2, 3);
myGraphMatrix.addEdge(2, 4);
myGraphMatrix.addEdge(2, 5);
myGraphMatrix.addEdge(3, 5);
myGraphMatrix.showAdjMatrix();`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Graph"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>
							Graph represented using an adjacency list (good for sparse graphs)
							<SyntaxHighlighter language="javascript">{adjList}</SyntaxHighlighter>
						</li>
						<li>
							Graph represented using an adjacency matrix (vertices 0 .. n)
							<SyntaxHighlighter language="javascript">{adjMatrix}</SyntaxHighlighter>
						</li>
					</ul>
				</>
			}
		</div>
	);
}