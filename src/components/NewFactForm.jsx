import { useState } from "react";
import CATEGORIES from "../data";

function NewFactForm({ setFacts, setShowForm }) {
	const [text, setText] = useState("");
	const [source, setSource] = useState("http://example.com");
	const [category, setCategory] = useState("");
	const textLength = text.length;

	const isValidHttpUrl = (string) => {
		let url;
		try {
			url = new URL(string);
		} catch (_) {
			return false;
		}
		return url.protocol === "http:" || url.protocol === "https:";
	};

	const handleSubmit = (e) => {
		// 1. Prevent browser reload
		e.preventDefault();
		console.log(text, source, category);

		// 2. Check if data is valid. If so create a new fact
		if (text && isValidHttpUrl(source) && category && textLength <= 200) {
			console.log("this is valid data");

			// 3. Create a new fact object
			const newFact = {
				id: Math.round(Math.random() * 1000000),
				text,
				source,
				category,
				votesInteresting: 0,
				votesMindblowing: 0,
				votesFalse: 0,
				createdIn: new Date().getFullYear(),
			};
			// 4. Add the new fac to the UI: add the fact to state
			setFacts((currentFacts) => [newFact, ...currentFacts]);
			// 5. Reset input fields
			setText("");
			setSource("");
			setCategory("");
			// 6. Close the form
			setShowForm(false);
		}
	};

	return (
		<form className="fact-form" onSubmit={handleSubmit}>
			{" "}
			<input
				onChange={(e) => setText(e.target.value)}
				type="text"
				value={text}
				placeholder="Share a fact with the world..."
			/>
			<span>{200 - textLength}</span>
			<input
				onChange={(e) => setSource(e.target.value)}
				value={source}
				type="text"
				placeholder="Trustworthy source..."
			/>
			<select value={category} onChange={(e) => setCategory(e.target.value)}>
				<option value="">Choose category:</option>
				{CATEGORIES.map((cat) => (
					<option key={cat.name} value={cat.name}>
						{cat.name.toUpperCase()}
					</option>
				))}
			</select>
			<button className="btn btn-large">Post</button>
		</form>
	);
}

export default NewFactForm;
