import { useState } from "react";

// components
import CategoryFilter from "./components/CategoryFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FacList";
import Header from "./components/Header";

function App() {
	const [showForm, setShowForm] = useState(false);

	const clickFormHandler = () => {
		setShowForm((show) => !show);
	};

	return (
		<>
			<Header onClickForm={clickFormHandler} showForm={showForm} />
			{showForm ? <NewFactForm /> : null}

			<main className="main">
				<CategoryFilter />
				<FactList />
			</main>
		</>
	);
}

export default App;
