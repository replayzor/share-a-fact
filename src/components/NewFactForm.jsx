import { useState } from "react";
import CATEGORIES from "../data";

function NewFactForm() {
	const [text, setText] = useState("");
	const [source, setSource] = useState("");
	const [category, setCategory] = useState("");
	const textLength = text.length;

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(text, source, category);
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
