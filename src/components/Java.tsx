export default function Java() {
	const stackArray = `class myStack {

    // array to store elements
    private int[] arr;

    // maximum size of stack
    private int capacity;

    // index of top element
    private int top;

    // constructor
    public myStack(int cap) {
        capacity = cap;
        arr = new int[capacity];
        top = -1;
    }
}`;
	const stackList = `/* Node structure */
class Node {
    public int data;
    public Node next;

    public Node(int x) {
        data = x;
        next = null;
    }
}

/* Stack class */
class MyStack {

    // pointer to top node
    private Node top;

    public MyStack() {
        // initially stack is empty
        top = null;
    }
}`;

	return (
		<>
			<h1 className="archivo-black-regular">Java</h1>

		</>
	);
}