function Header({ onClickForm, showForm }) {
	return (
		<header className="flex items-center justify-between mb-10">
			<div className="flex items-center gap-4">
				<img
					className="w-[68px] h-[68px]"
					src="logo.png"
					alt="Share A Fact"
					height="68"
					width="68px"
				/>

				<h1 className="text-4xl font-bold uppercase font-Coiny leading-tight mt-6">
					Today I Learned
				</h1>
			</div>

			{/* Need to convert to tailwindcss */}
			<button onClick={onClickForm} className="btn btn-large btn-open">
				{showForm ? "Close" : "Share a fact"}
			</button>
		</header>
	);
}

export default Header;
