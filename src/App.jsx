import { useState } from "react";

// components
import CategoryFilter from "./components/CategoryFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FacList";
import Header from "./components/Header";

const initialFacts = [
	{
		id: 1,
		text: "React is being developed by Meta (formerly Facebook)",
		source: "https://opensource.fb.com/",
		category: "technology",
		votesInteresting: 24,
		votesMindblowing: 9,
		votesFalse: 4,
		createdIn: 2021,
	},
	{
		id: 2,
		text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
		source:
			"https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
		category: "society",
		votesInteresting: 11,
		votesMindblowing: 2,
		votesFalse: 0,
		createdIn: 2019,
	},
	{
		id: 3,
		text: "Lisbon is the capital of Portugal",
		source: "https://en.wikipedia.org/wiki/Lisbon",
		category: "society",
		votesInteresting: 8,
		votesMindblowing: 3,
		votesFalse: 1,
		createdIn: 2015,
	},
];

function App() {
	const [showForm, setShowForm] = useState(false);
	const [facts, showFacts] = useState(initialFacts);

	const clickFormHandler = () => {
		setShowForm((show) => !show);
	};

	return (
		<>
			<Header onClickForm={clickFormHandler} showForm={showForm} />
			{showForm ? (
				<NewFactForm showFacts={showFacts} setShowForm={setShowForm} />
			) : null}

			<main className="main">
				<CategoryFilter />
				<FactList facts={facts} />
			</main>
		</>
	);
}

export default App;
