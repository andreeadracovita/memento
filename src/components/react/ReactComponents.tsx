import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function ReactComponents() {
	const [toggle, setToggle] = useState(false);

	const functionalComponents = `function MyComponent() {
	return <h1>My Component</h1>
}

const MyComponent = () => {
	return <h1>My Component</h1>
}

// Usage
const MyOtherComponent = () => {
	return (
		<div>
			<MyComponent />
			<p>Sample text</p>
		</div>
	)
}`;
	const componentProps = `const MyComponent = (props) => { // or ({title})
	return <h1>{props.title}</h1>
}

const App = () => {
	return (
		<MyComponent title="Hello World" />
	)
}`;
	const childrenProp = `const Greeting = ({children}) => {
	return children // or {children} if included between other HTML elements
}

const App = () => {
	return (
		<Greeting>
			<h1>Hello World!</h1>
		</Greeting>
	)
}`;
	const conditionalRendering = `const Greeting({display, message}) => {
	return ( display ? <h1>{message}</h1> : null )
}

const App = () => {
	return (
		<div>
			<Greeting message="not rendered!" display={false} />
		</div>
	)
}`;
	const listsComponents = `const ShoppingList = ({items}) => {
	return (
		<ul>
			{items.map((item) => <li key={item}>{item}</li>)}
		</ul>
	)
}

const App = () => {
	const groceries = ['broccoli', 'carrots', 'chicken', 'garlic']
	return <ShoppingList items={groceries} />
}`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"React Components"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>Components are the building blocks of web applications. They are used to group React elements so they are reusable.</p>
					<p className="card-section">Functional Components</p>
					<ul>
						<li>JS functions that return JSX.</li>
					</ul>
					<SyntaxHighlighter language="javascript">{functionalComponents}</SyntaxHighlighter>

					<p className="card-section">Component Props</p>
					<ul>
						<li>Props = custom attributes on components, used for passing data from parents.</li>
						<li>Props can be deconstructed using {}</li>
					</ul>
					<SyntaxHighlighter language="javascript">{componentProps}</SyntaxHighlighter>

					<p className="card-section">The Children Props</p>
					<ul>
						<li>All components have a special prop called children.</li>
						<li>Any data (usually components and React elements) sitting between opening and closing tags of the component get passed in as children.</li>
						<li>Enclose in {}.</li>
					</ul>
					<SyntaxHighlighter language="javascript">{childrenProp}</SyntaxHighlighter>

					<p className="card-section">Conditional Rendering</p>
					<ul>
						<li>Can use if: if(condition) return (...) (else) return (...)</li>
						<li>Can use ternary operator.</li>
						<li>If null is returned, nothing will render to the DOM.</li>
					</ul>
					<SyntaxHighlighter language="javascript">{conditionalRendering}</SyntaxHighlighter>

					<p className="card-section">Lists in Components</p>
					<ul>
						<li>Use the <Accent>.map()</Accent> method to loop through arrays of elements.</li>
						<li></li>
						<li></li>
					</ul>
					<SyntaxHighlighter language="javascript">{listsComponents}</SyntaxHighlighter>

					<p className="card-section">Memo</p>
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>

					<p className="card-section">Context</p>
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</>
			}
		</div>
	);
}