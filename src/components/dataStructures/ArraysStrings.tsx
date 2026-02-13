import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function ArraysStrings() {
	const [toggle, setToggle] = useState(false);
	const arrayData0 = `Language   Example
JS         var ages = [49, 48, 26, 19, 16];
Java       int[] ages = {49, 48, 26, 19, 16};
C++        int ages[] = {49, 48, 26, 19, 16};
`;
	const arrayData1 = `Language   Example                   Initial Values
JS         var ages = Array(5);      undefined
Java       int[] ages = new int[5];  0
C++        int ages[5];              undefined`;
	const stringData = `Language   Example
JS         var str = new String();
           str = "abc"
Java       String str;
           str = "abc";
C++        string str;
           str = "Hello";`;
    const dynamicArray = `
Language    Class               Add     Remove
C++         #include <list>     insert  erase
            std::list	
Java        java.util.ArrayList add     remove
JavaScript  Array               push,   pop,
                                splice  splice`;

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
					<p className="card-section">Defining an Array</p>
					<SyntaxHighlighter language="plaintext">{arrayData0}</SyntaxHighlighter>
					<p className="card-section">Defining of storage space</p>
					<SyntaxHighlighter language="plaintext">{arrayData1}</SyntaxHighlighter>
					<p className="card-section">Strings</p>
					<SyntaxHighlighter language="plaintext">{stringData}</SyntaxHighlighter>
					<p className="card-section">Dynamic Array</p>
					<p>A dynamic array is a random access, variable-size list data structure that allows elements to be added or removed. It is supplied with standard libraries in many modern programming languages. Dynamic arrays overcome a limit of static arrays, which have a fixed capacity that needs to be specified at allocation.</p>
					<SyntaxHighlighter language="plaintext">{dynamicArray}</SyntaxHighlighter>
					<br />
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Dynamic_array.svg/500px-Dynamic_array.svg.png" className="w-25" />
				</>
			}
		</div>
	);
}