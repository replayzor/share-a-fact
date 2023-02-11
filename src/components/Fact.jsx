import CATEGORIES from "../data";

const Fact = ({ fact }) => {
	const category = CATEGORIES.find((cat) => cat.name === fact.category);
	const color = category ? category.color : "#ffffff";

	return (
		<li key={fact.id} className="fact">
			<p>
				{fact.text}
				<a className="source" href={fact.source} target="_blank">
					(Source)
				</a>
			</p>
			<span className="tag" style={{ backgroundColor: color }}>
				{fact.category}
			</span>
			<div className="vote-buttons">
				<button>👍 {fact.votesInteresting}</button>
				<button>🤯 {fact.votesMindblowing}</button>
				<button>⛔️ {fact.votesFalse}</button>
			</div>
		</li>
	);
};

export default Fact;
