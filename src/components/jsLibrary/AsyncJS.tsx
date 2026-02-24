import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function AsynchronousJS() {
	const [toggle, setToggle] = useState(false);
	const timeoutCode = `let updateIntervalId = setTimeout(checkForUpdates, 60000);

function stopCheckingForUpdates() {
    clearInterval(updateIntervalId);
}`;
	const eventsCode = `let okay = document.querySelector('#confirmUpdateDialog button.okay');
okay.addEventListener('click', doSomethingFoo);`;
	const networkEventsCode = `function getCurrentVersionNumber(versionCallback) {
    let request = new XMLHttpRequest();
    request.open("GET", "http://www.example.com/api/version");
    request.send();

    // Callback that will be invoked when the response arrives
    request.onload = function() {
        if (request.status === 200) {
            let currentVersion = parseFloat(request.responseText);
            versionCallback(null, currentVersion);
        } else {
            versionCallback(response.statusText, null);
        }
    };
    // Callback that will be invoked for network errors
    request.onerror = request.ontimeout = function(e) {
        versionCallback(e.type, null);
    };
}`;
	const promiseCode = `function displayUserProfile(profile) { /* ... */ }

// Promise
getJSON("/api/user/profile").then(displayUserProfile);

// Error handling
getJSON("/api/user/profile").then(displayUserProfile).catch(handleProfileError);

// Chaining promises
fetch(documentURL)
    .then(response => response.json())
    .then(document => {
        return render(document);
    })
    .then(rendered => {
        cacheInDatabase(rendered);
    })
    .catch(error => handle(error));

fetch("/api/user/profile").then(response => {
    // When the promise resolves, we have status and headers
    if (response.ok &&
        response.headers.get("Content-Type") === "application/json") {
        // What can we do here? We don't actually have the response body yet.
    }
});

// Parallel promises
const urls = [ /* zero or more URLs here */ ];
promises = urls.map(url => fetch(url).then(r => r.text()));
Promise.all(promises)
    .then(bodies => { /* do something */ })
    .catch(e => console.error(e));

Promise.allSettled([Promise.resolve(1), Promise.reject(2), 3]).then(results => {
    results[0]  // => { status: "fulfilled", value: 1 }
    results[1]  // => { status: "rejected", reason: 2 }
    results[2]  // => { status: "fulfilled", value: 3 }
});`;
	const awaitCode = `let response = await fetch("/api/user/profile");
let profile = await response.json();

// Await multiple
let [value1, value2] = await Promise.all([getJSON(url1), getJSON(url2)]);`;
	const asyncCode = `foo().then(handleFulfilled).catch(handleError);`
	const forAwaitCode = `// Example 1
for await (const response of promises) {
    handle(response);
}

// Example 2
for (const promise of promises) {
    response = await promise;
    handle(response);
}`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Asynchronous JS"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>JavaScript programs in a web browser are typically <Accent>event-driven</Accent>, meaning that they wait for the user to click or tap before they actually do anything. And JavaScript-based servers typically wait for client requests to arrive over the network before they do anything.</li>
						<li>3 important JS features that make it easier to work with asynchronous code:
							<ul>
								<li><Accent>Promises</Accent> - objects that represent not yet available result of an asynchronous operation.</li>
								<li><Accent>async</Accent> and <Accent>await</Accent> keywords - allows structuring Promise-based code as if it was synchronous.</li>
								<li><Accent>asynchronous iterators</Accent> and the <Accent>for/await</Accent> loop - allow working with streams of asynchronous events in a synchronous manner.</li>
							</ul>
						</li>
						<li>At its most fundamental level, asynchronous programming in JavaScript is done with <Accent>callbacks</Accent>.</li>
						<li>Asynchrony using timers:
							<SyntaxHighlighter language="javascript">{timeoutCode}</SyntaxHighlighter>
						</li>
						<li>Asynchrony using events:
							<SyntaxHighlighter language="javascript">{eventsCode}</SyntaxHighlighter>
						</li>
						<li>Asynchrony with network events:
							<SyntaxHighlighter language="javascript">{networkEventsCode}</SyntaxHighlighter>
						</li>
						<li><Accent>Promise terminology</Accent>: a promise is "fulfilled" or "rejected". Otherwise, it is "pending". Once it is "fulfilled" or "rejected", it is "settled". Promises can also be "resolved".</li>
						<li>When you pass a <Accent>callback c</Accent> to the then() method, then() returns a <Accent>Promise p</Accent> and arranges to asynchronously invoke c at some later time. The callback performs some computation and returns a <Accent>value v</Accent>. When the callback returns, p is resolved with the value v. When a Promise is resolved with a value that is not itself a Promise, it is immediately <Accent>fulfilled with that value</Accent>.</li>
						<li>If the return value v is itself a Promise, then <Accent>p is resolved but not yet fulfilled</Accent>.</li>
						<li>Can also chain a <Accent>.finally()</Accent> clause to perform the callback regardless of the promise resolution, for example for cleanup code.
							<SyntaxHighlighter language="javascript">{promiseCode}</SyntaxHighlighter>
							<img src="graphics/async.png" className="graphics graphics-lg" />
						</li>
						<li>The <Accent>await</Accent> keyword takes a Promise and turns it back into a return value or a thrown exception. Any code that uses await becomes itself asychronous.
							<SyntaxHighlighter language="javascript">{awaitCode}</SyntaxHighlighter>
						</li>
						<li><Accent>async</Accent> keyword - you can only use the <Accent>await</Accent> keyword within functions that have been declared with the async keyword. An async function must be awaited to use the returned value. If one cannot declare the top-level function as async, the async function inside it must be dealt with in the regular way:
							<SyntaxHighlighter language="javascript">{asyncCode}</SyntaxHighlighter>
						</li>
						<li><Accent>for/await</Accent> loop
							<SyntaxHighlighter language="javascript">{forAwaitCode}</SyntaxHighlighter>
						</li>
						<li>Objects that are asynchronously iterable can be used with a for/await loop. You can create asynchronously iterable objects by implementing a <Accent>[Symbol.asyncIterator]()</Accent> method or by invoking an <Accent>async function * generator</Accent> function. Asynchronous iterators provide an alternative to “data” events on streams in Node and can be used to represent a stream of user input events in client-side JavaScript.</li>
					</ul>
				</>
			}
		</div>
	);
}