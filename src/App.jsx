import { useState, useEffect } from "react";

// supabase
import supabase from "./supabase";

// components
import CategoryFilter from "./components/CategoryFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList";
import Header from "./components/Header";
import Loading from "./components/Loading";

function App() {
	const [showForm, setShowForm] = useState(false);
	const [facts, setFacts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [currentCategory, setCurrentCategory] = useState("all");

	useEffect(() => {
		const getFacts = async () => {
			setIsLoading(true);

			let query = supabase.from("facts").select("*");

			if (currentCategory !== "all")
				query = query.eq("category", currentCategory);

			const { data: facts, error } = await query
				.order("votesInteresting", { ascending: false })
				.limit(1000);

			if (!error) setFacts(facts);
			else alert(error.message);

			setIsLoading(false);
		};
		getFacts();
	}, [currentCategory]);

	const clickFormHandler = () => {
		setShowForm((show) => !show);
	};

	return (
		<>
			<Header onClickForm={clickFormHandler} showForm={showForm} />
			{showForm ? (
				<NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
			) : null}

			<main className="main">
				<CategoryFilter setCurrentCategory={setCurrentCategory} />
				{isLoading ? (
					<Loading />
				) : (
					<FactList facts={facts} setFacts={setFacts} />
				)}
			</main>
		</>
	);
}

export default App;
