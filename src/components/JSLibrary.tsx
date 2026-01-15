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
			<Set />
			<Map />

			<div className="grey-card">
				<ul>
					<li>Destructuring</li>
					<li>Operators Table</li>
					<li>In/instanceof</li>
					<li>Statements - for/of, for/in</li>
					<li>Functions</li>
					<li>Classes</li>
					<li>Modules</li>
					<li>Error classes</li>
					<li>Internationalization API</li>
					<li>Timers</li>
					<li>Iterators and Generators</li>
					<li>Asynchronous JS</li>
					<li>JS in Web Browsers</li>
					<li>Server-Side JS with Node</li>
				</ul>
			</div>
			
			<List />
			<Stack />
			<Queue />
			<HashTable />

			<p><strong>Reference</strong></p>
			<a href="https://learning.oreilly.com/library/view/javascript-the-definitive/9781491952016/" target="_blank">
				JavaScript: The Definitive Guide, 7th Edition
			</a>
		</>
	);
}