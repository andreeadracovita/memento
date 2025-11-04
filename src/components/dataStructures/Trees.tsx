import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Trees() {
	const [toggle, setToggle] = useState(false);
	const code = `class Node {
	public String name;
	public Node[] children;
}

class Tree {
	public Node root;
}`;
	const inOrder = `void inOrderTraversal(TreeNode node) {
	if (node != NULL) {
		inOrderTraversal(node.left);
		visit(node);
		inOrderTraversal(node.right);
	}
}`;
	const preOrder = `void preOrderTraversal(TreeNode node) {
	if (node != NULL) {
		visit(node);
		preOrderTraversal(node.left);
		preOrderTraversal(node.right);
	}
}`;
	const postOrder = `void postOrderTraversal(TreeNode node) {
	if (node != NULL) {
		postOrderTraversal(node.left);
		postOrderTraversal(node.right);
		visit(node);
	}
}`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Trees"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>A Tree Data Structure is a <strong>non-linear data structure</strong> in which a collection of elements known as <strong>nodes are connected to each other via edges</strong> such that there exists exactly one path between any two nodes.</p>
					<ul>
						<li>Each tree has a root node.</li>
						<li>The root node has zero or more child nodes.</li>
						<li>Each child node has zero or more child nodes, and so on.</li>
					</ul>
					<img src="graphics/tree.png" className="graphics" />
					<div>
						<pre>{code}</pre>
					</div>

					<p className="card-section">Types of trees</p>
					<ul>
						<li><strong>Binary Tree</strong> - each node has up to two children.</li>
						<li><strong>Binary Search Tree</strong> - each node fits a specific ordering property: all left descendents &lt;= n &lt; all right descendents</li>
						<li><strong>Balanced Tree</strong> - a type of binary search tree where the height of the tree is kept to a minimum, specifically ensuring that the height remains O(log n), where n is the number of nodes in the tree.</li>
						<li><strong>Complete Binary Tree</strong> - every level of the tree is fully filled, except for the last level (filled left to right). Can also be implemented using an array.</li>
						<li><strong>Full Binary Tree</strong> - binary tree in which every node has either zero or two children. No node has only one child.</li>
						<li><strong>Perfect Binary Tree</strong> - every level of the tree is fully filled.</li>
					</ul>

					<p className="card-section">Binary Tree Traversal</p>
					<p><strong>In-Order Traversal</strong></p>
					<pre>{inOrder}</pre>

					<p><strong>Pre-Order Traversal</strong></p>
					<pre>{preOrder}</pre>

					<p><strong>Post-Order Traversal</strong></p>
					<pre>{postOrder}</pre>

					<p className="card-section">Min-Heaps and Max-Heaps</p>
					<p>Complete binary tree where each node is smaller/larger than its children. The root is the minimum/maximum element in the tree. Two key operations: insert, extract[Min/Max].</p>
					<ul>
						<li><strong>Insert</strong> - start by inserting the element at the bottom in the next available spot, then fix the min/max tree property by swapping the new element with its parent until finding the appropriate spot. O(log N) time</li>
						<li><strong>Extract min/max</strong> - the min/max is at the top/root of the heap. To "remove" it, replace data with the last element in the heap. Swap data to fix order. If max heap, swap top with the largest of the 2 children. If min heap, swap top with smallest of the two children. Repeat until finding the appropriate place.</li>
					</ul>

					<p className="card-section">Tries (Prefix Trees)</p>
					<p>A trie is an n-ary tree in which characters are stored at each node. Each path down the tree may represent a word. * nodes are often used to indicate complete words. The existence of the MA path indicates that there are words that start with MA. * can be marked as a boolean flag inside "parent" node or as a special type of child.</p>
					<p>A node in a trie could have anywhere from 1 to ALPHABET_SIZE + 1 children (including special terminator child).</p>
					<p><strong>Use</strong>: a trie can check if a string is a valid prefix in O(K) time, K being the length of the string. Many problems involving lists of valid words leverage a trie as an optimization.</p>
					<img src="graphics/trie.png" className="graphics" />
				</>
			}
		</div>
	);
}