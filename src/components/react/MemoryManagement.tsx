import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function MemoryManagement() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Memory Management"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>Memory management in React apps relies on JS's automatic garbage collection, but developers must actively prevent memory leaks by managing side effects and references.</li>
						<li><Accent>JS Garbage Collection</Accent> - uses <Accent>mark-and-sweep algorithm</Accent> to automatically reclaim memory from unreachable objects. When React components unmount, the garbage collector should free its associated memory - but only if all references are cleared.</li>
						<li>
							Common Causes of Memory Leaks
							<ul>
								<li>Uncleaned side effects: Event listeners, timers (<Accent>setInterval</Accent>, <Accent>setTimeout</Accent>) or subscriptions not removed in <Accent>useEffect</Accent> cleanup functions.</li>
								<li>Uncancelled async operations: Fetch requests or promisses that resolve after a component unmounts.</li>
								<li>Closures in <Accent>useEffect</Accent>: Holding onto stale state or props.</li>
								<li>Global references: Keeping references in <Accent>window</Accent>, <Accent>document</Accent> or global objects.</li>
								<li><Accent>useRef</Accent> not cleared: Holding onto DOM elements or component instances.</li>
							</ul>
						</li>
						<li>
							Best Practices to Prevent Leaks
							<ul>
								<li>Always use cleanup functions in <Accent>useEffect</Accent> for timers, listeners or subscriptions.</li>
								<li>Cancel async requests using <Accent>AbortController</Accent> for <Accent>fetch</Accent> calls.</li>
								<li>Use <Accent>React.memo</Accent>, <Accent>useMemo</Accent> and <Accent>useCallback</Accent> to prevent unncecessary re-renders and reduce memory churn.</li>
								<li>Virtualize long lists with <Accent>FlatList</Accent> or <Accent>react-window</Accent> to limit DOM elements in memory.</li>
								<li>Implement lazy loading with <Accent>React.lazy</Accent> and <Accent>Suspense</Accent> to reduce initial bundle size and memory footprint.</li>
								<li>Profile memory usage using <Accent>Chrome DevTools (Heap Snapshots)</Accent> or <Accent>React DevTools</Accent> to detect retained objects.</li>
							</ul>
						</li>
					</ul>
				</>
			}
		</div>
	);
}