import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import CardHeader from "components/CardHeader";

/*
class TreeNode {
	constructor(data) {
		this.data = data;
		this.children = [];
		this.parent = null;
	}

	addChild(child) {
		if (child instanceof TreeNode) {
			child.parent = this;
			this.children.push(child);
		} else {
			const newNode = new TreeNode(child);
			newNode.parent = this;
			this.children.push(newNode);
		}
	}

	removeChild(childToRemove) {
		const index = this.children.findIndex(
			child => 
			childToRemove instanceof TreeNode
				? child === childToRemove
				: child.data === childToRemove
			);
		if (index !== -1) {
			this.children.splice(index, 1);
		} else {
			// Recursively search in children
			this.children.forEach(child => child.removeChild(childToRemove));
		}
	}

	print(level = 0) {
		const indent = '-- '.repeat(level);
		console.log(`${indent}${this.data}`);
		this.children.forEach(child => child.print(level + 1));
	}

	depthFirstTraversal() {
		console.log(this.data);
		this.children.forEach(child => child.depthFirstTraversal());
	}

	breadthFirstTraversal() {
		const queue = [this];
		while (queue.length > 0) {
			const current = queue.shift(); // take first
			console.log(current.data);
			queue.push(...current.children);
		}
	}

	findNode(data) {
		const queue = [this];
		while (queue.length > 0) {
			const current = queue.shift();
			if (current.data === data) return current;
			queue.push(...current.children);
		}
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor(data) {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (value === current.value) return undefined;
			if (value < current.value) {
				if (!current.left) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else {
				if (!current.right) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	delete(data) {
		this.root = this.removeNode(this.root, data);
	}

	removeNode(node, data) {
		if (!node) return null;

		if (data < node.value) {
			node.left = this.removeNode(node.left, data);
		} else if (data > node.value) {
			node.right = this.removeNode(node.right, data);
		} else {
			// Found node to delete
			if (!node.left && !node.right) {
				// Case 1: leaf node
				return null;
			} else if (!node.left) {
				// Case 2: node has only right child
				return node.right;
			} else if (!node.right) {
				// Case 3: node has only left child
				return node.left;
			} else {
				// Case 4: node has only right child
				// Find min in right subtree, replace value and remove
				const minRight = this.findMin(node.right);
				node.value = minRight.value;
				node.right = this.removeNode(node.right, minRight.value);
			}
		}
		return node;
	}

	findMin(node) {
		while (node.left) node = node.left;
		return node;
	}

	find(data) {
		if (!this.root) return null;
		let current = this.root;
		while (current) {
			if (value === current.value) return current;
			if (value < current.value)
				current = current.left;
			else
				current = current.right;
		}
		return null;
	}

	inOrder(node = this.root) {
		if (!node) return [];
		return [
			...this.inOrder(node.left),
			node.value,
			...this.inOrder(node.right)
		];
	}

	preOrder(node = this.root) {
		if (!node) return [];
		return [
			node.value,
			...this.inOrder(node.left),
			...this.inOrder(node.right)
		];
	}

	postOrder(node = this.root) {
		if (!node) return [];
		return [
			...this.inOrder(node.left),
			...this.inOrder(node.right),
			node.value
		];
	}
}

class TrieNode {
	constructor() {
		this.children = new Map();
		this.isEndOfWord = false;
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode();
	}

	insert(word) {
		let current = this.root;
		for (const char of word.toLowerCase()) {
			if (!current.children.has(char)) {
				current.children.set(char, new TrieNode());
			}
			current = current.children.get(char);
		}
		current.isEndOfWord = true;
	}

	search(word) {
		const node = this._findNode(word.toLowerCase());
		return node !== null && node.isEndOfWord;
	}

	_findNode(word) {
		let current = this.root;
		for (const char of word) {
			if (!current.children.has(char)) return null;
			current = current.children.get(char);
		}
		return current;
	}

	// Check if any word starts with the given prefix
	startsWith(prefix) {
		return this._findNode(prefix.toLowerCase()) !== null;
	}
}
*/

