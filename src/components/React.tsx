export default function React() {
	const jsx = `<MyComponent foo={1 + 2 + 3 + 4} />;`;
	const statements = `function NumberDescriber(props) {
	let description;
	if (props.number % 2 == 0) {
		description = <strong>even</strong>;
	} else {
		description = <i>odd</i>;
	}

	return <div>
		{props.number} is an {description} number
	</div>;
}`;
	const useMemoCode = `function TodoList({ todos, tab, theme }) {
	const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
	// ...
}`;

	return (
		<>
			<h1 className="archivo-black-regular">React</h1>

			<div className="grey-card">
				<p>A library for JS.</p>
				<p className="card-title">Advantages</p>
				<p>Fast, scalable, flexible, powerful, modular programming style and has a robust developer community that’s rapidly growing.</p>

				<p className="card-section">React Virtual DOM</p>
				<p>When new elements are added to the UI, a virtual DOM, which is represented as a tree is created. Each element is a node on this tree. If the state of any of these elements changes, a new virtual DOM tree is created. This tree is then compared or “diffed” with the previous virtual DOM tree.</p>
				<p>Every time the state of the application changes, the virtual DOM gets updated instead of the real DOM.</p>
				<p>The virtual DOM calculates the best possible method (minimal changes) to make these changes to the real DOM, resulting in reduced performance cost for updating the DOM.</p>
				
				<img src="graphics/react-dom.webp" className="w-75" />

				<p>In React every UI piece is a <strong>component</strong>, and <strong>each component has a state</strong>. React follows the observable pattern and listens for state changes. When the state of a component changes, React updates the virtual DOM tree. Once the virtual DOM has been updated, React then compares the current version of the virtual DOM with the previous version of the virtual DOM. This process is called “diffing”.</p>

				<p className="card-section">JSX props</p>
				<p>React allows us to pass information to components using things called props (short for properties). It makes use of one-directional data flow (parent-to-child components). However, with a callback function, it’s possible to pass props back from a child to a parent component.</p>
				<p>You can pass any JavaScript expression as a prop, by surrounding it with {}. For example, in this JSX:
					</p>
				<pre>{jsx}</pre>
				<p>if statements and for loops are not expressions in JavaScript, so they can’t be used in JSX directly. Instead, you can put these in the surrounding code. For example:</p>
				<pre>{statements}</pre>
				<p>Props Default to “True”</p>

				<p className="card-section">Components</p>
				<p>The first component is App. App can contain multiple components, and each component can in turn contain other components, like a tree.</p>

				<p className="card-section">States in React</p>
				<p>Stateful component. The state has a default state. To update the state React expects you use built-in <strong>setState()</strong> method (asynchronous).</p>
				<p>The state update will be scheduled and the component will re-render when it’s done.</p>

				<p className="card-section">Hooks in React</p>
				<p>Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own.</p>
				<p><strong>State Hooks</strong> - state lets a component “remember” information like user input.</p>
				<ul>
					<li>useState declares a state variable that you can update directly.</li>
					<li>useReducer declares a state variable with the update logic inside a reducer function.</li>
				</ul>

				<p><strong>Context Hooks</strong> - Context lets a component receive information from distant parents without passing it as props.</p>
				<ul>
					<li>useContext reads and subscribes to a context.</li>
				</ul>
				<p><strong>Ref Hooks</strong> - Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.</p>

				<p><strong>Effect Hooks</strong> - Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.</p>
				<ul>
					<li>useEffect connects a component to an external system.</li>
				</ul>

				<p><strong>Performance Hooks</strong> - A common way to optimize re-rendering performance is to skip unnecessary work. For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render.</p>
				<ul>
					<li>useMemo lets you cache the result of an expensive calculation.</li>
					<li>useCallback lets you cache a function definition before passing it down to an optimized component.</li>
				</ul>
				<pre>{useMemoCode}</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">Testing</p>
				<p>The most common approach uses Jest as the test runner and assertion library, combined with React Testing Library for rendering components and querying the DOM in a user-like manner.</p>
			</div>

			<p><strong>Reference</strong></p>
			<ul>
				<li><a href="https://react.dev/reference/react" target="_blank">https://react.dev/reference/react</a></li>
				<li><a href="https://payalpaul2436.medium.com/10-main-core-concept-you-need-to-know-about-react-303e986e1763" target="_blank">10 Main Core Concept You Need to Know About React</a></li>
			</ul>
		</>
	);
}