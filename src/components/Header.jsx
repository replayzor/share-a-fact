function Header({ onClickForm, showForm }) {
	return (
		<header className="header">
			<div className="logo">
				<img src="logo.png" alt="Share A Fact" height="68" width="68px" />

				<h1>Today I Learned</h1>
			</div>

			<button onClick={onClickForm} className="btn btn-large">
				{showForm ? "Close" : "Share a fact"}
			</button>
		</header>
	);
}

export default Header;
