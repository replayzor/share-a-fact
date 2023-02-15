import CATEGORIES from "../data";

function CategoryFilter({ setCurrentCategory }) {
	const clickAllHandler = () => {
		setCurrentCategory("all");
	};

	return (
		<aside>
			<ul>
				<li className="category">
					<button className="btn btn-all-categories" onClick={clickAllHandler}>
						All
					</button>
				</li>
				{CATEGORIES.map((cat) => (
					<li key={cat.name} className="category">
						<button
							onClick={() => setCurrentCategory(cat.name)}
							className="btn btn-category"
							style={{ backgroundColor: cat.color }}
						>
							{cat.name}
						</button>
					</li>
				))}
			</ul>
		</aside>
	);
}

export default CategoryFilter;
