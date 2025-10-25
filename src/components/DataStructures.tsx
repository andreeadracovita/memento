export default function DataStructures() {

	const arrayData0 = `Language	Example
C++			int ages[] = {49, 48, 26, 19, 16};
Java		int[] ages = {49, 48, 26, 19, 16};
JavaScript	var ages = [49, 48, 26, 19, 16];`;

	const arrayData1 = `Language	Example						Initial Values
C++			int ages[5];				undefined
Java		int[] ages = new int[5]; 	0
JavaScript	var ages = Array(5); 		undefined`;
	
	return (
		<>
			<h1 className="archivo-black-regular">Data Structures</h1>

			<div className="grey-card">
				<p className="card-title">Arrays and Strings</p>
				<p>An <strong>array</strong> is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key.</p>
				<p><strong>Strings</strong> are basically a single dimension array of characters.</p>
				<p className="card-section">Defining an Array</p>
				<pre>{arrayData0}</pre>
				<p className="card-section">Defining of storage space</p>
				<pre>{arrayData1}</pre>
				
			</div>

			<div className="grey-card">
				<p className="card-title">Linked Lists</p>
				<pre>TODO</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">Stacks</p>
				<pre>TODO</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">Queues</p>
				<pre>TODO</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">Trees</p>
				<pre>TODO</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">Graphs</p>
				<pre>TODO</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">Hash Tables</p>
				<ul>
					<li>A data structure that maps keys to values for highly efficient lookup.</li>
					<li>Simple implementation: an array of linked lists and a hash code function. Linked lists are used to manage collisions.</li>
					<li>
						To insert a key:
						<ol>
							<li>Compute key's hash code. Two different keys could have the same hash code.</li>
							<li>Map the hash code to an index in the array (something like <pre>hash(key) % array_length</pre>).</li>
							<li>At this index, add the pair (key, value) to the linked list.</li>
						</ol>
					</li>
					<li>To retrieve a value pair by its key, repeat the process.</li>
					<li>Worst case runtime is O(N) if the number of collisions is very high.</li>
					<li>A good implementation keeps the number of collisions at a minimum.</li>
					<li>Alternative: lookup system with a balanced binary search tree. (O(log N) lookup time)</li>
				</ul>
				<img src="graphics/hash-table.png" className="w-50" />
			</div>
		</>
	);
}