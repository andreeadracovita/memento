import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

// import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function DataStructures() {
	const [toggle, setToggle] = useState(false);
	const javaCode = `// Arrays
import java.util.Arrays;
...
int[] numbers = {5, 2, 8, 1};
Arrays.sort(numbers);
System.out.println(Arrays.toString(numbers)); // [1, 2, 5, 8]
int index = Arrays.binarySearch(numbers, 5); // 2
Arrays.fill(numbers, 0); // [0, 0, 0, 0]

// Strings
import java.lang.String;
...
char[] chars = {'h', 'e', 'l', 'l', 'o'};
String fromArray = new String(chars);
int num = 42;
String numStr = String.valueOf(num);

String string = "  Hello World  ";
System.out.println(str.length());        // 15
System.out.println(str.charAt(6));       // o
System.out.println(str.toLowerCase());   //   hello world  
System.out.println(str.toUpperCase());   //   HELLO WORLD  
System.out.println(str.trim());          // Hello World
System.out.println(str.substring(2, 7)); // Hello

String s1 = "Java";
String s2 = "java";
System.out.println(s1.equals(s2));             // false
System.out.println(s1.equalsIgnoreCase(s2));   // true
System.out.println(s1.compareTo(s2));          // negative value (lexicographic)
System.out.println(s1.indexOf("va"));          // 2
System.out.println(s1.startsWith("Ja"));       // true
System.out.println(s1.endsWith("va"));         // true

String sentence = "apple,banana,grape";
String[] fruits = sentence.split(",");
for (String fruit : fruits) {
	System.out.println(fruit);  // apple, banana, grape
}

// Linked Lists - doubly-linked structure
import java.util.LinkedList;

LinkedList<String> list = new LinkedList<>();
list.add("Apple");
list.addFirst("Banana");
list.addLast("Broccoli")
System.out.println(list.pollLast()); // Broccoli
System.out.println(list.size()); // 3
// has push(), pop() operations too

// Stack - extends Vector, dynamically resizing array internally
// While Stack is part of the std library, it is considered legacy and syncronized -> overhead for single-thread
// Can use Dequeue for better performance
import java.util.Stack;

Stack<String> stack = new Stack<>();
stack.push("Apple");
stack.push("Banana");
stack.push("Cherry");
System.out.println("Stack: " + stack); // [Apple, Banana, Cherry]
System.out.println("Is stack empty? " + stack.isEmpty()); // false
int position = stack.search("Apple");
System.out.println("Position of 'Apple': " + position);

//---------------------
import java.util.Deque;
import java.util.ArrayDeque;

Deque<Integer> stackDeq = new ArrayDeque<>();
stackDeq.push(1);
stackDeq.push(2);
stackDeq.push(3);
System.out.println("Stack: " + stack); // Stack: [3, 2, 1]
System.out.println("Popped: " + stack.pop()); // Popped: 3
System.out.println("After pop: " + stack);   // After pop: [20, 10]

// Queue
import java.util.Queue;
import java.util.LinkedList;

Queue<Integer> queue = new LinkedList<>();
queue.offer(10);
queue.offer(20);
queue.offer(30);
System.out.println("Queue: " + queue); // Output: [10, 20, 30]
System.out.println("Head (peek): " + queue.peek()); // Output: 10
System.out.println("Removed (poll): " + queue.poll()); // Output: 10
System.out.println("Size: " + queue.size()); // Output: 2
System.out.println("Is empty? " + queue.isEmpty()); // Output: false

//---------------------
import java.util.PriorityQueue;
Queue<Integer> priorityQueue = new PriorityQueue<>();
priorityQueue.offer(5);
priorityQueue.offer(1);
priorityQueue.offer(3);
System.out.println("Priority Queue: " + priorityQueue); // Output: [1, 3, 5]
while (!priorityQueue.isEmpty()) {
    System.out.println("Poll: " + priorityQueue.poll());
}

// Trees - TreeMap, TreeSet (backed by TreeMap) implement balanced binary search trees (red-black trees)
// Key-value pairs vs unique elements
import java.util.TreeMap;
TreeMap<String, Integer> map = new TreeMap<>();
map.put("banana", 3);
map.put("apple", 1);
map.put("cherry", 2);
System.out.println("Sorted keys: " + map.keySet()); // apple, banana, cherry
System.out.println("Value for 'apple': " + map.get("apple"));
System.out.println("First key: " + map.firstKey());     // apple
System.out.println("Last key: " + map.lastKey());       // cherry
// Submap: keys from "banana" (inclusive) to "cherry" (exclusive)
System.out.println("Submap: " + map.subMap("banana", "cherry"));

//---------------------
import java.util.TreeSet;
TreeSet<Integer> set = new TreeSet<>();
set.add(5);
set.add(2);
set.add(8);
set.add(1);
System.out.println("Sorted set: " + set); // [1, 2, 5, 8]
// Find ceiling (least >= value)
System.out.println("Ceiling of 3: " + set.ceiling(3)); // 5
// Find floor (greatest <= value)
System.out.println("Floor of 3: " + set.floor(3));   // 2
System.out.println("Removed first: " + set.pollFirst()); // 1
System.out.println("Remaining: " + set); // [2, 5, 8]

// Graphs - not included in standard library
// Use ArrayList, HashMap, LinkedList
// Example: Map<Integer, List<Integer>> to store vertices and their connecting neighbors

// Hash Tables
import java.util.Hashtable;
Hashtable<String, Integer> numbers = new Hashtable<>();
numbers.put("one", 1);
numbers.put("two", 2);
numbers.put("three", 3);
Integer value = numbers.get("two");
System.out.println("Value for 'two': " + value); // Output: 2
if (numbers.containsKey("one")) {
    System.out.println("Key 'one' exists.");
}
numbers.remove("three");
System.out.println("Final map: " + numbers);

// Map
import java.util.Map;
import java.util.HashMap;
Map<String, Integer> ages = new HashMap<>();
ages.put("Alice", 25);
ages.put("Bob", 30);
ages.put("Eve", 22);
System.out.println("Alice's age: " + ages.get("Alice")); // Output: 25
System.out.println(ages.containsKey("Bob")); // true
System.out.println("Charlie's age: " + ages.getOrDefault("Charlie", 0)); // Output: 0
for (Map.Entry<String, Integer> entry : ages.entrySet()) {
    System.out.println(entry.getKey() + " -> " + entry.getValue());
}

// Set - LinkedHashSet insertion order, TreeSet sorted order
import java.util.Set;
import java.util.HashSet;
Set<String> fruits = new HashSet<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Apple"); // Duplicate - ignored
System.out.println(fruits.contains("Banana")); // true
fruits.remove("Apple");
System.out.println(fruits); // Output: [Banana]
System.out.println("Size: " + fruits.size()); // Size: 1`;

	const cppCode = `// Arrays
#include <array>
#include <iostream>
std::array<int, 4> numbers = {10, 20, 30, 40};
std::cout << "Size: " << numbers.size() << std::endl;
std::cout << "Front: " << numbers.front() << std::endl;
std::cout << "Back: " << numbers.back() << std::endl;
std::cout << "Element at index 2: " << numbers.at(2) << std::endl;

// Strings
#include <string>
#include <iostream>
std::string greeting = "Hello, World!";
std::cout << "Length: " << greeting.length() << std::endl; // Output: 13
std::cout << "Substring: " << greeting.substr(0, 5) << std::endl; // Output: Hello
greeting += " How are you?";
std::cout << "Updated: " << greeting << std::endl; // Output: Hello, World! How are you?
std::string another = "Hello, World!";
if (greeting == another) {
    std::cout << "Strings are equal." << std::endl;
}

// Linked Lists
#include <list>
#include <iostream>
std::list<int> fibo = {0, 1, 1, 2, 3, 5, 8};
fibo.push_front(0);
fibo.remove(1);
auto it = fibo.begin();
++it;
fibo.insert(it, 1);
fibo.reverse();
for (int n : fibo) {
    std::cout << n << ' ';
}
// Output: 8 5 3 2 1 0

// Stack - uses std::deque as the underlying container
// Can change it to std::list or std::vector
// Example: std::stack<int, std::list<int>> s;
#include <iostream>
#include <stack>
std::stack<int> s;
s.push(10);
s.push(20);
s.push(30);
std::cout << "Top element: " << s.top() << std::endl; // Output: 30
std::cout << "Stack size: " << s.size() << std::endl;   // Output: 3
s.pop();
std::cout << "After pop, top: " << s.top() << std::endl; // Output: 20
std::cout << "Is stack empty?" << s.empty() << std::endl; // Output: false

// Queue
#include <iostream>
#include <queue>
std::queue<int> q;
q.push(10);
q.push(20);
q.push(30);
std::cout << "Front: " << q.front() << std::endl;  // Output: 10
std::cout << "Back: " << q.back() << std::endl;    // Output: 30
q.pop();
std::cout << "Size: " << q.size() << std::endl;    // Output: 2
while (!q.empty()) {
    std::cout << q.front() << " ";
    q.pop();
}
// Output: 20 30

// Trees - C++ Standard Library does not include a tree container.
// Several associative containers are implemented using binary search trees (Red-black trees)
// providing ordered, efficient insertion, deletion, and lookup operations
// Examples: std::set, std::map, std::multiset, std::multimap

// Graphs - use other data structures for adjacency

// Hash Tables - std::unordered_map, std::unordered_set
// average O(1) time complexity for insertion, lookup, deletion
#include <iostream>
#include <unordered_map>
#include <string>
std::unordered_map<std::string, int> scores;
scores["Alice"] = 95;
scores["Bob"] = 89;
scores["Charlie"] = 92;
std::cout << "Bob's score: " << scores["Bob"] << std::endl;
if (scores.find("Dave") == scores.end()) {
    std::cout << "Dave's score not found" << std::endl;
}
std::cout << "All scores:" << std::endl;
for (const auto& [name, score] : scores) {
    std::cout << name << ": " << score << std::endl;
}
std::cout << "Hash table statistics:" << std::endl;
std::cout << "Number of buckets: " << scores.bucket_count() << std::endl;
std::cout << "Load factor: " << scores.load_factor() << std::endl;

// Map - can use std::unordered_map (hash table) or std::map (red-black tree), difference in
// underlying structure, ordering, performance.
// std::map used for ordered iterations, std::unordered_map used for fast lookups,
// high-frequency insertions/deletions, large datasets where order doesn't matter.
#include <iostream>
#include <map>
#include <string>
std::map<std::string, int> studentGrades;
studentGrades.insert(std::make_pair("Alice", 95));
studentGrades.insert({"Bob", 87});
studentGrades["Charlie"] = 92;
for (const auto& pair : studentGrades) {
    std::cout << pair.first << ": " << pair.second << std::endl;
}
studentGrades.erase("Bob"); // Returns the number of elements erased 1

// Set
#include <iostream>
#include <set>
std::set<int> mySet;
mySet.insert(5);
mySet.insert(2);
mySet.insert(8);
mySet.insert(2); // Duplicate — ignored
std::cout << "Set elements: ";
for (const int& elem : mySet) {
    std::cout << elem << " "; // Output elements (sorted: 2, 5, 8)
}
if (mySet.find(5) != mySet.end()) {
    std::cout << "5 is in the set.";
}
mySet.erase(2);`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Data Structures: Standard Library"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<div>
						<h2 className="card-section">Java</h2>
						<SyntaxHighlighter language="java">{javaCode}</SyntaxHighlighter>
					</div>
					<hr />
					<div>
						<div>
							<h2 className="card-section">C++</h2>
							<SyntaxHighlighter language="cpp">{cppCode}</SyntaxHighlighter>
						</div>
					</div>
				</>
			}
		</div>
	);
}