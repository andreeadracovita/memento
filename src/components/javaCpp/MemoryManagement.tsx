import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function MemoryManagement() {
	const [toggle, setToggle] = useState(false);
	const javaCode = `public class MemoryExample {
	public static void main(String[] args) {
		int id = 10;  // Primitive: stored directly on stack
		String name = "Alice" // Reference stored in stack, points to object on heap
		Student s = new Student(id, name); // Reference stored in stack; object on heap
	}
}`;

	const cppCode = `int* ptr = new int(42); // Allocate and initialize to 42
int* arr = new int[10]; // Allocate an array of 10 integers

delete ptr;
delete[] arr;`;
	const cppSmartCode = `#include <memory>
#include <iostream>

int main() {
	std::unique_ptr<int> ptrUnique = std::make_unique<int>(42);
	std::cout << "Value: " << *ptr << std::endl;

	auto ptrShared1 = std::make_shared<int>(100);
	std::cout << "Use count: " << ptrShared1.use_count() << std::endl; // 1

	auto ptrShared2 = ptr1;
	std::cout << "Use count: " << ptrShared1.use_count() << std::endl; // 2

	// Memory for ptrUnique automatically freed when it goes out of scope
	// Shared pointer object is deleted when both ptrShared1 and ptrShared2 go out of scope
	return 0;
}`;

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
					<div>
						<h2 className="card-section">Java</h2>
						<ul>
							<li><Accent>Automatic via garbage collection (GC)</Accent> - reclaims unreachable objects without programmer intervention.</li>
							<li><Accent>No common memory errors</Accent> like leaks and dangling pointers.</li>
							<li>GC introduces <Accent>non-deterministic pauses, potential latency and higher memory overhead</Accent> compared to C++.</li>
							<li>Does not support stack allocation for objects, all object being allocated on heap.</li>
							<li><Accent>Prioritises safety and developer productivity</Accent> at the cost of runtime efficiency.</li>
							<li>Primitives (int, char, etc.) are stored in the stack.</li>
							<li>Object are stored in the heap; their references are stored in the stack.</li>
							<li>Arrays are object and are stored in contiguous heap memory for fast indexing.</li>
						</ul>
						<SyntaxHighlighter language="java">{javaCode}</SyntaxHighlighter>
					</div>
					<hr />
					<div>
						<h2 className="card-section">C++</h2>
						<ul>
							<li><Accent>Manually controlled</Accent> through <Accent>new</Accent> and <Accent>delete</Accent>, with support for <Accent>smart pointers</Accent> (e.g., std::unique_ptr, std::shared_ptr) and <Accent>RAII</Accent> (Resource Acquisition Is Initialization) for safer, deterministic resource handling.</li>
							<li><Accent>Fine-grained control and high performance</Accent>, but <Accent>increases complexity</Accent> and <Accent>risks memory leaks and dangling pointers</Accent>.</li>
							<li>Dynamic memory allocation is made on Heap memory. Allows flexible, runtime-sized allocations.</li>
						</ul>
						<SyntaxHighlighter language="cpp">{cppCode}</SyntaxHighlighter>

						<h2 className="card-section">Best practices in Modern C++</h2>
						<ul>
							<li>Prefer <Accent>smart pointers</Accent> over raw new/delete to automate memory management via RAII.</li>
							<li>Use <Accent>Standard Library containers</Accent> like <Accent>std::vector, std::string and std::array</Accent> that manage memory internally.</li>
							<li>Avoid raw new and delete unless necessary; use <Accent>std::make_unique</Accent> and <Accent>std::make_shared</Accent> for safer initialization.</li>
							<li>Use tools to detect memory leaks and errors.</li>
						</ul>
						<SyntaxHighlighter language="cpp">{cppSmartCode}</SyntaxHighlighter>
					</div>
				</>
			}
		</div>
	);
}