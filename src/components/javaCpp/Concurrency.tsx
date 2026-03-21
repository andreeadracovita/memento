import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function Concurrency() {
	const [toggle, setToggle] = useState(false);
	const javaCode = `public class ThreadSynchronization {
	private static int c = 0;

	public static void increment() {
		for (int i = 0; i < 1000; i++) {
			c++;
		}
	}

	public static void main(String[] args) {
		Thread thread1 = new Thread(ThreadSynchronization::increment);
		Thread thread2 = new Thread(ThreadSynchronization::increment);
		thread1.start();
		thread2.start();

		try {
			thread1.join();
			thread2.join();
		} catch (InterruptedException e) {
			System.out.println("An error occured during processing: " + e.getMessage());
		}

		System.out.println("Final counter value is: " + ThreadSynchronization.c);
	}
}`;

	const cppCode = `#include <iostream>
#include <thread>
#include <atomic>

// Avoid raw int with multiple threads - causes undefined behavior due to data race
std::atomic<int> shared_counter{0}; // Thread-safe shared integer

void increment() {
	for (int i = 0; i < 1000; i++) {
		shared_counter.fetch_add(1); // Atomic increment
	}
}

// No mutex needed - avoids overhead of locking and is faster for simple operations
int main() {
	std::thread t1(increment);
	std::thread t2(increment);

	t1.join();
	t2.join();

	std::cout << "Final value: " << shared_counter;
	return 0;
}`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Concurrency"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<div>
						<h2 className="card-section">Java</h2>
						<ul>
							<li><Accent>Built-in</Accent>, high-level concurrency support: <Accent>synchronized</Accent> blocks, <Accent>java.util.concurrent</Accent> utilities, <Accent>ExecutorService</Accent>; makes it easier to write thread-safe code with less boilerplate.</li>
							<li>Better (compared to C++) developer <Accent>productivity and safety</Accent> due to its robust abstractions and automatic memory management.</li>
						</ul>
						<SyntaxHighlighter language="java">{javaCode}</SyntaxHighlighter>
					</div>
					<hr />
					<div>
						<h2 className="card-section">C++</h2>
						<ul>
							<li><Accent>Fine-grained</Accent>, low-level control over concurrency through standard library (since C++11), including <Accent>std::thread, std::mutex, std::lock_guard, std::jthread</Accent> (C++20).</li>
							<li>Gives <Accent>greater performance potential</Accent> and direct access to hardware, making C++ <Accent>ideal for performance-critical systems like game engines and real-time applications</Accent>.</li>
						</ul>
						<SyntaxHighlighter language="cpp">{cppCode}</SyntaxHighlighter>
					</div>
				</>
			}
		</div>
	);
}