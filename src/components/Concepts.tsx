import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
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
				<pre>/* Click a question to reveal the answer */</pre>
				<ul>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-1">
							Difference between static and dynamic libraries? Who loads the dynamic libraries?
						</span>
						<ul className="collapse" id="collapse-1">
							<li><Accent>Static libraries</Accent> are archives of object code that are linked at <Accent>compile time</Accent>. The linker copies the required code directly into the final executable, making it self-contained. This results in larger binaries but eliminates runtime dependency on external files. The executable runs independently, as all code is embedded.
								<ul>
									<li><Accent>Advantages</Accent>: self-contained, faster execution, no version conflicts (DLL), better security and isolation.</li>
									<li><Accent>Disadvantages</Accent>: larger execs, inflexible updates, higher memory usage.</li>
								</ul>
							</li>
							<li><Accent>Dynamic libraries</Accent> (or shared libraries) are linked at <Accent>runtime</Accent>.  The executable contains references to the library functions rather than the code itself. The actual linking happens when the program starts, and the operating system's dynamic linker (or loader) is responsible for locating, loading, and resolving symbols in the dynamic library.
								<ul>
									<li><Accent>Advantages</Accent>: smaller execs, memory efficiency, easy update, supports plugin architecture (load/unload at runtime)</li>
									<li><Accent>Disadvantages</Accent>: runtime dependency, slight performance overhead, risk of version mismatch (DLL), complex deployment (configuration and dependency management).</li>
								</ul>
							</li>
							<li>The <Accent>operating system's dynamic linker</Accent> loads dynamic libraries when the program starts.</li>
						</ul>
					</li>

					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-2">
							What is virtual memory and what is it used for?
						</span>
						<ul className="collapse" id="collapse-2">
							<li>= operating system level <Accent>memory management technique</Accent> that creates an illusion of a large, continuous memory space by <Accent>combining</Accent> physical RAM with disk storage (like a hard drive or SSD).</li>
							<li>It allows a computer to run larger or multiple applications simultaneously, even when the available physical RAM is insufficient. The <Accent>memory management unit (MMU)</Accent> in the CPU handles the automatic translation of virtual addresses (used by programs) into physical addresses (RAM/disk). Slower than RAM but efficient.</li>
							<li>
								Used for:
								<ul>
									<li><Accent>Extending available memory</Accent>: less frequently used data is temporarily used on the disk (page file, swap file) freeing RAM for active tasks.</li>
									<li><Accent>Enabling multitasking</Accent>: each program operates in its own isolated virtual address space, preventing interference and improving system stability.</li>
									<li><Accent>Improves security and isolation</Accent>: processes cannot access each other's memory.</li>
									<li><Accent>Simplifies programming</Accent>: developers don't need to manually manage memory allocation.</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-3">
							Does malloc allocate virtual memory or physical memory?
						</span>
						<ul className="collapse" id="collapse-3">
							<li><Accent>Virtual memory</Accent>. Malloc reserves a block of virtual address space within the process.</li>
							<li>The actual physical memory (RAM/swap) is not allocated at the time of the malloc call. Instead, physical memory is assigned only when the process first accesses the allocated memory.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-4">
							What memory addresses is the CPU using when executing a program?
						</span>
						<ul className="collapse" id="collapse-4">
							<li><Accent>Logical (virtual) addresses</Accent>. Those logical addresses are not the actual physical locations in RAM but are instead mapped to physical addresses by the Memory Management Unit (MMU).</li>
							<li>This abstraction allows multiple programs to run simultaneously, each believing they control the entire memory space, while the OS and MMU manage the mapping to prevent conflicts and ensure security.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-5">
							Who translates virtual memory into physical memory?
						</span>
						<ul className="collapse" id="collapse-5">
							<li><Accent>Memory Management Unit (MMU)</Accent> translates virtual memory into physical memory.</li>
							<li>It is a hardware component built into the CPU that automatically converts virtual addresses (used by software) into physical addresses (used by hardware).</li>
							<li>To improve performance, the MMU uses a Translation Lookaside Buffer (TLB), a cache that stores recent virtual-to-physical address translation, reducing the need to access the page table for every memory access.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-6">
							What is segmentation fault?
						</span>
						<ul className="collapse" id="collapse-6">
							<li>A specific type of error that occurs when a program attempts to access a memory location it is <Accent>not allowed to access</Accent>, such as writing to read-only memory or accessing memory that has already been freed.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-7">
							What are memory pages?
						</span>
						<ul className="collapse" id="collapse-7">
							<li>Memory pages are <Accent>fixed-length blocks of virtual memory</Accent> used in modern operating systems to manage memory efficiently.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-8">
							What is a process' in-memory layout & structure
						</span>
						<ul className="collapse" id="collapse-8">
							<li><Accent>Text Segment (Code)</Accent>: compiled machine code of the program, read-only. Loaded into memory when a program starts and remains unchanged during execution.</li>
							<li><Accent>Initialised Data Segment (Data)</Accent>: stores global and static non-zero vars, read-write, loaded into RAM.</li>
							<li><Accent>BSS Segment (Block Started by Symbol)</Accent>: holds global and static vars declared by not initialized, read-write, OS initialises values to zero before the program starts.</li>
							<li><Accent>Heap</Accent>: used for dynamic memory allocation via malloc(), calloc(), free(). Grows upward (towards higher addresses), is shared among all threads and libraries in a process. Memory here persists until explicitly freed.</li>
							<li><Accent>Stack</Accent>: manages function calls, local variables, return addresses, parameters. Grows downward, automatically managed by CPU and compiler. Each function call creates a new stack frame and they are popped when the function returns.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-9">
							What is stack overflow?
						</span>
						<ul className="collapse" id="collapse-9">
							<li>Programming error which occurs when <Accent>a program uses more memory on the call stack than is allocated</Accent>.</li>
							<li>Usually happens due to <Accent>infinite recursion</Accent> or <Accent>excessively large local variables</Accent>.</li>
							<li>Results in crashes or security attacks.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-10">
							What is buffer overflow?
						</span>
						<ul className="collapse" id="collapse-10">
							<li>Software error which occurs when a program <Accent>writes more data to a buffer</Accent> - a fixed memory block of memory - <Accent>than it can hold</Accent>, overwriting adjacent memory locations.</li>
							<li>Leads to <Accent>data corruption</Accent>, crash, allows attackers to execute malicious code.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-11">
							Application vs Process vs Thread
						</span>
						<ul className="collapse" id="collapse-11">
							<li><Accent>Application</Accent> - high-level software program, performs specific tasks.</li>
							<li><Accent>Process</Accent> - instance of an application running in memory. It is the OS's way of managing an executing program, with its own isolated memory space, resources, unique process identifier (PID). Each process runs independently and is managed by the OS. An application can spawn <Accent>multiple processes</Accent> for better performance, security/isolation, scalability, improved stability (<Accent>example</Accent>: web browser tabs, server apps, security with different privileges).</li>
							<li><Accent>Thread</Accent> - the smallest unit of execution within a process. A process can have <Accent>multiple threads, sharing memory space, code, resources</Accent>. Multi-threading allows concurrent execution of tasks, enabling responsiveness (UI). However, because they share resources, threads require <Accent>careful synchronisation to avoid race conditions</Accent>. Operating System <Accent>Scheduler</Accent> decides which thread is running at a given moment.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-12">
							Do threads have private memory?
						</span>
						<ul className="collapse" id="collapse-12">
							<li><Accent>Private components & shared process memory</Accent></li>
							<li>Each thread has <Accent>its own stack (private)</Accent> used for local variables and function calls. However, the memory itself is still accessible by other threads.</li>
							<li>Threads <Accent>share the same virtual address space</Accent>, they can access the heap, global data, code and file descriptors.</li>
							<li><Accent>Thread-Local Storage (TLS)</Accent> - a way to create truly private data per thread.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-13">
							How is communication between threads achieved?
						</span>
						<ul className="collapse" id="collapse-13">
							<li>Communication between threads (inter thread communication) is achieved through <Accent>shared resources and synchronisation mechanisms</Accent> to coordinate execution and exchange data safely.</li>
							<li><Accent>Shared memory</Accent>: threads within the same process share the same memory space, can read and write to shared variables and objects. Synchronisation needed to prevent race conditions.</li>
							<li><Accent>Synchronisation and Wait/Notify</Accent>: wait(), notify(), notifyAll() (Java) methods in Object class, can be run in synchronized context. In C++, std::mutex, std::lock_guard, std::unique_lock ensure that only one thread can access a <Accent>critical section</Accent> at a time. JS is single-threaded, but multithreading is achievable using Web Workers (browser) or Worker Threads (Node.js) and communication is message-based (serialized).</li>
							<li>Message-Based Mechanisms: blocking queues, pipelines, message queues to exchange data asynchronously.</li>
							<li><Accent>Synchronisation Primitives</Accent>: OS and programming languages provide additional tools to manage access to shared resources and signal between threads: <Accent>semaphores, mutexes, condition variables, events</Accent>.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-14">
							What is a race condition?
						</span>
						<ul className="collapse" id="collapse-14">
							<li>A race condition is a situation where <Accent>the behavior of a system depends on the sequence or timing of uncontrollable events</Accent>, such as the order in which threads or processes execute, leading to <Accent>unexpected or inconsistent results</Accent>.</li>
							<li>Example: <Accent>two or more threads try to change the same shared data at the same time</Accent>. Because the thread scheduling algorithm can swap between threads at any time, we don't know the order in which the threads will attempt to acces the shared data.</li>
							<li>Problems often arise in <Accent>"check-then-act"</Accent> situations: if (condition) then operation. One thread has gained acces to the resource and has entered the if, but another thread changes the data, rendering the condition invalid.</li>
							<li><Accent>Solution</Accent>: put a <Accent>lock</Accent> around the shared data to ensure only one thread can access the data at a time. Example: obtain lock, if (condition) then operation, release lock.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-15">
							Describe a deadlock scenario. What is the difference between a deadlock and a livelock?
						</span>
						<ul className="collapse" id="collapse-15">
							<li>Deadlock - situation where two or more processes or threads are <Accent>unable to proceed because each is waiting for the other to release a resource it needs</Accent>.</li>
							<li>Livelock - similar but the processes are not blocked, they are actively changing states in response to each other, yet they fail to make real progress. Results in high CPU usage but no useful work is completed. Example: two people in a hallway keep stepping aside in sync, never passing each other. Solved by introducing randomness, back-off strategies, checkpoints to break repetitive cycles.</li>
							<li>4 conditions for a deadlock to occur (Coffman):
								<ul>
									<li>Mutual Exclusion: at least one resource is non-shareable - only one process can use it at a time.</li>
									<li>Hold and Wait: a process holds at least one resource while waiting for another.</li>
									<li>No Preemption: resources cannot be forcibly taken from a process, they must be released voluntarily.</li>
									<li>Circular Wait: processes form a circular chain where each is waiting for a resource held by the next.</li>
								</ul>
							</li>
							<li>Examples:
								<ul>
									<li>Real life - 2 vehicles approach the opposite ends of a single-lane bridge with no reverse gear, each blocking the other.</li>
									<li>Database transactions - two transactions each lock a different record and then try to access the other's record. Neither can proceed.</li>
								</ul>
							</li>
							<li>Prevention and resolution
								<ul>
									<li>Prevention: design systems to avoid one or more Coffman conditions.</li>
									<li>Avoidance: ensure safe resource allocation.</li>
									<li>Detection & Recovery: use wait-for graphs to detect deadlocks and resolve them by terminanting processes or rolling back to checkpoints.</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-16">
							Mutex vs Semaphore vs Spinlock
						</span>
						<div className="collapse" id="collapse-16">
							<ul>
								<li>They are all synchronising objects designed to provide efficient and coherent use of shared data between threads of the same process or from different processes.</li>
								<li><Accent>Mutex</Accent> - used for mutual exclusion, ensuring <Accent>only one thread can access a critical section at a time</Accent>. If the mutex is unavailable, the thread waiting for the resource sleeps (context switches) until available. Ideal for preventing race conditions. Disadvantage: context switch overhead.</li>
								<li><Accent>Semaphore</Accent> - more general, acts as a signaling mechanism. Mentains a counter to control access to a limited number of resources. Binary semaphore (0/1, like mutex), counting semaphore (value {`>`} 1, allows up to N threads to access a resource simultaneously, for managing a pool of database connections).</li>
								<li><Accent>Spinlock</Accent> - low-level synchronisation mechanism where a thread busy-waits (spins in a loop) continuously checking if a lock is available. Typically used in interrupt context or multi-core systems where sleeping is not allowed, in kernel code, real-time embedded systems.</li>
							</ul>
							<table style={{border: "1px solid black"}}>
								<tr>
									<th>Feature</th>
									<th>Mutex</th>
									<th>Semaphore</th>
									<th>Spinlock</th>
								</tr>
								<tr>
									<td>Waiting Type</td>
									<td>Sleeps (non-blocking)</td>
									<td>Sleeps (non-blocking)</td>
									<td>Busy-wait (blocking)</td>
								</tr>
								<tr>
									<td>CPU Usage</td>
									<td>Low</td>
									<td>Low</td>
									<td>High</td>
								</tr>
								<tr>
									<td>Use Case</td>
									<td>Mutual exclusion (one thread at a time)</td>
									<td>Resource counting or signalling</td>
									<td>Short critical sections, interrupt handlers</td>
								</tr>
								<tr>
									<td>Interrupt Safety</td>
									<td>Not safe</td>
									<td>Not safe</td>
									<td>Safe</td>
								</tr>
							</table>
						</div>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-17">
							What other synchronisation primitives are there? How do they work?
						</span>
						<ul className="collapse" id="collapse-17">
							<li><Accent>Condition variable</Accent>: allows threads to wait for a specific condition to become true, often used with a mutex. Supports wait() and signal()/broadcast() to coordinate thread execution.</li>
							<li><Accent>Barrier</Accent>: synchronises a fixed group of threads at a specific point, ensuring all reach the barrier before any proceed.</li>
							<li><Accent>Read-Write lock</Accent></li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-18">
							Inter-Process Communication examples.
						</span>
						<ul className="collapse" id="collapse-18">
							<li><Accent>Inter-Process Communication</Accent> enables processes to exchange data and synchronise actions.</li>
							<li>Shared memory, message passing, sockets, pipes, signals, semaphores and mutexes, files and memory-mapped files, remote procedure calls.</li>
							<li>Used for high-speed communication, data channels, notifying processes of events, networking etc.</li>
							<li>These mechanisms are foundational in OS, distributed systems and modern application frameworks.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-19">
							Unit testing vs integration testing, any other examples of testing.
						</span>
						<ul className="collapse" id="collapse-19">
							<li><Accent>Unit testing</Accent> - focuses on verifying the behavior of individual code units (functions, methods, classes) in isolation - White box testing, the developer has full access to the internal code structure.</li>
							<li><Accent>Integration testing</Accent> - evaluates how multiple units or modules work together in a combined environment. Uncovers issues in interactions, data flow and interfaces - Black/Grey box testing.</li>
							<li><Accent>Functional tests</Accent> - e2e user flows, validates the system against business requirements.</li>
							<li><Accent>Smoke tests</Accent> - verify that the most critical functionalities of a new software build are working correctly before proceeding with more in-depth testing - sanity testing.</li>
							<li><Accent>Regression testing</Accent> - ensures new code changes do not break existing features.</li>
							<li>Others: performance testing, security testing, usability testing, acceptance testing.</li>
						</ul>
					</li>
					<li>
						<span className="QA-collapse-header" data-bs-toggle="collapse" data-bs-target="#collapse-20">
							Examples of design patters and their description.
						</span>
						<ul className="collapse" id="collapse-20">
							<li>Software design patterns are <Accent>reusable, proven solutions to common problems</Accent> that arise during software design. They provide templates or guidelines that describe HOW to solve a specific design issue in a flexible and efficient way. They help developers create <Accent>more maintainable, scalable and readable code</Accent> by promoting best practices in obiect-oriented programming.</li>
							<li>Types of design patterns: <Accent>creational</Accent> (object creation mechanisms), <Accent>structural</Accent> (class and object composition - flexible and efficient structure), <Accent>behavioral</Accent> (communication and interaction between objects)</li>
							<li>Formalised in the book <Accent>Design Patterns: Elements of Reusable Object-Oriented Software</Accent></li>
							<li>Creational Patterns:
								<ul>
									<li><Accent>Singleton</Accent>: a class has only one instance and provides a global point of access to it. Useful for managing shared resources like configuration settings.</li>
									<li><Accent>Factory Method</Accent>: defines an interface for creating an object, but lets subclasses decide which class to instantiate. Promotes flexibility.</li>
									<li><Accent>Abstract Factory</Accent>: provides an interface for creating families of related or dependent objects without specifying concrete classes. Ideal for creating UI components that adapt to different platforms.</li>
									<li><Accent>Builder</Accent>: separates the construction of a complex object from its representation, the same construction process can create various representation. Example: meal in a restaurant.</li>
									<li><Accent>Prototype</Accent>: specifies the kinds of objects to create using a prototypical instance, creates new objects by copying this prototype. Enhances performance by avoiding expensive instantiations.</li>
								</ul>
							</li>
							<li>Structural Patterns:
								<ul>
									<li><Accent>Proxy</Accent>: provides a surrogate or placeholder for another object to control access to it. Commonly used for lazy loading, access control, logging.</li>
									<li><Accent>Decorator</Accent>: attaches additional responsibilities to an object dynamically, keeping the same interface. Alternative to subclassing for extending functionality.</li>
									<li><Accent>Facade</Accent>: provides a unified interface to a set of interfaces in a subsystem, simplifying the use of complex systems.</li>
								</ul>
							</li>
							<li>Behavioral Patterns:
								<ul>
									<li><Accent>Iterator</Accent>: provides a way to access the elements of an aggregate of an object sequentially without exposing the underlying representation.</li>
									<li><Accent>Observer</Accent>: defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. Commonly used in event handling systems.</li>
									<li><Accent>Visitor</Accent>: represents an operation to be performed on the elements of an object structure, allowing new operations to be defined without changing the classes of the elements.</li>
								</ul>
							</li>
						</ul>
					</li>
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