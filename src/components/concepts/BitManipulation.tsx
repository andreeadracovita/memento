import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function BitManipulation() {
	const [toggle, setToggle] = useState(false);
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

	return (
		<div className="grey-card">
			<CardHeader
				title={"Bit Manipulation"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
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
				</>
			}
		</div>
	);
}