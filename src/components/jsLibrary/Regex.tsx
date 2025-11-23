import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Regex() {
	const [toggle, setToggle] = useState(false);
	const code = `/^HTML/;             // Match the letters H T M L at the start of a string
/[1-9][0-9]*/;       // Match a nonzero digit, followed by any # of digits
/\\bjavascript\\b/i;   // Match "javascript" as a word, case-insensitive

let text = "testing: 1, 2, 3";   // Sample text
let pattern = /\\d+/g;            // Matches all instances of one or more digits
pattern.test(text)               // => true: a match exists
text.search(pattern)             // => 9: position of first match
text.match(pattern)              // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#")       // => "testing: #, #, #"
text.split(/\\D+/)                // => ["","1","2","3"]: split on nondigits`;
	const defRegExp1Code = `let pattern = /s$/;   // any string that ends with letter s
let pattern = new RegExp("s$");
let pattern = /s$/i;  // any string that ends in letter s or S (case-insensitive)`;
	const defRegExp2Code = `let r = /\\d{2,4}/; // Match between two and four digits
r = /\\w{3}\\d?/;    // Match exactly three word characters and an optional digit
r = /\\s+java\\s+/;  // Match "java" with one or more spaces before and after
r = /[^(]*/;       // Match zero or more characters that are not open parens
`;
	const searchCode = `"JavaScript".search(/script/ui)  // => 4
"Python".search(/script/ui)      // => -1`;
	const replaceCode = `// No matter how it is capitalized, replace it with the correct capitalization
text.replace(/javascript/gi, "JavaScript");

// A quote is a quotation mark, followed by any number of
// nonquotation mark characters (which we capture), followed
// by another quotation mark.
let quote = /"([^"]*)"/g;
// Replace the straight quotation marks with guillemets
// leaving the quoted text (stored in $1) unchanged.
'He said "stop"'.replace(quote, '«$1»')  // => 'He said «stop»'

let quote = /"(?<quotedText>[^"]*)"/g;
'He said "stop"'.replace(quote, '«$<quotedText>»')  // => 'He said «stop»'`;
	const matchCode = `"7 plus 8 equals 15".match(/\d+/g)  // => ["7", "8", "15"]`;
	const matchAllCode = ``;
	const splitCode = ``;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Regular Expression"}
				link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>A regular expression is an object that describes a textual pattern. The JavaScript RegExp class represents regular expressions, and both String and RegExp define methods that use regular expressions to perform powerful pattern-matching and search-and-replace functions on text.</p>
					{/*<pre>{code}</pre>*/}

					<p className="card-section">Defining regular expressions</p>
					<div className="code"><pre>{defRegExp1Code}</pre></div>
					<ul>
						<li>Regular expression literals are specified as characters within a pair of slash (<code>/</code>) characters.</li>
						<li>All alphabetic characters and digits match themselves literally.</li>
						<li>
							Support for nonalphabetic characters through escape sequences that begin with backslash (<code>\</code>).
							<ul>
								<li><code>\0</code> - NUL character</li>
								<li><code>\t</code> - Tab</li>
								<li><code>\n</code> - Newline</li>
								<li><code>\v</code> - Vertical Tab</li>
								<li><code>\f</code> - Form feed</li>
								<li><code>\r</code> - Carriage return</li>
								<li><code>\xnn</code> - The Latin character specified by the hexadecimal number nn;</li>
								<li><code>\uxxxx</code> - The unicode character specified by the hexadecimal number xxxx, for example <code>\u0009</code> = <code>\t</code></li>
								<li><code>{`\\u{n}`}</code> - Unicode character specified by the codepoint n, where n is one to six hexadecimal digits between 0 and 10FFFF.</li>
								<li><code>\cX</code> - The control character ^X, example: \cJ = <code>\n</code></li>
							</ul>
						</li>
						<li>
							Punctuation characters that have special meaning in regular expressions:<br />
							<code>{`^ $ . * + ? = ! : | \\ / ( ) [ ] { }`}</code><br />
							If any of those characters will be included literally, precede them with a <code>\</code>.
						</li>
						<li>Individual literal characters can be combined into character classes by placing them within square brackets: <code>/[abc]/</code>, <code>/[a-z]/</code>, <code>/[a-zA-Z0-9]/</code>.</li>
						<li>
							Regular expression character classes
							<ul>
								<li><code>[...]</code> - Any one character between the brackets.</li>
								<li><code>[^...]</code> - Any one character not between the brackets.</li>
								<li><code>.</code> - Any character except newline or another Unicode line terminator</li>
								<li><code>\w</code> - Any ASCII word character.</li>
								<li><code>\W</code> - Any character that is not an ASCII word character.</li>
								<li><code>\s</code> - Any Unicode white character.</li>
								<li><code>\S</code> - Any character that is not Unicode whitespace.</li>
								<li><code>\d</code> - Any ASCII digit.</li>
								<li><code>\D</code> - Any character other than an ASCII digit. Equivalent to <code>[^0-9]</code></li>
								<li><code>[\b]</code> - A literal backspace (special case).</li>
							</ul>
						</li>
						<li>
							Repetition
							<ul>
								<li><code>{`\{n,m\}`}</code> - Matches the previous item at least n times but no more than m times.</li>
								<li><code>{`\{n,\}`}</code> - Matches the previous item n or more times.</li>
								<li><code>{`\{n\}`}</code> - Matches exactly n occurences of the previous item.</li>
								<li><code>?</code> - Match zero or one occurrences of the previous item.</li>
								<li><code>+</code> - Match one or more occurrences of the previous item.</li>
								<li><code>*</code> - Match zero or more occurences of the previous item.</li>
							</ul>
						</li>
						<li>
							Non-greedy repetition - matches as few occurrences as necessary <code>/a+?/</code> matches only the first letter a in "aaa".
						</li>
					</ul>
					<div className="code"><pre>{defRegExp2Code}</pre></div>
					<ul>
						<li>
							Alternating, grouping and references
							<ul>
								<li><code>|</code> Alternation - <code>/ab|cd|ef/</code> matches "ab" or "cd" or "ef".</li>
								<li><code>(...)</code> Grouping - use parentheses to group separate items into a single subexpression so that the items can be treated as a single unit by <code>|</code>, <code>*</code>, <code>+</code>, <code>?</code> etc.<br />
									<code>(?:...)</code> - grouping only, do not remember the characters that match this group.</li>
								<li>
									References - <code>\1</code> refers back to the first subexpression. In nested subexpressions, it is the position of the left parenthese that is counted. Example: expression inside matching quote marks<br />
									<code>/(['"])[^'"]*\1/</code>
								</li>
							</ul>
						</li>
						<li><code>{`(?<...>`}</code> Naming groups. Lead with \k to backreference the named group. Example: <code>{`/(?<quote>['"])[^'"]*\k<quote>/`}</code></li>
						<li>
							Specifying match position
							<ul>
								<li><code>^</code> - Match the beginning of the string or, with the <code>m</code> flag, the beginning of the line.</li>
								<li><code>$</code> - Match the end of the string and, with the <code>m</code> flag, the end of a line.</li>
								<li><code>\b</code> - Match a word boundary. Match the position between a \w character and a \W character or between a \w character and the beginning or end of a string.</li>
								<li><code>\B</code> - Match a position that is not a word boundary.</li>
								<li><code>(?=p)</code> - A positive lookahead assertion. Require that the following characters match the pattern p, but do not include those characters in the match.</li>
								<li><code>(?!p)</code> - A negative lookahead assertion. Require that the following characters do not match the pattern p.</li>
							</ul>
						</li>
						<li>
							Flags - every regular expression can have one or more flags associated with it to alter its matching behavior. Flags are specified after the second <code>/</code> character of a regular expression literal or as a string passed as the second argument to the RegExp() constructor.
							<ul>
								<li><code>g</code> flag indicates that the regular expression is "global" - we intend to use it to find all matches within a string rather than just finding the first match.</li>
								<li><code>i</code> flag specifies that pattern matching should be case-insensitive.</li>
								<li><code>m</code> flag specifies that matching should be done in "multiline" mode. The RegExp will be used with multiline strings and that the ^ and $ anchors should match both the beginning and end of the string and also the beginning and end of individual lines within the string.</li>
								<li><code>s</code> flag is useful when working with text that includes newlines. Example: a "." in a regular expression matchs any character except a line terminator. When the s flag is used, however, "." will match any character, including line terminators.</li>
								<li><code>u</code> flag stands for Unicode and makes the regular exception match full Unicode codepoints rather than matching 16-bit values.</li>
								<li><code>y</code> flag indicates that the regular expression is "sticky" and should match at the beginning of a string or at the first character following the previous match.</li>
							</ul>
						</li>
					</ul>

					<p className="card-section">String methods for pattern matching</p>
					<p>Switching to cover the API for using RegExp objects.</p>
					<ul>
						<li>
							<strong>search()</strong> - return the character position of the start of the first match or -1 if no match. Does not support global searches, it ignores the g flag.
							<div className="code"><pre>{searchCode}</pre></div>
						</li>
						<li>
							<strong>replace()</strong> - search-and-replace operation. Regular expression as first parameter and a replacement string as its second argument. If g flag is set, replaces all matches in the string, otherwise, it replaces only the first match.
							<div className="code"><pre>{replaceCode}</pre></div>
						</li>
						<li>
							<strong>match()</strong> - takes a regular expression as its only argument and returns an array that contains the results of the match, or null if no match is found. If the regular expression has the g flag set, the method returns an array of all matches that appear in the string. If it does not have g flag, it returns the first match.
							<div className="code"><pre>{matchCode}</pre></div>
						</li>
						<li>
							<strong>matchAll()</strong>
							<div className="code"><pre>{matchAllCode}</pre></div>
						</li>
						<li>
							<strong>split()</strong>
							<div className="code"><pre>{splitCode}</pre></div>
						</li>
					</ul>

					<p className="card-section">The RegExp class</p>
				</>
			}
		</div>
	);
}