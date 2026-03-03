import BitManipulation from "components/concepts/BitManipulation";
import Memory from "components/concepts/Memory";
import ObjectOriented from "components/concepts/ObjectOriented";
import SystemDesignScalability from "components/concepts/SystemDesignScalability";
import Testing from "components/concepts/Testing";
import CardHeader from "components/CardHeader";

export default function Concepts() {
	return (
		<>
			<h1 className="archivo-black-regular">Concepts</h1>
			<div className="grey-card">
				<CardHeader
					title={"Generic Computer Science Questions"}
					toggle={true}
				/>
				<ul>
					<li>Difference between static and dynamic libraries? Who loads the dynamic libraries?</li>
					<li>What is virtual memory and what is it used for?</li>
					<li>Does malloc allocate virtual memory or physical memory?</li>
					<li>What memory addresses is the CPU using when executing a program?</li>
					<li>Who translates virtual memory into physical memory? (MMU, TLB)</li>
					<li>What is a segmentation fault?</li>
					<li>What are memory pages?</li>
					<li>Process in-memory layout/structure (Heap, Stack, Text, Data)</li>
					<li>What is stack overflow?</li>
					<li>What is buffer overflow?</li>
					<li>Application vs Process vs Thread</li>
					<li>Do threads have private memory? (stack, TLS)</li>
					<li>How is communication between threads achieved?</li>
					<li>What is a race condition?</li>
					<li>Describe a deadlock scenario. What is the difference between a deadlock and a livelock?</li>
					<li>Mutex vs Semaphore</li>
					<li>Mutex vs Spinlock</li>
					<li>What other synchronisation primitives are there? How do they work?</li>
					<li>Inter Process Communication examples</li>
					<li>Unit testing vs integration testing, any other examples of testing</li>
					<li>Examples of design patters and their description</li>
				</ul>
			</div>

			<BitManipulation />
			<Memory />
			<ObjectOriented />
			<SystemDesignScalability />
			<Testing />
		</>
	);
}