export default function Tree() {
	const [toggle, setToggle] = useState(false);
	const generic = `class TreeNode {
	constructor(data) {
		this.data = data;
		this.children = [];
		this.parent = null;
	}

	addChild(child) {
		if (child instanceof TreeNode) {
			child.parent = this;
			this.children.push(child);
		} else {
			const newNode = new TreeNode(child);
			newNode.parent = this;
			this.children.push(newNode);
		}
	}

	removeChild(childToRemove) {
		const index = this.children.findIndex(
			child => 
			childToRemove instanceof TreeNode
				? child === childToRemove
				: child.data === childToRemove
			);
		if (index !== -1) {
			this.children.splice(index, 1);
		} else {
			// Recursively search in children
			this.children.forEach(child => child.removeChild(childToRemove));
		}
	}

	print(level = 0) {
		const indent = '-- '.repeat(level);
		console.log(\`\${indent}\${this.data}\`);
		this.children.forEach(child => child.print(level + 1));
	}

	depthFirstTraversal() {
		console.log(this.data);
		this.children.forEach(child => child.depthFirstTraversal());
	}

	breadthFirstTraversal() {
		const queue = [this];
		while (queue.length > 0) {
			const current = queue.shift(); // take first
			console.log(current.data);
			queue.push(...current.children);
		}
	}

	findNode(data) {
		const queue = [this];
		while (queue.length > 0) {
			const current = queue.shift();
			if (current.data === data) return current;
			queue.push(...current.children);
		}
	}
}

const genericTreeRoot = new TreeNode(1);
[2,3,4].forEach(data => genericTreeRoot.addChild(data));
const node3 = genericTreeRoot.findNode(3);
console.log(node3);
node3?.addChild(5);
genericTreeRoot.print();`;

	const bst = `class BinarySearchTree {
	constructor(data) {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (value === current.value) return undefined;
			if (value < current.value) {
				if (!current.left) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else {
				if (!current.right) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	delete(data) {
		this.root = this.removeNode(this.root, data);
	}

	removeNode(node, data) {
		if (!node) return null;

		if (data < node.value) {
			node.left = this.removeNode(node.left, data);
		} else if (data > node.value) {
			node.right = this.removeNode(node.right, data);
		} else {
			// Found node to delete
			if (!node.left && !node.right) {
				// Case 1: leaf node
				return null;
			} else if (!node.left) {
				// Case 2: node has only right child
				return node.right;
			} else if (!node.right) {
				// Case 3: node has only left child
				return node.left;
			} else {
				// Case 4: node has only right child
				// Find min in right subtree, replace value and remove
				const minRight = this.findMin(node.right);
				node.value = minRight.value;
				node.right = this.removeNode(node.right, minRight.value);
			}
		}
		return node;
	}

	findMin(node) {
		while (node.left) node = node.left;
		return node;
	}

	find(data) {
		if (!this.root) return null;
		let current = this.root;
		while (current) {
			if (value === current.value) return current;
			if (value < current.value)
				current = current.left;
			else
				current = current.right;
		}
		return null;
	}

	inOrder(node = this.root) {
		if (!node) return [];
		return [
			...this.inOrder(node.left),
			node.value,
			...this.inOrder(node.right)
		];
	}

	preOrder(node = this.root) {
		if (!node) return [];
		return [
			node.value,
			...this.inOrder(node.left),
			...this.inOrder(node.right)
		];
	}

	postOrder(node = this.root) {
		if (!node) return [];
		return [
			...this.inOrder(node.left),
			...this.inOrder(node.right),
			node.value
		];
	}
}

const bstTest = new BinarySearchTree();
bstTest.insert(5);
bstTest.insert(3);
bstTest.insert(4);
bstTest.insert(7);
bstTest.insert(9);
bstTest.insert(1);
bstTest.insert(2);
bstTest.insert(6);
console.log("In order:", bstTest.inOrder());
console.log("Pre order:", bstTest.preOrder());
console.log("Post order:", bstTest.postOrder());
bstTest.delete(2);
console.log("In order:", bstTest.inOrder());`;

	const trie = `class TrieNode {
	constructor() {
		this.children = new Map();
		this.isEndOfWord = false;
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode();
	}

	insert(word) {
		let current = this.root;
		for (const char of word.toLowerCase()) {
			if (!current.children.has(char)) {
				current.children.set(char, new TrieNode());
			}
			current = current.children.get(char);
		}
		current.isEndOfWord = true;
	}

	search(word) {
		const node = this._findNode(word.toLowerCase());
		return node !== null && node.isEndOfWord;
	}

	_findNode(word) {
		let current = this.root;
		for (const char of word) {
			if (!current.children.has(char)) return null;
			current = current.children.get(char);
		}
		return current;
	}

	// Check if any word starts with the given prefix
	startsWith(prefix) {
		return this._findNode(prefix.toLowerCase()) !== null;
	}
}

const myTrie = new Trie();
myTrie.insert("hello");
myTrie.insert("help");
myTrie.insert("world");

console.log(myTrie.search("hello"));
console.log(myTrie.startsWith("hel"));
console.log(myTrie.search("hel"));`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Tree"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>
							Generic Tree
							<SyntaxHighlighter language="javascript">{generic}</SyntaxHighlighter>
						</li>
						<li>
							Binary Search Tree
							<SyntaxHighlighter language="javascript">{bst}</SyntaxHighlighter>
						</li>
						<li>
							Trie
							<SyntaxHighlighter language="javascript">{trie}</SyntaxHighlighter>
						</li>
					</ul>
					
				</>
			}
		</div>
	);
}