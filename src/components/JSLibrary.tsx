import Array from "components/jsLibrary/Array";
import AsynchronousJS from "components/jsLibrary/AsyncJS";
import Classes from "components/jsLibrary/Classes";
import DateTime from "components/jsLibrary/DateTime";
import ErrorClasses from "components/jsLibrary/ErrorClasses";
import Functions from "components/jsLibrary/Functions";
import General from "components/jsLibrary/General";
import HashTable from "components/jsLibrary/HashTable";
import JSWebBrowsers from "components/jsLibrary/JSWebBrowsers";
import List from "components/jsLibrary/List";
import Map from "components/jsLibrary/Map";
import Modules from "components/jsLibrary/Modules";
import Node from "components/jsLibrary/Node";
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
			
			<List />
			<Stack />
			<Queue />
			<HashTable />

			<Functions />
			<Classes />
			<Modules />

			<ErrorClasses />

			<AsynchronousJS />
			<JSWebBrowsers />
			<Node />

			<General />

			<p><strong>Reference</strong></p>
			<a href="https://learning.oreilly.com/library/view/javascript-the-definitive/9781491952016/" target="_blank">
				JavaScript: The Definitive Guide, 7th Edition
			</a>
		</>
	);
}