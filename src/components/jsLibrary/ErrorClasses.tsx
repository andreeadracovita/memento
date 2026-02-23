import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function ErrorClasses() {
	const [toggle, setToggle] = useState(false);
	const code = `class HTTPError extends Error {
    constructor(status, statusText, url) {
        super(\`\${status} \${statusText}: \${url}\`);
        this.status = status;
        this.statusText = statusText;
        this.url = url;
    }

    get name() { return "HTTPError"; }
}

let error = new HTTPError(404, "Not Found", "http://example.com/");
error.status        // => 404
error.message       // => "404 Not Found: http://example.com/"
error.name          // => "HTTPError"`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Error Classes"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>Traditionally, instances of Error or subclasses of Error class are used to signal errors with <Accent>throw</Accent>.</li>
						<li>When using an Error object, it captures the state of the JavaScript stack, and if the exception is uncaught, the stack trace will be displayed with the error message, which will help debug the issue.</li>
						<li>Properties of Error object: <Accent>name</Accent>, <Accent>message</Accent> and <Accent>toString()</Accent>. For objects created with <Accent>Error()</Accent>, the name is always "Error", and the message is the value passed to the constructor. The <Accent>Stack</Accent> property is also part of the object, but not part of ECMAScript standard.</li>
						<li>Predefined subclasses of Error: EvalError, RangeError, ReferenceError, SyntaxError, TypeError and URIError.</li>
						<li>Define own Error subclass that best encapsulates the error condition. Can define new properties in the subclass to provide more details.</li>
					</ul>
					<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
				</>
			}
		</div>
	);
}