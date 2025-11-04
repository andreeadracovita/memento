import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function SystemDesignScalability() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"System Design and Scalability"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p className="card-section">Key Concepts</p>
					<p className="bold">Horizontal vs. Vertical Scaling</p>
					<ul>
						<li>Horizontal - increasing the number of nodes. Example: add additional servers, thus decreasing the load on any one server.</li>
						<li>Vertical - increasing the resources for a specific node. Example: add additional memory to a server to improve its ability to handle load changes.</li>
						Vertical scaling - easier than horizontal, but limited. Can only add so much memory or disk space.
					</ul>

					<p className="bold">Load Balancer</p>
					<p>Allows system to distribute the load evenly so that one server doesn't crash and take down the whole system. Must build out a network of cloned servers that all have essentially the same conde and access to the same data.</p>

					<p className="bold">Database Denormalization and NoSQL</p>
					<p>Joins in a relational db such as SQL can get very slow as the system grows bigger.</p>
					<p>Denormalization - adding redundant information into a database to speed up reads.</p>
					<p>Or use a NoSQL db - does not support joins and might structure data in a different way. Designed to scale better.</p>

					<p className="bold">Database Partitioning (Sharding)</p>
					<p>Sharding - splitting the data across multiple machines while ensuring you have a way of figuring out which data is on which machine.</p>
					<ul>
						<li><strong>Vertical Partitioning</strong> - by feature. Example: if building a social network, one partition for tables relating to profiles, another for messages, etc. Drawback: if one partition gets very large, might need to repartition that database.</li>
						<li><strong>Key-Based (Hash-Based) Partitioning</strong> - uses some part of the data (eg. ID) to partition it. Example: allocate N servers and put the data on mod(key, n). Issue: the number of servers you have is fixed. Adding additional servers means reallocating all the data - a very expensive task.</li>
						<li><strong>Directory-Based Partitioning</strong> - can maintain a lookup table for where the data can be found. Relatively easy to add additional servers, but it comes with two major drawbacks: the lookup table can be a single point of failure and constantly accessing this table impact performance.</li>
					</ul>
					<p>Can use multiple partitioning schemes.</p>

					<p className="bold">Caching</p>
					<p>In-memory cache can deliver very rapid results. It is a simple key-value pairing and typically sits between your application layer and your data store.</p>
					<p>When an application requests a piece of information, it first tries the cache. If the cache does not contain the key, it will then look up the data in the data store.</p>
					<p>When you cache, you might cache a query and its results directly. Or cache the specific object (eg. rendered version of a part of the website, a list of the most recent blog posts).</p>

					<p className="bold">Asynchronous Processing & Queues</p>
					<p>Slow operations should ideally be done asynchronously. Either pre-process or notify user of progress.</p>

					<p className="bold">Networking Metrics</p>
					<ul>
						<li><strong>Bandwidth</strong>: maximum amount of data that can be transferred in a unit of time. Typically expressed in bits/GB per second.</li>
						<li><strong>Throughput</strong>: the actual amount of data that is transferred per second.</li>
						<li><strong>Latency</strong>: how long it takes data to go from one end to the other. Delay between the sender of data and the receiver.</li>
					</ul>

					<p className="bold">MapReduce</p>
					<p>A MapReduce program is typically used to process large amounts of data. Write a Map step and Reduce step. The rest is handled by the system.</p>
					<ul>
						<li>Map takes in some data and emits a &lt;key, value&gt; pair.</li>
						<li>Reduce takes a key and a set of associated values and "reduces" them in some way, emitting a new key and value. The result may be fed back into the Reduce program for more reducing.</li>
					</ul>
					<p>Allows a lot of processing in parallel, makes processing huge amounts of data more scalable.</p>
					<p><strong>Example: word count problem</strong>. Process a large text corpus to count the frequency of each word.</p>
					<ul>
						<li>The <strong>mapper function</strong> processes each line of text, splits it into individual words, and emits each word as a key with a value of 1.</li>
						<li>The <strong>reducer function</strong> then aggregates these key-value pairs by summing the counts for each unique word, producing the final output of word frequencies.</li>
					</ul>

					<p className="card-section">Considerations</p>
					<ul>
						<li><strong>Failures</strong>: any part of the system can vail. Need to plan for many or all of these failures.</li>
						<li><strong>Availability and Reliability</strong>: availability is a function of the percentage of time the system is operational. Reliability is a function of the probability that the ssytem is operational for a certain unit of time.</li>
						<li><strong>Read-heavy vs. Write-heavy</strong>: impacts the design. If write-heavy, queue up the writes, must think about the potential failures. If read-heavy, might need to cache.</li>
						<li><strong>Security</strong>: think about the types of issues a system might face and design around those.</li>
					</ul>

					<p className="card-section">There is no "perfect" system</p>
				</>
			}
		</div>
	);
}