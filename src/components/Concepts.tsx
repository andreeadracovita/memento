export default function Concepts() {
	const bitExercises = `0110 + 0010     0011 * 0101     0110 + 0110
0011 + 0010     0011 * 0011     0100 * 0011	
0110 - 0011     1101 >> 2       1101 ^ (~1101)
1000 - 0110     1101 ^ 0101     1011 & (~0 << 2)`;
	const bitFactsTricks = `x ^ 0s = x      x & 0s = 0s    x | 0s = x
x ^ 1s = ~x     x & 1s = x     x | 1s = 1s
x ^ x = 0s      x & x = x      x | x = x`;
	const bitTasks = `// Get Bit
bool getBit(int num, int i) {
	return ((num & (1 << i)) != 0);
}

// Set bit
int setBit(int num, int i) {
	return num | (1 << i);
}

// Clear bit
int clearBit(int num, int i) {
	int mask = ~ (1 << i);
	return num & mask;
}

// Update bit
int updateBit(int num, int i, bool bitIs1) {
	int value = bitIs1 ? 1 : 0;
	int mask = ~ (1 << i);
	return (num & mask) | (value << i);
}`;
	const singleton = `public class Restaurant {
	private static Restaurant _instance = null;
	protected Restaurant() { ... }
	public static Restaurant getInstance() {
		if (_instance == null) {
			_instance = new Restaurant();
		}
		return _instance;
	}
}`;
	const factory = `public class CardGame {
	public static CardGame createCardGame(GameType type) {
		if (type == GameType.Poker) {
			return new PokerGame();
		} else if (type == GameType.BlackJack) {
			return new BlackJackGame();
		}
		return null;
	}
}`;

	return (
		<>
			<h1 className="archivo-black-regular">Concepts</h1>

			<div className="grey-card">
				<p className="card-title">Bit Manipulation</p>
				<p>Rusty? Some exercises:</p>
				<pre>{bitExercises}</pre>
				<p className="card-section"><strong>Tricks</strong></p>
				<ul>
					<li>0110 + 0110 = 2 * 0110 = 0110 &lt; &lt; 1</li>
					<li>0100 * 0011 = 4 * 0011 = 0011 &lt; &lt; 2</li>
					<li>1101 ^ (~1101), a^(~a) = 1s</li>
					<li>~0 = 1111, 1111 &lt; &lt; 2 = 1100, 1011 & 1100 = 1000</li>
				</ul>

				<pre>{bitFactsTricks}</pre>

				<p className="card-section">Two's Complement</p>
				<p>Computers typically store integers in two's complement representation. A negative number is represented as the two's complement of its absolute value (with a 1 in its sign bit, representing it's negative).</p>
				<p>Example: -3 represented in 4-bits. 1 bit for the sign, 3 for the value. Reference 2<sup>3</sup>. What is the complement of 3 with respect to 2<sup>3</sup>? 5 = 101. So -3 = 1 101.</p>

				<p className="card-section">Arithmetic vs. Logical Right Shift</p>
				<ul>
					<li>Arithmetic right shift: divides by 2</li>
					<li>Logical right shift: shifting bits, on a negative number, it loses the sign bit.</li>
				</ul>

				<p className="card-section">Common Bit Tasks: Get, Set, Clear, Update</p>
				<pre>{bitTasks}</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">Memory (Stack vs. Heap)</p>
				<p><strong>Heap memory</strong> is a region of a computer's memory used for dynamic memory allocation, allowing programs to request and release memory blocks during runtime as needed. Unlike <strong>stack memory</strong>, which has a fixed size and follows a last-in, first-out (LIFO) order, heap memory provides greater flexibility for allocating data whose size is unknown at compile time or may change during execution, such as <strong>dynamically sized arrays, linked lists, or objects in object-oriented programming</strong>.</p>
				<p>Memory on the heap is typically managed manually using functions like <strong>malloc</strong> or <strong>new</strong> in C/C++, or automatically via <strong>garbage collection</strong> in languages like Java and Python.</p>
				<p>This flexibility comes with responsibility, as failure to explicitly deallocate memory can lead to <strong>memory leaks</strong>, where allocated memory is not freed and eventually exhausts available resources.</p>
			</div>

			<div className="grey-card">
				<p className="card-title">Object-Oriented Design</p>
				<p>1. Handle Ambiguity - top Questions: who, what, where, when, how, why.</p>
				<p>2. Define the Core Objects</p>
				<p>3. Analyze Relationships</p>
				<p>4. Investigate Actions</p>

				<p className="card-section">Design Patters</p>
				<p><strong>Singleton Class</strong></p>
				<pre>{singleton}</pre>
				<p><strong>Factory Method</strong></p>
				<pre>{factory}</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">System Design and Scalability</p>
				<pre>TODO pg 140</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">Testing</p>
				<pre>TODO</pre>
			</div>
		</>
	);
}