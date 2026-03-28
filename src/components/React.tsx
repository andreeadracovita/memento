import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import About from "components/react/About";
import MemoryManagement from "components/react/MemoryManagement";
import Testing from "components/react/Testing";
import ReactComponents from "components/react/ReactComponents";
import Hooks from "components/react/Hooks";
import ClassComponent from "components/react/ClassComponent";
import LifecycleMethods from "components/react/LifecycleMethods";
import ErrorBoundaries from "components/react/ErrorBoundaries";

export default function React() {

	return (
		<>
			<h1 className="archivo-black-regular">React</h1>

			<About />
			<MemoryManagement />
			<Testing />

			<ReactComponents />
			<Hooks />
			<ClassComponent />
			<LifecycleMethods />
			<ErrorBoundaries />

			<p>Reference</p>
			<ul>
				<li><a href="https://react.dev/reference/react" target="_blank">https://react.dev/reference/react</a></li>
				<li><a href="https://payalpaul2436.medium.com/10-main-core-concept-you-need-to-know-about-react-303e986e1763" target="_blank">10 Main Core Concept You Need to Know About React</a></li>
				<li><a href="https://zerotomastery.io/cheatsheets/react-cheat-sheet/" target="_blank">React cheat sheet</a></li>
				<li><a href="https://www.epicreact.dev/react-19-cheatsheet" target="_blank">React 19 Cheat Sheet</a></li>
			</ul>
		</>
	);
}