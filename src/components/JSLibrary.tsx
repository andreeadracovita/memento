import Array from "components/jsLibrary/Array";
import AsynchronousJS from "components/jsLibrary/AsyncJS";
import Classes from "components/jsLibrary/Classes";
import DateTime from "components/jsLibrary/DateTime";
import ErrorClasses from "components/jsLibrary/ErrorClasses";
import Functions from "components/jsLibrary/Functions";
import General from "components/jsLibrary/General";
import Graph from "components/jsLibrary/Graph";
import HashTable from "components/jsLibrary/HashTable";
import IteratorsGenerators from "components/jsLibrary/IteratorsGenerators";
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
import Tree from "components/jsLibrary/Tree";

export default function JSLibrary() {
	return (
		<>
			<h1 className="archivo-black-regular">JS Library</h1>
			
			<Array />
			<String />
			<List />
			<Stack />
			<Queue />
			<Graph />
			<Tree />
			<HashTable />
			<Set />
			<Map />

			<Object />
			<Functions />
			<Classes />
			<IteratorsGenerators />
			<Modules />
			<ErrorClasses />
			<AsynchronousJS />

			<General />
			<DateTime />
			<Regex />

			<JSWebBrowsers />
			<Node />

			<p>Reference</p>
			<a href="https://learning.oreilly.com/library/view/javascript-the-definitive/9781491952016/" target="_blank">
				JavaScript: The Definitive Guide, 7th Edition
			</a>
		</>
	);
}