import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function JSWebBrowsers() {
	const [toggle, setToggle] = useState(false);
	const code = ``;

	return (
		<div className="grey-card">
			<CardHeader
				title={"JS in Web Browsers"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>JavaScript programmers can think of the web as a <Accent>full-featured platform for application development</Accent>. Web browsers specialize in the display of formatted text and images, but, like native operating systems, browsers also provide other services, including graphics, video, audio, networking, storage, and threading. JavaScript is the language that enables web applications to use the services provided by the web platform.</li>
						<li>Client-side JavaScript - runs in web browsers (frontend)</li>
						<li>Server-side JavaScript - runs in web servers (backend)</li>
						<li>JavaScript is a single-threaded language.</li>
						<li>The web platform defines a controlled form of concurrency called a <Accent>“web worker”</Accent>. A web worker is a <Accent>background thread</Accent> for performing computationally intensive tasks without freezing the user interface.</li>
						<li>The code that runs in a web worker thread does not have access to document content, does not share any state with the main thread or with other workers, and <Accent>can only communicate with the main thread and other workers through asynchronous message events</Accent>, so the concurrency is not detectable to the main thread, and web workers do not alter the basic single-threaded execution model of JavaScript programs.</li>
						<li></li>
					</ul>
					<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
				</>
			}
		</div>
	);
}