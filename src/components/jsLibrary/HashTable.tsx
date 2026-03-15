import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

class HashTableImpl {
	constructor(size = 50) {
		this.table = new Array(size);
		this.size = size;
	}

	// Example of hashing function
	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % this.table.length;
	}

	add(key, value) {
		const index = this._hash(key);
		if (!this.table[index])
			this.table[index] = [];
		this.table[index].push([key, value]);
	}

	get(key) {
		const index = this._hash(key);
		const bucket = this.table[index];
		if (!bucket) return undefined;
		for (let [k, v] of bucket) {
			if (k === key)
				return v;
		}
		return undefined;
	}

	remove(key) {
		const index = this._hash(key);
		const bucket = this.table[index];
		if (!bucket)
			return false;
		this.table[index] = bucket.filter(([k]) => k !== key);
		return true;
	}
}

export default function HashTable() {
	const [toggle, setToggle] = useState(false);

	const code = `class HashTableImpl {
	constructor(size = 50) {
		this.table = new Array(size);
		this.size = size;
	}

	// Example of hashing function
	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % this.table.length;
	}

	add(key, value) {
		const index = this._hash(key);
		if (!this.table[index])
			this.table[index] = [];
		this.table[index].push([key, value]);
	}

	get(key) {
		const index = this._hash(key);
		const bucket = this.table[index];
		if (!bucket) return undefined;
		for (let [k, v] of bucket) {
			if (k === key)
				return v;
		}
		return undefined;
	}

	remove(key) {
		const index = this._hash(key);
		const bucket = this.table[index];
		if (!bucket)
			return false;
		this.table[index] = bucket.filter(([k]) => k !== key);
		return true;
	}
}`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Hash Table"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>JavaScript does not have a native "HashTable" data structure, but it provides three primary built-in mechanisms that implement the functionality of a hash table: <Accent>plain objects ({})</Accent>, the <Accent>Map</Accent> and <Accent>Set</Accent> objects.</li>
						<li>While objects are commonly used for key-value storage and internally use a hash map-like structure for efficient lookups, they are limited to string keys and can have issues with prototype properties and the length property.</li>
						<li>The Map object, introduced in ES6, is a more versatile and recommended alternative, as it supports keys of any data type, maintains insertion order, and offers built-in methods like <Accent>set()</Accent>, <Accent>get()</Accent>, and <Accent>delete()</Accent> for efficient manipulation.</li>
						<li>
							Properties:
							<ul>
								<li><Accent>Hashing</Accent>: Keys are passed through a hash function to generate a numeric hash, which determines the bucket (index) in an internal array where the key-value pair is stored.</li>
								<li><Accent>Collision Handling</Accent>: When two keys hash to the same bucket, strategies like chaining (storing multiple entries in a list within the bucket) are used to resolve collisions.</li>
								<li><Accent>Load Factor & Rehashing</Accent>: To maintain performance, JavaScript engines automatically resize the internal table (rehash) when the load factor (ratio of entries to buckets) exceeds a threshold (typically ~0.7–0.8). This keeps average-case performance near O(1).</li>
								<li><Accent>Worst Case</Accent>: In rare cases with many collisions (e.g., all keys hashing to the same bucket), performance degrades to O(n), but this is mitigated by rehashing and efficient hashing algorithms.</li>
								<li><Accent>Key Equality</Accent>: Uses the SameValueZero algorithm — NaN is equal to NaN, and 0 and -0 are treated as equal. Object keys are compared by reference, not value.</li>
							</ul>
						</li>
					</ul>
					<p>Example of hash table:</p>
					<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
				</>
			}
		</div>
	);
}