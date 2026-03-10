import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function ArraysStrings() {
	const [toggle, setToggle] = useState(false);
    const js = `let bingo = Array(5);
bingo.push(10);    // [10]
bingo.push(5);     // [10, 5]
bingo.unshift(3);  // [3, 10, 5]
bingo.pop();       // [3, 10]
bingo.shift();     // [10]

let ages = [49, 48, 26, 19, 16];
ages.splice(2, 2); // returns [26, 19]; ages = [49, 48, 16]

let str = new String();
str = "abc";
let otherStr = "test";`;
    const java = `int[] bingo = Array(5);  // undefined initial values

int[] ages = {49, 48, 26, 19, 16};

String str;
str = "abc";

// Dynamic array
import java.util.ArrayList;

ArrayList<String> cars = new ArrayList<String>();
cars.add("Ford");
cars.add(0, "BMW");
cars.set(1, "VW");
cars.remove(0);
cars.clear();
cars.size();`;
    const cpp = `#include <array>
std::array<int, 5> arr = {1, 2, 3};

#include <string>
std::string str;
str = "abc";

// Dynamic array
#include <vector>
std::vector<int> numbers = {1, 2, 3, 4, 5};
numbers.push_back(6);
numbers.resize(10); // default-initialize new elements`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Arrays and Strings"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>An <Accent>array</Accent> is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key.</p>
					<p>Depending on the programming language, an uninitialized array may contain default values, or it may contain whatever values were left in memory from previous allocation.</p>
					<p><Accent>Strings</Accent> are basically a single dimension array of characters. String operations are language specific but the usual ones are: finding the length of a string, retrieve a specific character, test for substring, find the position of a substring in the string, extract substring from string, change cases, replace.</p>
					<p className="card-section">Dynamic Array</p>
					<p>A dynamic array is a random access, variable-size list data structure that allows elements to be added or removed. It is supplied with standard libraries in many modern programming languages. Dynamic arrays overcome a limit of static arrays, which have a fixed capacity that needs to be specified at allocation.</p>
					<br />
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Dynamic_array.svg/500px-Dynamic_array.svg.png" className="w-25" />
					
					<p className="card-section">JavaScript</p>
					<SyntaxHighlighter language="javascript">{js}</SyntaxHighlighter>

					<div className="row">
						<div className="col-6">
							<p className="card-section">Java</p>
							<SyntaxHighlighter language="java">{java}</SyntaxHighlighter>
						</div>
						<div className="col-6">
							<p className="card-section">C++</p>
							<SyntaxHighlighter language="cpp">{cpp}</SyntaxHighlighter>
						</div>
					</div>
				</>
			}
		</div>
	);
}