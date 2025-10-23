export default function HttpResponses() {

	const httpRegular = `(100 – 199) Informational responses
(200 – 299) Successful responses
(300 – 399) Redirection messages
(400 – 499) Client error responses
(500 – 599) Server error responses`;

	const httpFunny = `(100 - 199) Hold on
(200 - 299) Here you go
(300 - 399) Go away
(400 - 499) You fucked up
(500 - 599) I fucked up`;

	const mostFrequent = `200 OK
301 Moved Permanently
302 Found
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable`;
	
	return (
		<>
			<h1 className="archivo-black-regular">HTTP response status codes</h1>

			<div className="grey-card">
				<p className="card-title">Regular</p>
				<pre>{httpRegular}</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">In a nutshell</p>
				<pre>{httpFunny}</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">Most Frequent</p>
				<pre>{mostFrequent}</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">The funny one</p>
				<pre>418 I'm a teapot</pre>
			</div>
		</>
	);
}