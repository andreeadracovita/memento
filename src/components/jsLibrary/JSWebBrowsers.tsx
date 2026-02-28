import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function JSWebBrowsers() {
	const [toggle, setToggle] = useState(false);
	const xssCode = `<script>
let name = new URL(document.URL).searchParams.get("name");
document.querySelector('h1').innerHTML = "Hello " + name;
</script>

http://www.example.com/greet.html?name=David

name=%3Cimg%20src=%22x.png%22%20onload=%22alert(%27hacked%27)%22/%3E

Hello <img src="x.png" onload="alert('hacked')"/>`;

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
						<li>In modules, top-level declarations are scoped to the module and can be explicitly exported. In nonmodule scripts, however, top-level declarations are scoped to the containing document, and the declarations are shared by all scripts in the document.</li>
						<li><Accent>Security aspects</Accent>: client-side JavaScript does not have general-purpose networking capabilities. A client-side JavaScript program can make HTTP requests. And another standard, known as WebSockets, defines a socket-like API for communicating with specialized servers.</li>
						<li><Accent>Cross-site scripting, or XSS</Accent>, is a term for a category of security issues in which an attacker injects HTML tags or scripts into a target website. A web page is vulnerable to cross-site scripting if it dynamically generates document content and bases that content on user-submitted data without first “sanitizing” that data by removing any embedded HTML tags from it.
							<SyntaxHighlighter language="javascript">{xssCode}</SyntaxHighlighter>
						</li>
						<li>Cross-site scripting attacks are so called because more than one site is involved. Site B includes a specially crafted link (like the one in the previous example) to site A. If site B can convince users to click the link, they will be taken to site A, but that site will now be running code from site B. That code might deface the page or cause it to malfunction. More dangerously, the malicious code could read cookies stored by site A (perhaps account numbers or other personally identifying information) and send that data back to site B. The injected code could even track the user’s keystrokes and send that data back to site B.</li>
						<li><Accent>Shadow DOM</Accent>: provides encapsulation and isolation for web components, allowing developers to create self-contained, reusable UI elements with their own scoped styles and DOM structure. It creates a private, isolated DOM subtree attached to a regular DOM element (the "shadow host"), shielding its internal structure from the main document. It Enables consistent behavior across different environments, ensuring components render and function as intended regardless of external styles or scripts. With Declarative Shadow DOM, developers can define shadow roots directly in HTML using <SyntaxHighlighter language="javascript">{`<template shadowrootmode="open">`}</SyntaxHighlighter>, improving support for server-side rendering and performance.</li>
						<li>
							Networking
							<ul>
								<li>To load a web page, the browser makes network requests—using the HTTP and HTTPS protocols—for an HTML file as well as the files and resources it depends on. The network APIs used:</li>
								<li>The <Accent>fetch()</Accent> method defines a Promise-based API for making HTTP and HTTPS requests. The fetch() API makes basic GET requests simple but has a comprehensive feature set that also supports just about any possible HTTP use case.</li>
								<li>The <Accent>Server-Sent Events (or SSE) API</Accent> is a convenient, event-based interface to HTTP “long polling” techniques where the web server holds the network connection open so that it can send data to the client whenever it wants.</li>
								<li><Accent>WebSockets</Accent> is a networking protocol that is not HTTP but is designed to interoperate with HTTP. It defines an <Accent>asynchronous message-passing API</Accent> where clients and servers can send and receive messages from each other in a way that is similar to TCP network sockets.</li>
							</ul>
						</li>
						<li></li>
					</ul>
					
				</>
			}
		</div>
	);
}