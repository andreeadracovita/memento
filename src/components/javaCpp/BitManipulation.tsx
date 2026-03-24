import { useState } from "react";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function BitManipulation() {
	const [toggle, setToggle] = useState(false);

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
					<div>
						<h2 className="card-section">Java</h2>
						<ul>
							<li><Accent>Integer Size and Signedness</Accent>: Java specifies fixed sizes for int (32-bit signed) and long (64-bit signed).</li>
							<li><Accent>Right-Shift Operators</Accent>: Java defines {`>>`} as an arithmetic shift (sign-extending) and {`>>>`} as a logical shift (zero-filling).</li>
							<li><Accent>Undefined vs. Defined Behavior</Accent>: For bitwise operations, Java mandates two's complement representation, ensuring consistent results across platforms.</li>
						</ul>
					</div>
					<hr />
					<div>
						<div>
							<h2 className="card-section">C++</h2>
							<ul>
								<li><Accent>Integer Size and Signedness</Accent>: Integer size depends on the compiler and platform.</li>
								<li><Accent>Right-Shift Operators</Accent>: The behavior of {`>>`} on signed integers is implementation-defined, it can be arithmetic or logical depeneding on the compiler. Can produce different results to Java when shifting negative numbers.</li>
								<li><Accent>Undefined vs. Defined Behavior</Accent>: Allows undefined behavior in cases like i++ + i++. C++ does not guarantee consistent results across platforms.</li>
							</ul>
						</div>
					</div>
				</>
			}
		</div>
	);
}