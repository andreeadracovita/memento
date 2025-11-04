import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function ObjectOriented() {
	const [toggle, setToggle] = useState(false);
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
		<div className="grey-card">
			<CardHeader
				title={"Object-Oriented Design"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>1. Handle Ambiguity - top Questions: who, what, where, when, how, why.</p>
					<p>2. Define the Core Objects</p>
					<p>3. Analyze Relationships</p>
					<p>4. Investigate Actions</p>

					<p className="card-section">Design Patters</p>
					<p><strong>Singleton Class</strong></p>
					<pre>{singleton}</pre>
					<p><strong>Factory Method</strong></p>
					<pre>{factory}</pre>
				</>
			}
		</div>
	);
}